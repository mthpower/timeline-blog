"use strict";
require.config({
    baseUrl : '/static/js',

    paths : {
        'underscore'    : 'underscore.min',
        'backbone'      : 'backbone.min',
        'jquery'        : 'jquery.min',
        'mousewheel'    : 'jquery.mousewheel.min',
        'handlebars'    : 'handlebars',
        'text'          : 'text',
        'models'        : 'models',
        'views'         : 'views',
        'templates'     : '../templates',
    },

    shim : {
        'underscore'    : { exports : '_' },
        'jquery'        : { exports : '$' },
        'backbone'      : {
            exports : 'Backbone',
            deps    : ['underscore', 'jquery']
        },
    },
});

// Start loading the main app file.
// Application logic goes here.
requirejs(['app']);
