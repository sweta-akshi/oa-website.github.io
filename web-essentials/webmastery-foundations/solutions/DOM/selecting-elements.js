// ============== Solution #1 ============== 

// Get the header element
var header = document.querySelector('header');
console.log('header:', header);

// Get all the section elements
var sections = document.querySelectorAll('sections');
printNodeList(sections);

// Get the section element with class="current"
var current = document.querySelector('.current');
console.log('current:', current);

// Get the section that comes after the current section
var next = current.nextElementSibling;
console.log('next:', next);

// Get the h2 node from the section before the 'current' section
var h2 = current.previousElementSibling.children[0];
console.log('h2:', h2);
// or
var h22 = current.previousElementSibling.querySelector('h2');
console.log('h22:', h22);

// Get the div that contains the section that has an h2 with a class of 'highlight'
var found = document.querySelector('h2.highlight').parentElement.parentElement;
console.log('found:', found);

// Get all the sections that contain an H2 (using a single statement);
var allSectionsContainingH2 =
  Array.from(document.querySelectorAll('section h2')).map( h2 => h2.parentElement);
console.log('allSectionsContainingH2:', allSectionsContainingH2);

// ============== Solution #2 ============== 

var q = document.querySelector.bind(document)
var qa = document.querySelectorAll.bind(document);

q('header');
qa('section');
q('section.current');
q('section.current').nextElementSibling;
q('section.current').previousElementSibling.children[0];
q('h2.highlight').parentElement.parentElement;

 var foo = Array.from(qa('section h2'))
  .map(function(headline) {
    return headline.parentElement;
  });
