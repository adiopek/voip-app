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
        xtype: 'formpanel',
        itemId: 'number-form',
        buttons: {
            submit: {
                xtype: 'button',
                iconCls: 'x-fa fa-check',
                bind: {
                    text: '{action}',
                    handler: '{handler}'
                }
            },
            cancel: {
                xtype: 'button',
                text: 'Cancel',
                iconCls: 'x-fa fa-close',
                handler: 'cancelUpdate'
            }
        },
        items: [{
            xtype: 'textfield',
            name: 'number',
            label: 'Number',
            required: true,
            bind: {
                value: '{number.number}',
                disabled: '{!isNewNumber}',
                validators: '{validation}'
            },
            errorMessage: 'The number should have 8-16 digit.'
        }, {
            xtype: 'numberfield',
            name: 'channels',
            label: 'Number of channels',
            required: true,
            minValue: 2,
            maxValue: 20,
            errorMessage: 'Only between 2 and 20.',
            bind: '{number.channels}'
        }, {
            xtype: 'selectfield',
            name: 'use',
            label: 'Use',
            required: true,
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
            }],
            listeners: {
                initialize: function () {
                    this.validate();
                    console.log("test");
                }
            }
        }, {
            xtype: 'textfield',
            name: 'note',
            label: 'Note',
            bind: '{number.note}'
        }]
    }]
});
