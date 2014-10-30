define(function (require) {

    var _           = require('underscore'),
        Backbone    = require('backbone'),
        mousewheel  = require('mousewheel'),
        models      = require('models'),
        views       = require('views'),

        // Templates

        // Unpacking
        ArticleModel = models['ArticleModel'],
        ArticleCollection = models['ArticleCollection'],
        ArticleView = views['ArticleView'],
        TimelineView = views['TimelineView'];

    // Create the collection of articles.
    var articles = new ArticleCollection();
        articles.fetch();

    // Create the representation; the view.
    var timeline = new TimelineView({collection: articles});

    timeline.render()

    $('#timeline').append(timeline.el)

    // When the page is loaded, bind the horizontal scroll.
    $(document).ready(function() {
        $('timeline').mousewheel(function(e, delta) {
            this.scrollLeft -= (delta * 40);
            e.preventDefault();
        });
    });

    return {}
});
