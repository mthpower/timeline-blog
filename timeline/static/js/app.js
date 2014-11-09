define(function (require) {

    var _                   = require('underscore'),
        Backbone            = require('backbone'),
        ArticleModel        = require('models/article-model'),
        ArticleCollection   = require('models/article-collection'),
        ArticleView         = require('views/article-view'),
        TimelineView        = require('views/timeline-view');

    // Create the collection of articles.
    var articles = new ArticleCollection();
        articles.fetch({
            reset: true
        });

    $(function() {
    // Create the representation; the view.
        var timeline = new TimelineView({
                el: document.getElementById('timeline'),
                collection: articles
            });
            timeline.render();
    });

    return {};
});
