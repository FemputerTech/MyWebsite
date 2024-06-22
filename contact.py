"""
This module defines the view for handling GET requests to the contact page.
"""
from flask import render_template
from flask.views import MethodView


class Contact(MethodView):
    """
    Handles the contact page.

    Methods:
    -------
    get(): Handles GET requests to the contact page.
    """
    
    
    def get(self):
        """
        Renders the contact page.
        
        Returns:
        --------
        response : str
            The rendered HTML template for the contact page.
        """
        return render_template("contact.html")