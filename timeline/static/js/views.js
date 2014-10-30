define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
],
function ($, _, Backbone, Handlebars) {

    var ArticleView = Backbone.View.extend({
    tagName: 'li',

    template: Handlebars.compile(''),

    });


    var TimelineView = Backbone.View.extend({
    el: $('#timeline'),

    // createItem: function (article) {
    //     var view = new ArticleView({
    //         model: article
    //     });

    //     this.children[article.cid] = view;

    //     this.$el.append(view.el);
    // },

    render: function () {
        // this.collection.each(this.createItem, this);
        return Backbone.View.prototype.render.apply(this, arguments);
    },

    });


    return {
        'ArticleView': ArticleView,
        'TimelineView': TimelineView,
    };
});
