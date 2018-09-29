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
        view.destroy();
        record.commit();
    }
});
