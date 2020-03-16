import React from 'react'
import Questions from './Questions';
import Options from './Options';

export default class Main extends React.Component {
  render() {
    return (
      <div>
        <Questions ques={this.props.question} />
        <Options opt={this.props.type} />        
      </div>
    );
  }
}
