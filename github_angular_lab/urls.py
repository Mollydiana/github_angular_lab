from django.conf.urls import patterns, include, url

from django.contrib import admin

admin.autodiscover()

urlpatterns = patterns('',
    # This is our new URL
    url(r'^$', 'github_app.views.index', name="index"),
    url(r'^proxy/(?P<path>.*)$', 'github_app.views.proxy_to', {'target_url': 'https://api.github.com/'}),
)


