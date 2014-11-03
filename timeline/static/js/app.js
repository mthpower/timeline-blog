define(function (require) {

    var _           = require('underscore'),
        Backbone    = require('backbone'),
        models      = require('models'),
        views       = require('views'),

        // Templates

        // Unpacking
        ArticleModel = models.ArticleModel,
        ArticleCollection = models.ArticleCollection,

        ArticleView = views.ArticleView,
        TimelineView = views.TimelineView;

    // Create the collection of articles.
    var articles = new ArticleCollection();
        articles.fetch({
            reset: true
        });

    // When the page is loaded, bind the horizontal scroll.
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
