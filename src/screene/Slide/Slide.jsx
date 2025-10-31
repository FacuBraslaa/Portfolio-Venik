import React from "react";
import "./style.css";

export const Slide = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="slide" data-model-id="8:183">
      <div className="text-wrapper">Portafolio</div>

      <img
        className="line"
        alt="Line"
        src="https://c.animaapp.com/XeGSEg7A/img/line-6.svg"
      />

      import React from "react";
import "./style.css";

export const Slide = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="slide" data-model-id="8:183">
      <div className="text-wrapper">Portafolio</div>

      <img
        className="line"
        alt="Line"
        src="https://c.animaapp.com/XeGSEg7A/img/line-6.svg"
      />

      <div className="div" onClick={() => scrollToSection("inicio")}>Proyectos</div>
      <div className="text-wrapper-2" onClick={() => scrollToSection("servicios")}>Servicios</div>
      <div className="text-wrapper-3" onClick={() => scrollToSection("sobre-mi")}>Sobre mi</div>

      <img
        className="img"
        alt="Line"
        src="https://c.animaapp.com/XeGSEg7A/img/line-4.svg"
      />

      <section id="inicio">
        <div className="text-wrapper-4">2023</div>
        <div className="text-wrapper-5">2024</div>
        <div className="text-wrapper-6">2025</div>

        <p className="p">
          MovEyeS fue una app conectada a una placa Arduino con sensor de
          movimiento. Permitía configurar una alarma, ver el historial de
          movimientos y administrar usuarios y una red familiar. Usaba dos bases
          de datos: una para usuarios y otra para los datos del sensor. Yo diseñé
          la interfaz, la maqueta de la casa para ubicar los sensores y la caja
          del producto final.
        </p>

        <img
          className="IMG"
          alt="Img"
          src="https://c.animaapp.com/XeGSEg7A/img/img-7821-1.png"
        />

        <p className="text-wrapper-7">
          Dribble Dash es un juego 2D de fútbol donde el jugador controla a un
          futbolista que debe llegar a la meta mientras esquiva objetos como
          botellas y piedras, y salta a los defensores. El juego está pensado para
          ser entretenido y accesible para todas las edades. Yo diseñé al jugador
          en distintos movimientos, los defensores, los objetos, el ambiente
          futbolero y la pantalla de inicio.
        </p>

        <img
          className="captura-de-pantalla"
          alt="Captura de pantalla"
          src="https://c.animaapp.com/XeGSEg7A/img/captura-de-pantalla-2025-10-30-a-la-s--12-34-39-p--m--1.png"
        />

        <p className="text-wrapper-8">
          Remind es una app para ayudar a personas mayores a recordar tareas
          importantes del día, como tomar medicinas o ir al médico. Busca que sean
          más organizados, independientes y tranquilos. Yo diseñé la interfaz
          (UX/UI) y desarrollé el front-end y back-end, gestionando usuarios,
          recordatorios y la conexión con la base de datos.
        </p>

        <img
          className="captura-de-pantalla-2"
          alt="Captura de pantalla"
          src="https://c.animaapp.com/XeGSEg7A/img/captura-de-pantalla-2025-10-30-a-la-s--12-39-54-p--m--1@2x.png"
        />
      </section>

      <img
        className="line-2"
        alt="Line"
        src="https://c.animaapp.com/XeGSEg7A/img/line-5.svg"
      />

      <section id="servicios">
        <div className="text-wrapper-10">Servicios</div>
        
        <p className="dise-o-UI-UX-y">
          Diseño UI/UX y branding visual: Creo interfaces y estilos visuales
          claros, atractivos y coherentes con la identidad de tu proyecto.
          <br />
          Creación de interfaces limpias y funcionales: Desarrollo experiencias
          digitales fáciles de usar, que hace que guíen al usuario de forma
          intuitiva.
          <br />
          Desarrollo visual de proyectos digitales: Diseño elementos gráficos,
          pantallas y componentes interactivos para apps, sitios web y juegos.
          <br />
          Estrategias de presencia online y gestión digital: Ayudo a planificar y
          organizar la presencia digital para comunicar efectivamente y mejorar la
          experiencia del usuario.
        </p>

        <p className="text-wrapper-9">
          Mi objetivo: Crear experiencias digitales que no solo se vean bien, sino
          que comuniquen, inspiren y funcionen.
        </p>

        <img
          className="material-symbols"
          alt="Material symbols"
          src="https://c.animaapp.com/XeGSEg7A/img/material-symbols-star.svg"
        />

        <img
          className="ic-round-laptop"
          alt="Ic round laptop"
          src="https://c.animaapp.com/XeGSEg7A/img/ic-round-laptop.svg"
        />

        <img
          className="carbon-cics-program"
          alt="Carbon cics program"
          src="https://c.animaapp.com/XeGSEg7A/img/carbon-cics-program.svg"
        />

        <img
          className="mdi-design"
          alt="Mdi design"
          src="https://c.animaapp.com/XeGSEg7A/img/mdi-design.svg"
        />
      </section>

      <img
        className="line-3"
        alt="Line"
        src="https://c.animaapp.com/XeGSEg7A/img/line-6.svg"
      />

      <section id="sobre-mi">
        <div className="text-wrapper-11">Sobre mi</div>
        
        <p className="hola-soy-benjam-n">
          Hola, soy Benjamín
          <br />
          Tengo 18 años, soy estudiante y me dedico al diseño gráfico y la
          programación. Me apasiona crear experiencias digitales que sean
          visualmente atractivas y fáciles de usar. En mis proyectos, como Remind,
          combino creatividad y estrategia para diseñar interfaces, desarrollar
          frontend y backend, y darle identidad a cada idea. Mi objetivo es
          transformar conceptos en productos digitales que comuniquen, inspiren y
          funcionen.
        </p>

        <img
          className="rectangle"
          alt="Rectangle"
          src="https://c.animaapp.com/XeGSEg7A/img/rectangle-88@2x.png"
        />

        <div className="benjamin-vernik-a">
          Benjamin Vernik
          <br />
          18 años
        </div>
      </section>
    </div>
  );
};
