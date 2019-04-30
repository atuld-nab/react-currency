
import React, { Component } from "react";
import './App.css';
import Currencies from './components/Currencies';

class App extends Component {
  // default state object
  state = {
    currency: []
  };

  componentDidMount() {
    fetch('http://localhost:8080/getAll')
    .then(res => res.json())
    .then((data) => {
      this.setState({ currency: data })
      console.log(this.state.currency)
    })
    .catch(console.log)
  }

  render() {
    return (
      <div className="App">
       <Currencies currencies={this.state.currency} />
      </div>
    );
  }
}

export default App;
