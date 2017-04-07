import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

require('./Menu.scss');

export default class Menu extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
      icurrencies: []
    };
  }

  render() {
    return (
      <nav className="nav">
        <a className="nav__item" href="#">
          <span className="nav__icon_btn nav__home_item"></span>
        </a>
        <a className="nav__item" href="#">
          <span className="nav__icon_btn nav__messages_item">
            <span className="nav__messages messages">2</span>
          </span>
        </a>
        <a className="nav__item nav__item--active" href="#">
          <span className="nav__icon_btn nav__image_item"></span>
        </a>
      </nav>
    );
  }
};
