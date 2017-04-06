var Reflux = require('reflux');
var Actions = Reflux.createActions(["search", "select_tag", "select_note", "drop", "add_note", "modal_close", "modal_save"]);

module.exports = Actions;
