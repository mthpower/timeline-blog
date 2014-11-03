define([
    'jquery',
    'underscore',
    'backbone',
],
function ($, _, Backbone) {
    var Collection = Backbone.Collection;

    var ArticleModel = Backbone.Model.extend({
        defaults: {
            author : '',
            created_on : '',
            publication_date : '',
            title : '',
            tag : '',
            content : '',
        },
    });

    var ArticleCollection = Collection.extend({
        model: ArticleModel,

        url: 'api/v1/article',

        comparator: 'publication_date',

        /**
         * @override
         */
        constructor: function () {
            Collection.apply(this, arguments);
            this.meta = {};
        },

        /**
         * @override
         */
        parse: function (response, options) {
            this.meta = response.meta;
            return Collection.prototype.parse.call(this, response.objects, options);
        }

    });

    return {
        'ArticleModel': ArticleModel,
        'ArticleCollection': ArticleCollection,
    };
});
