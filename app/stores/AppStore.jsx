import Reflux  from 'reflux';
import Actions from '../actions/Actions.jsx';

let TAGS = [];

class AppStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      tags: [],            // Теги в правой части экрана 
      files: '',           // Файо после drug and drop
      modalWindow: false,  // Открытое либо закрытое модальное окно
      modalText: '',       // Текст в модальном окне
      editTag: false,      // Запрос на редактирование ?
      editTagId: 0,        // id Редактируемого тега
      topTag: 0,           // Координаты тега свергу
      leftTag: 0           // Координаты иега снизу
    };

    this.listenTo(Actions.search, this.search);
    this.listenTo(Actions.edit_tag, this.editTag);
    this.listenTo(Actions.delete_tag, this.deleteTag);
    this.listenTo(Actions.select_tag, this.selectTag);
    this.listenTo(Actions.select_note, this.selectNote);
    this.listenTo(Actions.drop, this.dropImg);
    this.listenTo(Actions.add_note, this.addNote);
    this.listenTo(Actions.modal_close, this.modalClose);
    this.listenTo(Actions.modal_save, this.modalSave);
    this.listenTo(Actions.modal_text_input, this.modalTexInput);
  }

  modalTexInput(text){
      this.setState({
        modalText: text
      })   
  }

  modalSave(modalText) {

    if(modalText.length === 0) {                          // Если пришел пустой запрос
      this.setState({
        tags: TAGS,
        modalWindow: false
      })
      return;
    }

    let TAG = {                                           // Пустой объект на добавление
      id: 0,
      text: '',
      active: false,
      coordinates: {
        top: '',
        left: ''
      }  
    };

    if(this.state.editTag === true) {                      // Если не добавление тега, а его редактирование
      for(let i = 0; i < TAGS.length; i++) {
        if(TAGS[i].id == this.state.editTagId) {
          TAGS[i].text = modalText;
        }
      }
    } else {                                               // Если добавление тега
      TAG.id = TAGS.length + 1;
      TAG.text = modalText;
      TAG.active = false;
      TAG.coordinates.top = this.state.topTag;
      TAG.coordinates.left= this.state.leftTag;

      TAGS.push(TAG);
    }

    this.setState({
      tags: TAGS,
      modalText: '',
      modalWindow: false,
      editTag: false
    })
  }

  modalClose() {
    this.setState({
      modalWindow: false,
      modalText: ''
    })   
  }

  addNote(x, y) {
    this.setState({
      topTag: y -25 + 'px',
      leftTag: x -12 + 'px',
      modalWindow: true
    })
  }

  dropImg(files) {
    TAGS.length = 0;
    this.setState({
      files: files,
      tags: []
    })
  }

  search(words) {
    let searchQuery = words.toLowerCase();
    let displayTags = TAGS.filter((el) => {
      let searchValue = el.text.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState ({
      tags: displayTags
    });
  }

  selectTagOrNote(id) {
    let tags = this.state.tags;
    tags.map(function(el){
      if(el.id == id) {
        el.active = true; 
      }
      if(el.active == true && el.id != id) {
        el.active = false;
      }
    });
    return tags;
  }

  editTag(id, text) {
    this.setState({
      modalText: text,
      modalWindow: true,
      editTag: true,
      editTagId: id
    })
  }

  deleteTag(id, text) {
    let deleteMessage = confirm('TAG: ' + text + " WILL BE DELETED!");
    let tagIndex;
    if(deleteMessage) {
      TAGS.forEach((item, i, TAGS) => {
        if(item.id == id) {
          tagIndex = i;
        }
      });
      TAGS.splice(tagIndex,1);
    }
    this.setState({
      tags: TAGS
    })
  }

  selectTag(id) {
    this.setState ({
      tags: this.selectTagOrNote(id)
    });
  }

  selectNote(id) {
    this.setState ({
      tags: this.selectTagOrNote(id)
    });
  }
}

module.exports = AppStore;
