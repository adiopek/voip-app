/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'VoipApp',

    extend: 'VoipApp.Application',

    // These two requires matters in production build.
    // Without any of them the build will crash with an error.
    requires: [
        'VoipApp.*',
        'Ext.*'
    ],

    mainView: 'VoipApp.view.main.Main'
});
