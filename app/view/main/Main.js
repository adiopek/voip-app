Ext.define('VoipApp.view.main.Main', {
    // Panel used as Container for Grid and Button
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
            // Grid record's click/tap handler need to be declared.
            listeners: {
                select: 'onRecordSelect'
            },
            // Grid ingredients are specified here. Columns have different minWidth percentage.
            columns: [
                { text: 'Phone number',  dataIndex: 'number', minWidth: '35%'},
                { text: "Channels' number", dataIndex: 'channels', minWidth: '10%'},
                { text: 'Use', dataIndex: 'use', minWidth: '10%'},
                { text: 'Note', dataIndex: 'note', minWidth: '35%'},
                // Last column contains a button that allows to remove a record in row.
                {
                    text: 'Remove',
                    cell: {
                        xtype: 'widgetcell',
                        widget: {
                            xtype: 'button',
                            iconCls: 'x-fa fa-trash',
                            // Bounds a data model of the record to a button config.
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
        // A button docked to the bottom is used to add a new
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
