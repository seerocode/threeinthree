web: python app.py
heroku ps:scale web=1
web: gunicorn appy:app -b 0.0.0.0$PORT -w 3