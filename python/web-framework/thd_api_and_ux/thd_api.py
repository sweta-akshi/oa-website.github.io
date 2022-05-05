import json
import requests, os


def new_token():
    data = [
      ('grant_type', 'client_credentials'),
    ]

    try:
        response = requests.post('https://master-data-security.apps-np.homedepot.com/security/oauth/token',
                                 data=data,
                                 auth=
                                    (
                                     os.environ['AUTH_CLIENT_ID'],  # Tells python to search your machines environment for a variable with that name
                                     os.environ['AUTH_CLIENT_SECRET']
                                    )
                                 )
        response_json = response.json()
        token = response_json["access_token"]
        head = {'Authorization': 'Bearer ' + token}
        return head
    except Exception as e:
        print(f"Error: {e}")


def get_total_pages():
    head = new_token()  # this line is calling the module that generates the token
    markets_url = f'https://master-data-location.apps-np.homedepot.com/location/markets'
    response = requests.get(markets_url, headers=head)  # make sure to turn this response into a JSON object
    output = json.loads(response.text)

    return output['page']['totalPages']


def get_markets_by_page(page_number):
    """
    Takes in a page number and returns all the Markets that are on that page
    """
    head = new_token()  # this line is calling the module that generates the token
    markets_url = f'https://master-data-location.apps-np.homedepot.com/location/markets?page={page_number}'
    response = requests.get(markets_url, headers=head)  # make sure to turn this response into a JSON object
    output = json.loads(response.text)
    total_pages = get_total_pages()
    if page_number < total_pages:
        return output['_embedded']['markets']
    else:
        raise Exception('Page not available')


def get_all_markets():
    markets_total = []
    total_pages = get_total_pages()
    for i in range(total_pages):
        markets = get_markets_by_page(i)
        for market in markets:
            has_stores = bool(get_markets_with_stores(market['marketNumber']))
            markets_total.append({'marketNumber': market['marketNumber'], 'marketName':market['marketName'],
                                  'hasStores': has_stores})
    return markets_total


def get_markets_with_stores(market_num):
    head = new_token()  # this line is calling the module that generates the token
    markets_url = f'https://master-data-location.apps-np.homedepot.com/location/stores/search/markets?numbers={market_num}'
    response = requests.get(markets_url, headers=head)  # make sure to turn this response into a JSON object
    output = json.loads(response.text)['_embedded']['stores']
    print(output)
    return len(output)