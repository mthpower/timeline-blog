define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/simple.html',
],
function ($, _, Backbone, Handlebars, simple) {

    var ArticleView = Backbone.View.extend({
    tagName: 'li',

    template: Handlebars.compile(simple),

    });


    var TimelineView = Backbone.View.extend({
    el: $('#timeline'),

    createItem: function (article) {
        var view = new ArticleView({
            model: article
        });

        this.children[article.cid] = view;

        this.$el.append(view.el);
    },

    render: function () {
        this.collection.each(this.createItem, this);
        return Backbone.View.prototype.render.apply(this, arguments);
    },

    });


    return {
        'ArticleView': ArticleView,
        'TimelineView': TimelineView,
    };
});
