Ext.define('VoipApp.view.main.Popup', {
    extend: 'Ext.Dialog',
    xtype: 'popup',
    controller: 'popup',

    title: 'Are you sure?',
    maxWidth: '100%',
    width: 400,
    hidden: false,
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
