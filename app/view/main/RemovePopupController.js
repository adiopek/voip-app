Ext.define('VoipApp.view.main.PopupController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.popup',

    removeNumber: function () {
        var view = this.getView(), 
            record = view.getRecord();
        view.destroy();
        // Removes record from the store.
        record.drop();
    },
    cancelRemoval: function () {
        var view = this.getView();
        view.destroy();
    }
    
});
