Ext.define('VoipApp.view.main.WindowForm', {
    /* This class is actually Ext.Dialog. It's documented under this name in Modern Toolkit.
     * According to the documentation: 
     * Ext.Dialog "is analogous to the Ext JS Classic Toolkit's 'Ext.window.Window' class. 
     * This class has those names (Ext.Window and Ext.window.Window) as alternate class names 
     * and the window xtype for compatibility sake."
     */
    extend: 'Ext.window.Window',
    // To update and add app uses the same view.
    // viewModel contains properties (e.g. action, handler) which instruct
    // the view about add/update action.
    xtype: 'windowform',
    controller: 'windowform',

    width: 400,
    // To fit the smaller screens.
    maxWidth: '100%',
    // Floating windows are hidden by default.
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
            validateDisabled: true,
            bind: {
                value: '{number.number}',
                // Number field is disabled if the update action is performed.
                disabled: '{!isNewNumber}',
                // Regex validation passed through viewModel.
                validators: '{validation}'
            },
            errorMessage: 'The number should consist of 8-16 digit.',
            listeners: {
                /* Needed a workaround because form showed that a valid input is invalid.
                 * On update form this field was marked invalid.
                 */
                initialize: function () {
                    this.validate();
                }
            }
        }, {
            xtype: 'numberfield',
            name: 'channels',
            label: 'Number of channels',
            required: true,
            minValue: 2,
            maxValue: 20,
            errorMessage: 'Only between 2 and 20.',
            bind: '{number.channels}',
            listeners: {
                /* Needed a workaround because form showed that a valid input is invalid.
                 * Auto-validation was performed after typing 3 charachters.
                 * On update form this field was marked invalid.
                 */
                change: function () {
                    this.validate();
                },
                initialize: function () {
                    this.validate();
                }
            }
        }, {
            xtype: 'selectfield',
            name: 'use',
            label: 'Use',
            required: true,
            bind: '{number.use}',
            options: ['User', 
                      'Conf. Room', 
                      'Fax', 
                      'Not in Use'],
            validateOnInit: true,
            listeners: {
                /* On add form this field was marked valid right after init.
                 * Despite the fact that it's required and empty at start.
                 * The workaround makes field marked invalid, as it should be. 
                 */
                initialize: function () {
                    this.validate();
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
