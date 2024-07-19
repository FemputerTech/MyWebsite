"""
This is my personal portfolio website.

To run the application, execute this script.
"""
import flask
from index import Index
from about import About
from contact import Contact


# Initializes the Flask application
app = flask.Flask(__name__)


# URL routing for the main landing page
app.add_url_rule('/',
                 view_func=Index.as_view('index'),
                 methods=['GET']
                 )


# URL routing for the about page
app.add_url_rule('/about',
                 view_func=About.as_view('about'),
                 methods=['GET']
                 )


# URL routing for the contact page
app.add_url_rule('/contact',
                 view_func=Contact.as_view('contact'),
                 methods=['GET']
                 )


# Run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)