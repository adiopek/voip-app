Ext.define('VoipApp.store.Numbers', {
    extend: 'Ext.data.Store',
    alias: 'store.numbers',
    storeId: 'numbers',
    model: 'VoipApp.model.Number',

    proxy: {
        type: 'localstorage',
        id  : 'voip-Numbers'
    },
    // If these two config are set to true it's not needed 
    // to handle store loading and saving during any change.
    autoLoad: true,
    autoSync: true,

    listeners: {
        // Every update calls this.
        update: function(store, record , operation , modifiedFieldNames) {
            if (!modifiedFieldNames) {
                return;
            }
            // Ensure that select field is being set to a value, not the entire record.
            var modField = modifiedFieldNames.toString(),
                mod = record.get(modField);

            if (mod && mod.isModel) {
                record.set(modField, mod.get('text'));
            }
        }
    }
});