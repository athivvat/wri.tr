import React, { Component } from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/mode/markdown/markdown';

class BinsEditor extends Component {
  onEditoChange(content) {
    Meteor.call('bins.update', this.props.bin, content);
  }

  render () {
    return (
      <div className="col-xs-6">
        <h5>Input</h5>
        <CodeMirror
          value={this.props.bin.content}
          onChange={this.onEditoChange.bind(this)}
          options={{ mode: 'markdown', lineNumbers: true }}/>
      </div>
    );
  }
}

export default BinsEditor;
