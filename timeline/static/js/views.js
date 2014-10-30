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

    render: function () {
        var markup = this.template(this.model.attributes);

        this.$el.html(markup);

        return this;
    },

    });

    var TimelineView = Backbone.View.extend({

    el: $('#timeline'),

    constructor: function (options) {
        Backbone.View.apply(this, arguments);
        this.children = {};
    },

    initialize: function () {
        this.listenTo(this.collection, 'add', this.createItem);
        // $.ajaxPrefilter(function(options) {
        //         _.extend(options, {format: "json"});
        // });
    },

    createItem: function (article) {
        var view = new ArticleView({model: article});

        this.children[article.cid] = view;

        this.$el.append(view.render().el);
    },

    });


    return {
        'ArticleView': ArticleView,
        'TimelineView': TimelineView,
    };
});
