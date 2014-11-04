(function () {
    "use strict";

    require.config({

        paths : {
            'underscore'    : 'library/underscore',
            'backbone'      : 'library/backbone',
            'jquery'        : 'library/jquery',
            'handlebars'    : 'library/handlebars',
            'text'          : 'library/text',
            'templates'     : '../templates'
        },

        shim : {
            'backbone'      : {
                deps    : ['underscore', 'jquery']
            },
        },

        deps: ['app']
    });

}());
