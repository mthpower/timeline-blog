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

// To test when we create a model.
    initialize: function () {
        alert('new model created')
    };


});
