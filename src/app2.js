import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component{
  name = "Dev";
  render(){
    return(
      <>
      <div>
        <h1>Hey {this.name}</h1>
      </div>
      <div>
        <h1>How are you {this.name}</h1>
      </div>

      </>
    )
  }
}


export default App;

