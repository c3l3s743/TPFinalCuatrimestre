import React, { Component } from 'react';
import './App.css';
import InicioSesion from './Componentes/Login';
import Registrarse from './Componentes/SignIn';
import GestionUsuarios from './Componentes/GestionUsuarios';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paginaActual: 'registrarse', // Iniciar con la página de registro
     loggin: false,     // Estado para controlar si el usuario ha iniciado sesión
    };
  }

  manejarRegistro = () => {
    this.setState({ loggin: true }); // Marcar al usuario como autenticado
  };

  render() {
    const { paginaActual, loggin } = this.state;

    // Redirigir al inicio de sesión si el usuario se ha registrado correctamente
    if (loggin) {
      return <InicioSesion />;
    }

    return (
      <div className='App'>
        {paginaActual === 'registrarse' && <Registrarse onSignIn={this.manejarRegistro} />}
        {paginaActual === 'gestionUsuarios' && <GestionUsuarios />}
      </div>
    );
  }
}
