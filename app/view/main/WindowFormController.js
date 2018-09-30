Ext.define('VoipApp.view.main.WindowFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.windowform',

    cancelUpdate: function () {
        var view = this.getView(),
            record = view.getRecord();

        view.destroy();
        record.reject();
    },
    submitUpdate: function() {
        var view = this.getView(),
            record = view.getRecord();
        // Checking if all the form fields are valid.
        var isFormValid = view.getComponent('number-form').isValid();
        if (isFormValid) {
            // Update a record.
            view.destroy();
            record.commit();
        } else {
            // Show the invalid form message.
            Ext.Msg.alert('Invalid form', 'The form was not filled properly.');
        }
    },
    addNumber: function() {
        var view = this.getView(),
            record = view.getRecord();
        var store = Ext.getStore('numbers');
        // Checking if all the form fields are valid.
        var isFormValid = view.getComponent('number-form').isValid();
        if (isFormValid) {
            // Add a record.
            view.destroy();
            store.load();
            store.add(record);
        } else {
            // Show the invalid form message.
            Ext.Msg.alert('Invalid form', 'The form was not filled properly');
        }
    }
});
