var Reflux = require('reflux');
var Actions = require('../actions/Actions.jsx');

let TAGS = [
  {
    "id": 1,
    "text": "Lorem inpsum dolor sit amet, consectetur adipiscing elit. Proin sed metus felis. Mauris consequat aliquet sollicitudin.",
    "coordinates": {
      "top": "300px",
      "left": "400px"
    }
  }, {
    "id": 2,
    "text": "Proin sed metus felis. Mauris consequat aliquet sollicitudin.",
    "coordinates": {
      "top": "10px",
      "left": "100px"
    }
  }, {
    "id": 3,
    "text": "Proin sed metus felis. Mauris consequat aliquet sollicitudin. Amet repellat repudiandae? Олег",
    "coordinates": {
      "top": "200px",
      "left": "50px"
    }
  }, {
    "id": 4,
    "text": "Proin sed metus felis. Mauris consequat aliquet sollicitudin. Amet repellat repudiandae? Ipsum rem similique non facilis.",
    "coordinates": {
      "top": "50px",
      "left": "100px"
    }
  }, {
    "id": 5,
    "text": "Proin sed metus felis. Mauris consequat aliquet sollicitudin. Amet repellat repudiandae?",
    "coordinates": {
      "top": "320px",
      "left": "100px"
    }
  }
];


class AppStore extends Reflux.Store {
  constructor() {
    super();
    this.state = {
      tags: TAGS
    };

    this.listenTo(Actions.search, this.Search);
  }

  Search(words) {
    
    let searchQuery = words.toLowerCase();
    let displayTags = TAGS.filter(function(el) {
      let searchValue = el.text.toLowerCase();
      return searchValue.indexOf(searchQuery) !== -1;
    });

    this.setState ({
      tags: displayTags
    });
  }
}

module.exports = AppStore;
