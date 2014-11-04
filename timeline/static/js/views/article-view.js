define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text',
    'text!templates/simple.hbs',
    'text!templates/montage.hbs',
],
function ($, _, Backbone, Handlebars, text, simple, montage) {
    var View = Backbone.View;

    var ArticleView = View.extend({

        tagName: 'li',

        className: 'entry',

        /**
         * @override
         */
        constructor: function (options) {
            View.apply(this, arguments);
            this.templateName = this.model.attributes.template.toLowerCase();
        },

        /**
         * @override
         */
        render: function () {
            var hbsTemplate = this.getTemplate(this.templateName),

                template = Handlebars.compile(hbsTemplate),

                markup = template(this.model.attributes);

            this.$el.html(markup);

            return View.prototype.render.apply(this, arguments);
        },

        getTemplate: function (templateName) {
            var templateLookup = {
                'simple': simple,
                'montage': montage,
            };

            return templateLookup[templateName]
        },

    });

    return ArticleView;
});
