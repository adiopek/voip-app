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
                    number: selected[0]
                }
            }
        });
    }
});
