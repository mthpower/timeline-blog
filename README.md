timeline-blog
=============

A simple Django backed timeline blog.


### Installation

For a local Postgres, first install the dependencies:

`sudo apt-get install libpq-dev python-dev`

Then install Postgres:

`sudo apt-get install postgresql postgresql-contrib`

And follow the Ubuntu guide to configuring a PG server at:
https://help.ubuntu.com/14.04/serverguide/postgresql.html

Create a virtualenv, then:
`pip install -r requirements.txt`

Set the settings module:
`export DJANGO_SETTINGS_MODULE=timeline.settings`

You can add this to your env postactivate too.

Then you should do your usual:
`./manage.py syncdb`
`./manage.py migrate`
`./manage.py runserver`
