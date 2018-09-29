Ext.define('VoipApp.store.Numbers', {
    extend: 'Ext.data.Store',
    alias: 'store.numbers',
    storeId: 'numbers',
    model: 'VoipApp.model.Number',

    proxy: {
        type: 'localstorage',
        id  : 'voip-Numbers'
    },
    autoLoad: true,
    autoSync: true,

    listeners: {
        update: function(store, record , operation , modifiedFieldNames) {
            if (!modifiedFieldNames) {
                return;
            }
            // Ensure that select field is being set to a value, not the entire record
            var modField = modifiedFieldNames.toString(),
                mod = record.get(modField);

            if (mod && mod.isModel) {
                record.set(modField, mod.get('text'));
            }
        }
    }
});