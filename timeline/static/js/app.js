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

      // Check to see if the target is the div.
      if (!target.is( ".clickpoint" )) {
        var time = 1000;

        $(".clickpoint").siblings().each(function() {
            $(this).css({opacity: 0.0, visibility: "visible"}).animate({opacity: 1.0}, time);
            time = time + time;
        });
        // Prevent default event -- may not need this, try to see
        return( false );
      }
    });
    return {};
});
