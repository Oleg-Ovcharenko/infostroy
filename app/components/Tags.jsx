import React   from 'react';
import Reflux  from 'reflux';
import Store   from '../stores/AppStore.jsx';
import Actions from '../actions/Actions.jsx';

import Tag    from './Tag.jsx';

require('./Tags.scss');

export default class Tags extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {
      icurrencies: []
    },
    this.store = Store;
  }

  render() {
    return (
        <aside className="tags">
          <div className="tags__settings">
            <input id="tags_latest" type="radio" name="tags" value="latest" defaultChecked />
            <label htmlFor="tags_latest"><span className="radio tags__latest_radio"></span>Latest</label>
            <input id="tags_all" type="radio" name="tags" value="all" />
            <label htmlFor="tags_all"><span className="radio tags__all_radio"></span>All</label>
          </div>
          <div className="tags__bar">
            {
              this.state.tags.map(function(item) {
                return <Tag key={item.id} tagId={item.id} active={item.active} text={item.text} />
              })
            }
          </div>
        </aside>
    );
  }
};

