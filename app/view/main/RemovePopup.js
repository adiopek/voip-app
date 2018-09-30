Ext.define('VoipApp.view.main.Popup', {
    extend: 'Ext.window.Window',
    xtype: 'popup',
    controller: 'popup',

    width: 400,
    // To fit the smaller screens.
    maxWidth: '100%',
    // Floating windows are hidden by default.
    hidden: false,

    title: 'Are you sure?',
    bind: {
        html: "<p style='font-size: 15px;'>Do you really want to remove number {number.number}?</p>",
    },
    items: [{
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'cancelRemoval'
        }, {
            xtype: 'button',
            iconCls: 'x-fa fa-trash',
            text: 'Yes, remove it',
            ui: 'decline',
            handler: 'removeNumber'
        }]
    }]
});
