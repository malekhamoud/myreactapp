# Welcome to Cloud Functions for Firebase for Python!
# To get started, simply uncomment the below code or create your own.
# Deploy with `firebase deploy`

import os
import requests
from dotenv import load_dotenv
from firebase_functions import https_fn
from firebase_functions.options import set_global_options
from firebase_admin import initialize_app

# For cost control, you can set the maximum number of containers that can be
# running at the same time. This helps mitigate the impact of unexpected
# traffic spikes by instead downgrading performance. This limit is a per-function
# limit. You can override the limit for each function using the max_instances
# parameter in the decorator, e.g. @https_fn.on_request(max_instances=5).
set_global_options(max_instances=10)

initialize_app()

load_dotenv()


@https_fn.on_request()
def on_request_example(req: https_fn.Request) -> https_fn.Response:
     return https_fn.Response("Hello world!")


@https_fn.on_request()
def bumpups_timestamps(req: https_fn.Request) -> https_fn.Response:
    print('bumpups_timestamps function called')
    if req.method != 'POST':
        print('Invalid method:', req.method)
        return https_fn.Response('Method Not Allowed', status=405)
    try:
        data = req.get_json()
        youtube_url = data.get('url')
        print('Received YouTube URL:', youtube_url)
        if not youtube_url:
            print('Missing YouTube URL in request')
            return https_fn.Response('Missing YouTube URL', status=400)
    except Exception as e:
        print('Error parsing JSON body:', str(e))
        return https_fn.Response('Invalid JSON body', status=400)

    api_key = os.getenv('BUMPUPS_ABI_KEY')
    if not api_key:
        print('API key not configured')
        return https_fn.Response('API key not configured', status=500)

    bumpups_url = 'https://api.bumpups.com/chat'
    payload = {
        'url': youtube_url,
        'model': 'bump-1.0',
        'prompt': 'timestamps',
        'language': 'en',
        'output_format': 'text'
    }
    print('Outgoing payload to Bumpups API:', payload)
    headers = {
        'Content-Type': 'application/json',
        'X-Api-Key': api_key
    }
    try:
        response = requests.post(bumpups_url, json=payload, headers=headers, timeout=30)
        print('Bumpups API response status:', response.status_code)
        response.raise_for_status()
        print('Bumpups API response body:', response.text)
        return https_fn.Response(response.text, status=response.status_code, headers={'Content-Type': 'application/json'})
    except requests.RequestException as e:
        print('Error calling Bumpups API:', str(e))
        return https_fn.Response(f'Error calling Bumpups API: {str(e)}', status=502)