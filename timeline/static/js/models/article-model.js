define([
    'jquery',
    'underscore',
    'backbone',
],
function ($, _, Backbone) {

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

    return ArticleModel;
});
