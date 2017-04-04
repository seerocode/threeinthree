# Submission for Capital One Summit Challenge - Three in Three

My idea is to create a web application to get the top three restaurants/place that are open now and are within a three-mile radius of a specified location. I made this because I don't like having to look through too many restaurants and seeing just the top 3 is all I need. Also, making sure that they're open because I always find myself disappointed when I forget to check the "open now" flag in Yelp. 

I made this web app in Python and used Flask as the back-end framework.

## Links:
Link: https://threeinthree.herokuapp.com

Github: https://github.com/seerocode/threeinthree

## Future Improvements
Making this a user friendly chat-bot and displaying what people are searching for in the area (trends) to get people to search for different terms and increase traffic. As more people use the web app, I can capture data and use it to iterate on the app and make it better. Maybe people search for pizza at 10 PM most often in the 10468 area (this requires acceptance of geolocation)? OK! Let's automatically display the links to the top 3 pizza places open now before you even search! 

## Installation
You can run the app on heroku or install and run locally. To do so, clone this repo and make sure you run a virtual environment in the app folder.

```virtualenv -p python3 threeinthree```

Once you've done that, start the environment

```source bin/activate```

Start the app

```python app.py```

You should now be running the app locally.


