# Target library
import argparse
import json
import pprint
import requests
import sys
import urllib
import config

CLIENT_SECRET = 'Eg54QAlrcqAT06LD1er014QQuhuLFsfA00fFGmeGgzzOEo8-mNg0NQkQNgrxzmAUy43XK6WYnu3sC9SLucVJ1Nv0Vxv6zjMmccdQcla15T32skTK8xyS2IUgAUrOWnYx'

url = "https://api.yelp.com/"
	# data = {'client_id': CLIENT_ID,
	# 			'client_secret': CLIENT_SECRET}
	# token = requests.post(url, data=data)
	# access_token = token.json()['access_token']
get_url = 'https://api.yelp.com/v3/businesses/search'
headers = {'Authorization': 'Bearer %s' % CLIENT_SECRET}
params = {'location': '10468',
					'term': 'sushi',
					'pricing_filter': '1',
					'sort_by': 'rating',
					'open_now': 'true',
					'limit': 3,
					'radius': '4829'
				 }

get_response = requests.request('GET', get_url, params=params, headers=headers)
businesses = get_response.json()
# return render_template('businesses.html', businesses=businesses['businesses'])
# pprint.pprint(businesses)
pprint.pprint(businesses['businesses'])