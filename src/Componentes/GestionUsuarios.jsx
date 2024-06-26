import { Component } from "react";
import Login from "./Login";

export default class ListaProductos extends Component{
    constructor(props){
        super(props);
        this.state = {}

    }
    render(){
        return(
    
         <div className="usuarios">
                {this.props.usuario.map((prod, i)=>
                <Usuario
                />
                  )}
         </div>

        )
    }
}