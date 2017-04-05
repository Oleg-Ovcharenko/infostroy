import React   from 'react';
import Reflux  from 'reflux';
import Actions from '../actions/Actions.jsx';
import Stores  from '../stores/AppStore.jsx';

import Menu    from './Menu.jsx';
import Header  from './Header.jsx';
import Canvas  from './Canvas.jsx';
import Tags    from './Tags.jsx';
import Modal   from './Modal.jsx';

require('./App.scss');

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="app">
        <Menu />
        <div className="container">
          <Header />
          <div className="wrap">
            <Canvas />
            <Tags />
          </div>
        </div>
        <Modal />
      </div>
    );
  }
};