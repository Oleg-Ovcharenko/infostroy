import React    from 'react';
import Reflux   from 'reflux';
import Store    from '../stores/AppStore.jsx';
import Actions  from '../actions/Actions.jsx';

import Note    from './Note.jsx';

require('./Canvas.scss');

export default class Canvas extends Reflux.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.store = Store;

    this.addNote = this.addNote.bind(this);
  }

  addNote(e) {
    let x = e.nativeEvent.offsetX;
    let y = e.nativeEvent.offsetY;
    Actions.add_note(x, y);
  }

  render() {
    return (
        <section className="canvas_img">
          <div className="canvas_img__block">
            {
              this.state.tags.map(function(item) {
                return <Note key={item.id} 
                             tagId={item.id} 
                             noteActive={item.active} 
                             top={item.coordinates.top} 
                             left={item.coordinates.left} />
              })
            }
            {
                this.state.files ? <div>
                    <div>
                        {
                            this.state.files.map((file) => <img 
                            key={file.name} 
                            src={file.preview}
                            onClick={this.addNote}
                            className="canvas_img__loaded" 
                            alt={file.name} />)
                        }
                    </div>
                </div> : null 
            }
          </div>
        </section>
    );
  }
};
