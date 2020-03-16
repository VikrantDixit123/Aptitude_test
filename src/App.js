import React from 'react';
import './App.css';
import Main from './Main';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      person: null
    }
  }
  async componentDidMount() {
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();    
    this.setState({ person: data.results[0], loading: false})
  }

  render() {
    return (
      <div id='main'>
        {this.state.loading || !this.state.person ? (
          <div>
            loading...
          </div>) :
          (<div>
            <Main
              question={this.state.person.name.first}
              type='checkbox'
            />
            <br></br>
            <Main
              question={this.state.person.name.first}
              type='TrueFalse'
            />
            </div>)
        }
      </div>
    );
  }
}


