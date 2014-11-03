define([
    'jquery',
    'underscore',
    'backbone',
    'views/article-view',
],
function ($, _, Backbone, ArticleView) {
    var View = Backbone.View;

    var TimelineView = View.extend({
        displacement: 160,

        /**
         * @override
         */
        constructor: function (options) {
            Backbone.View.apply(this, arguments);
            this.children = {};
        },

        /**
         * @override
         */
        initialize: function () {
            this.listenTo(this.collection, 'reset', this.createItems);
            this.$el.scroll(this.onScroll.bind(this));
        },

        /**
         * @override
         */
        render: function () {
            var children = Object.keys(this.children).map(function (childName) {
                return this.children[childName].el;
            }, this);
            // will this cause only one reflow?
            this.$el.append(children);

            return View.prototype.render.apply(this, arguments);
        },

        /**
         * Fires when user scrolls on the page
         */
        onScroll: function(e, delta) {
            this.$el.scrollLeft(delta * displacement);
        },

        createItems: function () {
            this.collection.each(this.createItem, this);
            this.render();
        },

        createItem: function (article) {
            var view = new ArticleView({
                    model: article
                });
                view.render();

            this.children[article.cid] = view;
        }
    });


    return TimelineView;
});
