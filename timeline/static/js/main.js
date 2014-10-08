require.config({
    baseUrl : '/static/js',

    paths : {

        'underscore'    : '/static/js/underscore',
        'backbone'      : '/static/js/backbone',
        'jquery'        : '/static/js/jquery',
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
