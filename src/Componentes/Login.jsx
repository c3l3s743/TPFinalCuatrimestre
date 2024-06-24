import { Component } from "react";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <section>
                <h1>Login</h1>
                <form>
                    <input type="text" name="" id="" />
                    <input type="password" name="" id="" />
                    <button type="submit">Iniciar Sesion</button>
                    
                </form>
            </section>
        );
    }
}
