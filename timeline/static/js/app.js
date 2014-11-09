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

    $(document).click(function(event) {
        var target = $( event.target );

        // Check to see if the target is the clickpoint.
        if (target.parent().is( ".clickpoint" )) {
        var time = 1000;

        // Iterate through each element in article div and increase animation
        // time for each one.
        var articleElems = target.parent().siblings();
        if ($(articleElems[articleElems.length -1]).css('visibility') == 'hidden') {
            $(articleElems).each(function() {
                $(this).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, time);
                time = time + 1500;
            });
        } else if ($(articleElems[articleElems.length -1]).css('visibility') == 'visible'){
            $(articleElems).each(function() {
                $(this).css({opacity: 1.0, visibility: "hidden"}).animate({opacity: 0.0}, time);
                time = time + 1500;
            });
        }
        // Prevent default event -- may not need this, try to see
        return( false );
      }
    });

    return {};
});
