Ext.define('VoipApp.view.main.Main', {
    extend: 'Ext.Panel',
    controller: 'gridview',
    title: 'Numbers',

    items: [
        {
            xtype: 'grid',
            height: "90%",
            store: {
                type: 'numbers'
            },
            listeners: {
                select: 'onRecordSelect'
            },
            columns: [
                { text: 'Phone number',  dataIndex: 'number'},
                { text: "Channels' number", dataIndex: 'channels'},
                { text: 'Use', dataIndex: 'use'},
                { text: 'Note', dataIndex: 'note'},
            ]
        }, 
        {
            xtype: 'button',
            ui: 'action',
            width: '100%',
            text: 'Add new number',
            handler: 'onAddNumberClick'
        }
    ]
});
