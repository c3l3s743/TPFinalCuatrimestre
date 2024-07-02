import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre:'',
            contraseña:''
        };
    }

    CambiarNombre = (e) => {
        this.setState({ nombre: e.target.value });
    }

    CambiarContraseña = (e) => {
        this.setState({ contraseña: e.target.value });
    }
    
    Enviar = (e) =>{
        e.preventDefault();
        const { nombre, contraseña } = this.state;

        console.log("Nombre de usuario:", nombre);
        console.log("Contraseña:", contraseña);
    }

    render() {
        return (
            <section>
                <h1>Iniciar Sesión</h1>
                <form className="formulario" onSubmit={this.Enviar}>
                    <input 
                        type="text" 
                        value={this.state.nombre} 
                        onChange={this.CambiarNombre}
                        placeholder="Nombre de usuario"
                    />
                    <input 
                        type="password" 
                        value={this.state.contraseña}
                        onChange={this.CambiarContraseña}
                        placeholder="Contraseña"
                    />
                    <button type="submit">Iniciar Sesión</button>
                    <p>¿No tienes una cuenta?</p> <a href="/signin">Regístrate</a>
                </form>
            </section>
        );
    }
}
