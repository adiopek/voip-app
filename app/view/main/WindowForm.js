Ext.define('VoipApp.view.main.WindowForm', {
    /* This class is actually Ext.Dialog. It's documented under this name in Modern Toolkit.
     * According to the documentation: 
     * Ext.Dialog "is analogous to the Ext JS Classic Toolkit's 'Ext.window.Window' class. 
     * This class has those names (Ext.Window and Ext.window.Window) as alternate class names 
     * and the window xtype for compatibility sake."
     */
    extend: 'Ext.window.Window',
    xtype: 'windowform',
    controller: 'windowform',

    maxWidth: '100%',
    width: 400,
    hidden: false,

    items: [{
        xtype: 'textfield',
        name: 'number',
        label: 'Number',
        bind: '{number.number}'
    }, {
        xtype: 'numberfield',
        name: 'channels',
        label: 'Number of channels',
        minValue: 2,
        maxValue: 20,
        validationMessage: 'Only between 2 and 20.',
        bind: '{number.channels}'

    }, {
        xtype: 'selectfield',
        name: 'use',
        label: 'Use',
        bind: '{number.use}',
        options: [{
            text: 'User',
            value: 'User'
        }, {
            text: 'Conf. Room',
            value: 'Conf. Room'
        }, {
            text: 'Fax',
            value: 'Fax'
        }, {
            text: 'Not in Use',
            value: 'Not in Use'
        }]
    }, {
        xtype: 'textfield',
        name: 'note',
        label: 'Note',
        bind: '{number.note}'

    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            iconCls: 'x-fa fa-check',
            text: 'Update',
            handler: 'submitUpdate'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'cancelUpdate'
        }]
    }]
});
