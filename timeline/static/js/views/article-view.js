define([
    'jquery',
    'underscore',
    'backbone',
    'handlebars',
    'text!templates/simple.hbs',
],
function ($, _, Backbone, Handlebars, simple) {
    var View = Backbone.View;

    var ArticleView = View.extend({

        tagName: 'li',

        className: 'entry',

        template: Handlebars.compile(simple),

        /**
         * @override
         */
        render: function () {
            var markup = this.template(this.model.attributes);

            this.$el.html(markup);

            return View.prototype.render.apply(this, arguments);
        }

    });

    return ArticleView;
});
