import { Component } from 'react'
import axios from 'axios';
import './App.css'
import Login from './Componentes/Login';

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {

    }
  }
render(){
  return (
    
    <div className='App'>
      <Login/>
    </div> 
)
}

}