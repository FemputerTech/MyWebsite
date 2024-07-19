"""
This is my personal portfolio website.

To run the application, execute this script.
"""
import flask
from index import Index


# Initializes the Flask application
app = flask.Flask(__name__)


# URL routing for the main landing page
app.add_url_rule('/',
                 view_func=Index.as_view('index'),
                 methods=['GET']
                 )


# Run the application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)