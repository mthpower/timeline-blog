define([
    'jquery',
    'underscore',
    'backbone',
    'models/article-model'
],
function ($, _, Backbone, ArticleModel) {
    var Collection = Backbone.Collection;

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

    return ArticleCollection;
});
