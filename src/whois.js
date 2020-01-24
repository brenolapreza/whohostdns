import React, { Component } from 'react';

// import { Container } from './styles';

export default class Whois extends Component {

    state = {
        loading: true,
        nome: null
    };

async componentDidMount(){
    let url = "https://rdap.registro.br/domain/www.grupovoll.com.br";
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.handle)
    this.setState({nome: data.nameservers[0].ldhName})
    console.log(data);
}

  render() {
    return(
        <div className="container text-center">
            {this.state.nome}
        </div>    
    )
  }
}
 
