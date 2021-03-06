from flask import Flask, render_template, jsonify, request

# Target library
import argparse
import json
import pprint
import requests
import sys
import urllib
import config

try:
		# For Python 3.0 and later
		from urllib.error import HTTPError
		from urllib.parse import quote
		from urllib.parse import urlencode
except ImportError:
		# Fall back to Python 2's urllib2 and urllib
		from urllib2 import HTTPError
		from urllib import quote
		from urllib import urlencode

app = Flask(__name__)

# Configs
CLIENT_ID = config.CLIENT_ID
CLIENT_SECRET = config.CLIENT_SECRET

########################


@app.route("/", methods=['GET', 'POST'])
def index():
	return render_template('index.html')

@app.route('/run_get')
def run_get():
	get_url = 'https://api.yelp.com/v3/businesses/search'
	headers = {'Authorization': 'Bearer %s' % CLIENT_SECRET}
	params = {'location': request.args.get('user_location'),
					'term': request.args.get('user_term'),
					'pricing_filter': '1',
					'sort_by': 'rating',
					'open_now': 'true',
					'limit': 3,
					'radius': '4829'
				 }

	get_response = requests.request('GET', get_url, params=params, headers=headers)
	businesses = get_response.json()
	return render_template('businesses.html', businesses=businesses['businesses'])
	pprint.pprint(businesses['businesses'])



if __name__ == "__main__":
		app.run(debug=True)
