import { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre:'',
            contraseña:''
           
        }
    }

    CambiarNombre = (e) => {
        this.setState({ nombre: e.target.value });
    }

    CambiarContraseña = (e) => {
        this.setState({ contraseña: e.target.value });
    }
    
    Enviar = (e) =>{
    
        const { nombre, contraseña } = this.state;

         console.log("Nombre de usuario:", this.state.nombre);
         console.log("Contraseña:", this.state.contraseña);
        //Mensaje para meli, esto despues lo quito, es solo para comprobar que la informacion se esta enviando de manera correcta
    }
    render() {

        return (
            <section>
                <h1>Login</h1>
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
                    <button type="button" onClick={this.Enviar}>Iniciar Sesion</button>
                    <p>¿no tienes una cuenta?</p> <a href="">Registrate</a>
                </form>
            </section>
        );
    }
}
