import React, { Component } from "react";
import Head from 'next/head'

import "isomorphic-fetch";

export default class Home extends Component {
  static getInitialProps = async () => {
    const response = await fetch(
      "https://vende-tudo-api-django.herokuapp.com/anuncios/503/"
    );
    return { repositories: await response.json() };
  };

  componentDidMount = () =>{
    window.location.href = 'https://vendetudo.com/anuncio/detalhe/503/'
  }

  render() {
    return (
      <>
        <Head>
          <title>{this.props.repositories.infoCar.Modelo}</title>
          <meta property="og:image" content={this.props.repositories.image_anuncio[0].foto}/> 
          <meta property="og:description" content={`${this.props.repositories.infoCar.Marca} - ${this.props.repositories.infoCar.Modelo} - ${this.props.repositories.valor}` }/>
        </Head>
      </>
    );
  }
}