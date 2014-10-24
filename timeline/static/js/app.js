define(function (require) {
    "use strict";

    var _           = require('underscore'),
        Backbone    = require('backbone'),
        mousewheel	= require('mousewheel');

    $(document).ready(function() {
        $('html, body, *').mousewheel(function(e, delta) {
            this.scrollLeft -= (delta * 40);
            e.preventDefault();
        });
    });

    return {}
});
