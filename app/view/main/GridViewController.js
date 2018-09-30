Ext.define('VoipApp.view.main.GridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gridview',
    /* This function passes a 'selected' parameter 
     * which is an array of selected records
     * in this case there's only one so the first
     * element of array need to be referenced.
     */
    onRecordSelect: function (view, selected) {
        Ext.Viewport.add({
            xtype: 'windowform',
            title: 'Update number',
            record: selected[0],
            viewModel: {
                data: {
                    number: selected[0],
                    isNewNumber: false,
                    action: 'Update',
                    handler: 'submitUpdate'
                }
            }
        });
    },
    onAddNumberClick: function () {
        // To define a new number a new instance 
        // of 'Number' model need to be created.
        var newNumber = new VoipApp.model.Number();
        Ext.Viewport.add({
            xtype: 'windowform',
            title: 'New number',
            record: newNumber,
            viewModel: {
                data: {
                    number: newNumber,
                    // Valid number consist only of 8-16 digits.
                    validation: new RegExp("^\\d{8,16}$"),
                    isNewNumber: true,
                    action: 'Add',
                    handler: 'addNumber'
                }
            }
        });
    },
    onRemoveClick: function (button, event) {
        // Button inherited a record model within its definition in Main.js
        var numberToRemove = button.getRecord();
        Ext.Viewport.add({
            xtype: 'popup',
            record: numberToRemove,
            viewModel: {
                data: {
                    number: numberToRemove
                }
            }
        });
    }
});
