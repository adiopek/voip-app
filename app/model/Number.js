Ext.define('VoipApp.model.Number', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'number',  type: 'string'},
        {name: 'channels',   type: 'int', convert: null},
        {name: 'use', type: 'string'},
        {name: 'note', type: 'string'}
    ]
});