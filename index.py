"""
This module defines the view for handling GET requests to the home page.
"""
from flask import render_template
from flask.views import MethodView


class Index(MethodView):
   
    def get(self):
        return {"details":"It's aliiiiiive!"}