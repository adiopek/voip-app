/*
 * This call registers your application to be launched when the browser is ready.
 */
Ext.application({
    name: 'VoipApp',

    extend: 'VoipApp.Application',

    requires: [
        'VoipApp.*',
        'Ext.*'
    ],

    mainView: 'VoipApp.view.main.Main'
});
