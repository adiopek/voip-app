Ext.define('VoipApp.view.main.GridViewController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.gridview',
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
        var newNumber = new VoipApp.model.Number();
        Ext.Viewport.add({
            xtype: 'windowform',
            title: 'New number',
            record: newNumber,
            viewModel : {
                data: {
                    number: newNumber,
                    validation: new RegExp("^\\d{8,16}$"),
                    isNewNumber: true,
                    action: 'Add',
                    handler: 'addNumber'
                }
            }
        });
    },
    onRemoveClick: function (button, event) {
        var numberToRemove = button.getRecord();
        Ext.Viewport.add({
            xtype: 'popup',
            record: numberToRemove,
            viewModel : {
                data: {
                    number: numberToRemove
                }
            }
        });
    }
});
