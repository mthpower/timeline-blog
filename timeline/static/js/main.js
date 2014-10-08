require.config({
    baseUrl : '/static/js',

    paths : {

        'underscore'    : '/static/js/underscore.min',
        'backbone'      : '/static/js/backbone.min',
        'jquery'        : '/static/js/jquery.min',
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
