import React     from 'react';
import Reflux    from 'reflux';
import Store     from '../stores/AppStore.jsx';
import Actions   from '../actions/Actions.jsx';

import DropZone  from './DropZone.jsx'
import Search    from './Search.jsx'

export default class Header extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
      icurrencies: []
    };
  }

  render() {
    return (
      <header className="header">
        <div className="header__inputs">
          <DropZone />
          <Search />
        </div>
        <div className="header__log_in">
          <a className="header__log_in_link" href="#"></a>
        </div>
      </header>
    );
  }
};
