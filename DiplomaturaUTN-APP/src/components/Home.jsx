import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div id="home">
        <header>
    <div>
        
        <h1>Transportes correcaminos<img src="./img/logo.png" width="100" style="float:right" /></h1>


    </div>
   <nav>
      <ul>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#galeria">galeria</a></li>
        <li><a href="#nosotros">Nosotros</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>
  
  <section id="inicio">
    <img src="./img/home/img05.jpg" alt=""/>
    <h1>Bienvenido a Transportes correcaminos</h1>
    <p>unimos personas, cada persona que quiera llegar con su familia nos tiene como la mejor opcion del mercado al alcance de todos. </p>
  </section>
  
  <section id="servicios">
    <img src="./img/servicios/aereo.jpg" alt=""/>
    <h2>Nuestros Servicios</h2>
    <ul>
      <li>Aereo </li>
      <li>Ferroviario </li>
      <li>Maritimo </li>
    </ul>
  </section>

  <section id="galeria">
    
    <h2>galeria</h2>
    <ul>
    <img src="./img/galeria/img01.jpg" style="max-width: 100px; max-height: 100px;"/>
    <img src="./img/galeria/img02.jpg" style="max-width: 100px; max-height: 100px;"/>
    <img src="./img/galeria/img03.jpg" style="max-width: 100px; max-height: 100px;"/>
    <img src="./img/galeria/img04.jpg" style="max-width: 100px; max-height: 100px;"/>
    <img src="./img/galeria/img05.jpg" style="max-width: 100px; max-height: 100px;"/>
    <img src="./img/galeria/img06.jpg" style="max-width: 100px; max-height: 100px;"/>
  </ul>
  </section>
  
  <section id="nosotros">
    <img src="./img/nosotros/nosotros1.jpg" alt=""/>
    <h2>Sobre Nosotros</h2>
    <p>Fue fundada en 2016 y su CEO actual es Mauricio Sana​. Sus principales inversionistas serían Cartesian Capital Group LLC, Yamasa Co. Limited. Los exejecutivos Michael Cawley (Ryanair) y Michael Powell (WizzAir), son también accionistas de la línea aérea.</p>
  </section>
  
  <section id="contacto">
    <img src="./img/nosotros/nosotros2.jpg" alt=""/>
    <h2>Contacto</h2>
    <p>Puedes ponerte en contacto con nosotros a través de...</p>
    <P>E-MAIL: correcaminos/srl@gmail.com</P>
    <p>Telefono: 1133639117</p>
    <p>instagram: Transportes correcaminos/srl</p>
    <p>Fax:123456789012@ fax.plus</p>
  </section>
  
  <footer>
    <p>Derechos de autor &copy; 2023 Transportes correcaminos SRL </p>
  </footer>
  </div>
  )
}

export default Home