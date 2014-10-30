"use strict";
require.config({
    baseUrl : '/static/js',

    paths : {
        'underscore'    : 'library/underscore.min',
        'backbone'      : 'library/backbone.min',
        'jquery'        : 'library/jquery.min',
        'mousewheel'    : 'library/jquery.mousewheel.min',
        'handlebars'    : 'library/handlebars',
        'text'          : 'library/text',
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
