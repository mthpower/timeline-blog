define(function (require) {

    var _           = require('underscore'),
        Backbone    = require('backbone'),
        mousewheel  = require('mousewheel');

        ArticleModel, ArticleCollection
                    = require('models');

        ArticleView, TimelineView
                    = require('views');


    $(document).ready(function() {
        $('timeline').mousewheel(function(e, delta) {
            this.scrollLeft -= (delta * 40);
            e.preventDefault();
        });
    });


    // Create the collection of articles.
    var articles = new ArticleCollection();
        articles.fetch();

    // Create the representation; the view.
    var timeline = new TimelineView

    return {}
});
