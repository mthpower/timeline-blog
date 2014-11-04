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
            image1 : '',
            image2 : '',
            image3 : '',
            image4 : '',
            image5 : '',
            image6 : '',
            template: '',
        },
    });

    return ArticleModel;
});
