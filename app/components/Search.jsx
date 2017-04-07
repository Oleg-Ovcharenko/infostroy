import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

require('./Search.scss');

export default class Search extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
        searchText: ''
    };

    this.onInputSearch = this.onInputSearch.bind(this);
  }

  onInputSearch(e) {
    var querySearchText = e.target.value;
    this.setState({searchText: querySearchText});
    Actions.search(querySearchText);
  }

  render() {
    return (
        <div className="header__search_container">
            <input className="header__search" type="search" value={this.state.searchText} onChange={this.onInputSearch} placeholder="Search" />
        </div>
    );
  }
};