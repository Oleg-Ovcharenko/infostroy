import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

import Note    from './Note.jsx';

require('./Canvas.scss');

export default class Canvas extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;
  }

  render() {
    return (
        <section className="canvas_img">
          <div className="canvas_img__block">
            {
              this.state.tags.map(function(item) {
                return <Note key={item.id} top={item.coordinates.top} left={item.coordinates.left} />
              })
            }
            <img className="canvas_img__loaded" src="../img/house.jpg" alt="house" />
          </div>
        </section>
    );
  }
};
