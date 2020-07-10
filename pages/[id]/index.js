import React, { Component } from "react";
import Head from 'next/head'
import { useRouter } from 'next/router'
import "isomorphic-fetch";


class Home extends Component{
  
  static getInitialProps = async (ctx) => {
    const response = await fetch(
      `https://vende-tudo-api-django.herokuapp.com/anuncios/${ctx.query.id}/`
    );
    return { repositories: await response.json() };
  };

  componentDidMount = async () =>{
    window.location.href = await `https://vendetudo.com/anuncio/detalhe/${this.props.repositories.id}/`
  }

  render() {
    return (
      <>
        <Head>
          <title>{this.props.repositories.infoCar.Modelo}</title>
          <meta property="og:image" content={this.props.repositories.image_anuncio[0].foto}/> 
          <meta property="og:description" content={`${this.props.repositories.infoCar.Marca} - ${this.props.repositories.infoCar.Modelo} - ${this.props.repositories.valor}` }/>
          <meta property="og:site_name" content="VendeTudo.com"/>
        </Head>
      </>
    );
  }
}

export default Home