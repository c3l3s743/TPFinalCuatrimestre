import { Component } from 'react'
import axios from 'axios';
import './App.css'
import Login from './Componentes/Login';
import SignIn from './Componentes/SignIn';
import GestionUsuarios from './Componentes/GestionUsuarios';

export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      loggin: 'iniciar',
    }
  }

  
render(){
  
  return (
    
    <div className='App'>
        <SignIn />
      </div>
)
}

}