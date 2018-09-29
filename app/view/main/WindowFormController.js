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
        var isFormValid = view.getComponent('number-form').isValid();
        
        if (isFormValid) {
            view.destroy();
            record.commit();
        } else {
            Ext.Msg.alert('Invalid form', 'The form was not filled properly.');
        }
    },
    addNumber: function() {
        var view = this.getView(),
            record = view.getRecord();
        var store = Ext.getStore('numbers');
        var isFormValid = view.getComponent('number-form').isValid();

        if (isFormValid) {
            view.destroy();
            store.load();
            store.add(record);
        } else {
            Ext.Msg.alert('Invalid form', 'The form was not filled properly');
        }
    }
});
