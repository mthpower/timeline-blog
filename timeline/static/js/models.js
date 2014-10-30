define([
    'jquery',
    'underscore',
    'backbone',
],
function ($, _, Backbone) {
    var ArticleModel = Backbone.Model.extend({

        urlRoot: 'api/v1/article',

        defaults: {
            author : '',
            created_on : '',
            publication_date : '',
            title : '',
            tag : '',
            content : '',
        },
    });

    var ArticleCollection = Backbone.Collection.extend({
        model: ArticleModel,

        meta: {},

        url: 'api/v1/article',

        comparator: 'publication_date',

        parse: function (response) {
            this.meta = response.meta;
            return response.objects;
        }

    });

    return {
        'ArticleModel': ArticleModel,
        'ArticleCollection': ArticleCollection,
    };
});
