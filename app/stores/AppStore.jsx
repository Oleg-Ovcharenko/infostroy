var Reflux = require('reflux');
var Actions = require('../actions/Actions.jsx');

let TAGS = [];
let TAG = {
  id: 0,
  text: '',
  active: false,
  coordinates: {
    top: '',
    left: ''
  }  
};

class AppStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      tags: [],           // Теги в правой части экрана 
      files: "",          // Файо после drug and drop
      modalWindow: false  // Открытое либо закрытое модальное окно
    };

    this.listenTo(Actions.search, this.search);
    this.listenTo(Actions.select_tag, this.selectTag);
    this.listenTo(Actions.select_note, this.selectNote);
    this.listenTo(Actions.drop, this.dropImg);
    this.listenTo(Actions.add_note, this.addNote);
    this.listenTo(Actions.modal_close, this.modalClose);
    this.listenTo(Actions.modal_save, this.modalSave);
  }

  modalSave(modalText) {

    console.log(TAG.id + 1);

    TAG.id = TAG.id + 1;
    TAG.text = modalText;
    TAG.active = true;
    
    TAGS.push(TAG);

    console.log(TAGS);

    this.setState({
      tags: TAGS,
      modalWindow: false
    })
  }

  modalClose() {
    this.setState({
      modalWindow: false
    })   
  }

  addNote(x, y) {
    TAG.coordinates.top = y + 'px';
    TAG.coordinates.left = x + 'px';
    this.setState({
      modalWindow: true
    })
  }

  dropImg(files) {
    this.setState({
      files: files,
      tags: []
    })
  }

  search(words) {
    let searchQuery = words.toLowerCase();
    let displayTags = TAGS.filter(function(el) {
      let searchValue = el.text.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState ({
      tags: displayTags
    });
  }

  selectTag(id) {
    let tags = this.state.tags;
    tags.map(function(el){
      if(el.id == id) {
        el.active = true; 
      }
      if(el.active == true && el.id != id) {
        el.active = false;
      }
    });

    this.setState ({
      tags: tags
    });
  }

  selectNote(id) {
    let tags = this.state.tags;
    tags.map(function(el){
      if(el.id == id) {
        el.active = true; 
      }
      if(el.active == true && el.id != id) {
        el.active = false;
      }
    });

    this.setState ({
      tags: tags
    });
  }
}

module.exports = AppStore;
