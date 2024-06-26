import React, { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: '',
            contraseña: '',
            correo: ''
        };
    }

    Cambiar = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    Enviar = (e) => {
        e.preventDefault();
        const { nombre, correo, contraseña } = this.state;
        
        if (!nombre || !correo || !contraseña) {
            alert("Todos los campos son obligatorios");
            return;
        }

        console.log("Nombre de usuario:", nombre);
        console.log("Correo electrónico:", correo);
        console.log("Contraseña:", contraseña);

    }

    render() {
        const { nombre, correo, contraseña } = this.state;

        return (
            <section>
                <h1>Registrarse</h1>
                <form className="formulario" onSubmit={this.Enviar}>
                    <input 
                        type="text" 
                        name="nombre"
                        value={nombre} 
                        onChange={this.Cambiar}
                        placeholder="Nombre de usuario"
                    />
                    <input 
                        type="email"
                        name="correo"
                        value={correo}
                        onChange={this.Cambiar}
                        placeholder="Correo"
                    />
                    <input 
                        type="password" 
                        name="contraseña"
                        value={contraseña}
                        onChange={this.Cambiar}
                        placeholder="Contraseña"
                    />
                    <button type="submit">Registrarse</button>
                    <p>¿Ya tienes una cuenta? <a href="/login">Inicia Sesión</a></p>
                </form>
            </section>
        );
    }
}
