define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/simple.html',
],
function ($, _, Backbone, Handlebars, simple) {
    var View = Backbone.View;

    var ArticleView = View.extend({

        tagName: 'li',

        className: 'entry',

        template: Handlebars.compile(simple),

        /**
         * @override
         */
        render: function () {
            var markup = this.template(this.model.attributes);

            this.$el.html(markup);

            return View.prototype.render.apply(this, arguments);
        }

    });

    var TimelineView = View.extend({
        displacement: 80,

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
            this.$el.scrollLeft(delta >= 0 ? this.displacement : -this.displacement);
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


    return {
        'ArticleView': ArticleView,
        'TimelineView': TimelineView,
    };
});
