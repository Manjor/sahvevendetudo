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
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />  
        </Head>
      </>
    );
  }
}