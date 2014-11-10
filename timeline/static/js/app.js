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

    $(document).ready(function() {
        if (window.screen.width >= 670) {
            var screenWidth = window.screen.width
        } else {
            var screenWidth = 670
        }
        $('.entry').css('width', screenWidth)
        $('#bar').css('left', (screenWidth / 2))
    });

    return {};
});
