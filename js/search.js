let lunrIndex = null
let pagesMetaData = null

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1
}

// Generic scheduler / runner for iterators (such as generator functions).
// For every yield, it checks to see if there is time remaining on the idle loop
// If so, it executes more work, otherwise it queues up for the next idle period
function runNicely(it, onYield, onComplete) {
    function scheduleBatch() {
        requestIdleCallback(deadline => {
            let val = null
            do {
                val = it.next()
                onYield && onYield(val.value)
                if (deadline.timeRemaining() <= 0) {
                    return scheduleBatch()
                }
            } while (!val.done)
            onComplete && onComplete(val.value)
        })
    }
    scheduleBatch()
}

function* indexPages(batchSize) {
    console.log('indexing', pagesMetaData.length, 'pages')
    console.time('lunr indexing')
    for (let index = 0; index < pagesMetaData.length; index++) {
        lunrIndex.add(pagesMetaData[index])
        if (index % batchSize === 0) yield
    }
    console.timeEnd('lunr indexing')
    lunrIndex.pipeline.remove(lunrIndex.stemmer)
}

// build the index in the browser
function buildLunrIndex() {
    // Set up lunrjs by declaring the fields we use
    // Also provide their boost level for the ranking
    lunrIndex = new lunr.Index()
    lunrIndex.ref('uri')
    lunrIndex.field('title', {
        boost: 15
    })
    lunrIndex.field('tags', {
        boost: 10
    })
    lunrIndex.field('content', {
        boost: 5
    })

    // Feed lunr with each file and let lunr actually index them
    runNicely(indexPages(5), null, () => {
        console.log('indexing complete')
    })
}

// load a pre-built index file from server
// NOTE: I never quite got this working so I'm using the `runNicely` function above
//       to index in the browser without tying up the main thread for too long
//       by using requestIdleCallback in batches.
function fetchRemoteIndexFile() {
    console.log('fetching:', baseurl + 'lunr-index.json')
    $.getJSON(baseurl + 'lunr-index.json').done(indexData => {
        // lunr.Index.load(JSON.parse(indexData))
        lunrIndex = lunr.Index.load(indexData)
    })
}

// Initialize lunrjs using our generated index file
function initLunr() {
    if (!endsWith(baseurl, '/')) {
        baseurl = baseurl + '/'
    }

    // First retrieve the index file
    console.log('fetching:', baseurl + 'index.json')
    $.getJSON(baseurl + 'index.json')
        .done(metaData => {
            pagesMetaData = metaData
            // fetchRemoteIndexFile()
            buildLunrIndex()
        })
        .fail(function(jqxhr, textStatus, error) {
            var err = textStatus + ', ' + error
            console.error('Error getting Hugo index file:', err)
        })
}

/**
 * Trigger a search in lunr and transform the result
 *
 * @param  {String} query
 * @return {Array}  results
 */
function search(query) {
    // Find the item in our index corresponding to the lunr one to have more info
    return lunrIndex.search(query).map(function(result) {
        return pagesMetaData.filter(function(page) {
            return page.uri === result.ref
        })[0]
    })
}

initLunr()

$(document).ready(function() {
    new autoComplete({
        /* selector for the search box element */
        selector: $('#search-by').get(0),
        /* source is the callback to perform the search */
        source: function(term, response) {
            response(search(term))
        },
        /* renderItem displays individual search results */
        renderItem: function(item, term) {
            var numContextWords = 2
            var text = item.content.match(
                '(?:\\s?(?:[\\w]+)\\s?){0,' +
                    numContextWords +
                    '}' +
                    term +
                    '(?:\\s?(?:[\\w]+)\\s?){0,' +
                    numContextWords +
                    '}'
            )
            item.context = text
            return (
                '<div class="autocomplete-suggestion" ' +
                'data-term="' +
                term +
                '" ' +
                'data-title="' +
                item.title +
                '" ' +
                'data-uri="' +
                item.uri +
                '" ' +
                'data-context="' +
                item.context +
                '">' +
                '» ' +
                item.title +
                '<div class="context">' +
                (item.context || '') +
                '</div>' +
                '</div>'
            )
        },
        /* onSelect callback fires when a search suggestion is chosen */
        onSelect: function(e, term, item) {
            console.log(item.getAttribute('data-val'))
            location.href = item.getAttribute('data-uri')
        }
    })
})
