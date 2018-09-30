Ext.define('VoipApp.view.main.Main', {
    extend: 'Ext.Panel',
    controller: 'gridview',
    title: 'Numbers',
    items: [
        {
            xtype: 'grid',
            fullscreen: true,
            itemConfig: {
                // viewModel needed for referencing record model data by 'trash' button.
                viewModel: true
            },
            store: {
                type: 'numbers'
            },
            // Text showed when the Store is empty. No number added.
            emptyText: "You haven't added any number yet.",
            listeners: {
                select: 'onRecordSelect'
            },
            columns: [
                { text: 'Phone number',  dataIndex: 'number', minWidth: '35%'},
                { text: "Channels' number", dataIndex: 'channels', minWidth: '10%'},
                { text: 'Use', dataIndex: 'use', minWidth: '10%'},
                { text: 'Note', dataIndex: 'note', minWidth: '35%'},
                {
                    text: 'Remove',
                    cell: {
                        xtype: 'widgetcell',
                        widget: {
                            xtype: 'button',
                            iconCls: 'x-fa fa-trash',
                            bind: {
                                record: '{record}'
                            },
                            handler: 'onRemoveClick'
                        }
                    },
                    minWidth: '5%',
                }
            ]
        }, 
        {
            xtype: 'button',
            ui: 'action',
            docked: 'bottom',
            width: '100%',
            text: 'Add new number',
            handler: 'onAddNumberClick'
        }
    ]
});
