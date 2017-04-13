var Reflux = require('reflux');
var Actions = Reflux.createActions(["search", "select_tag", "delete_tag", "edit_tag", "select_note", "drop", "modal_text_input", 
"add_note", "modal_close", "modal_save"]);

module.exports = Actions;
