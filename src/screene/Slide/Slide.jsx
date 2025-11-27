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
    <div className="slide" id="inicio">
      <header className="hero">
        <div className="hero-title">Portfolio</div>
        <nav className="nav-links">
          <button type="button" onClick={() => scrollToSection("sobre-mi")}>
            Sobre mi
          </button>
          <button type="button" onClick={() => scrollToSection("proyectos")}>
            Proyectos
          </button>
          <button type="button" onClick={() => scrollToSection("habilidades")}>
            Habilidades
          </button>
          <button type="button" onClick={() => scrollToSection("contacto")}>
            Contacto
          </button>
        </nav>

        <div className="profile-card">
          <img
            className="profile-photo"
            alt="Benjamin Vernik"
            src="https://c.animaapp.com/XeGSEg7A/img/rectangle-88@2x.png"
          />
          <p className="profile-greeting">Hola soy</p>
          <h1 className="profile-name">Benjamin Vernik</h1>
        </div>
      </header>

      <section id="sobre-mi" className="section about">
        <h2>Sobre mi</h2>
        <p>
          Soy Benjamin Vernik, tengo 18 años y estudio en ORT. Desde los 10 años
          me gusta el diseño gráfico y la programación, y hoy sigo aprendiendo
          para crear proyectos que se vean bien y funcionen bien. En la escuela
          hice tres proyectos importantes donde pude combinar diseño y
          desarrollo. Gracias a eso descubrí que realmente disfruto crear
          experiencias digitales claras, útiles y lindas.
        </p>
        <p>
          En mi tiempo libre juego al fútbol en el Club Atlético Buchardo y
          escucho mucha música, especialmente rock nacional. Siempre busco
          aprender cosas nuevas y mejorar en lo que hago. Estoy siempre buscando
          nuevas ideas, proyectos y formas de seguir aprendiendo.
        </p>
      </section>

      <section id="habilidades" className="section skills">
        <h2>Habilidades</h2>
        <ul>
          <li>Diseño accesible.</li>
          <li>Conocimiento amplio de distintas herramientas.</li>
          <li>Constancia para cerrar proyectos.</li>
          <li>Propongo ideas y soluciones creativas.</li>
          <li>Trabajo en equipo con buena comunicación.</li>
        </ul>
      </section>

      <section id="proyectos" className="section projects">
        <h2>Mis proyectos mas recientes</h2>
        <div className="project-grid">
          <article className="project-card">
            <div className="project-year">2023</div>
            <h3>MovEyeS Seguridad Inteligente para el Hogar</h3>
            <img
              src="https://c.animaapp.com/XeGSEg7A/img/img-7821-1.png"
              alt="MovEyeS app"
            />
            <p>
              App conectada a Arduino con sensor de movimiento. Permite activar
              alarma, ver historial de movimientos, administrar usuarios, crear
              red familiar y ver la ubicación del producto.
            </p>
          </article>

          <article className="project-card">
            <div className="project-year">2024</div>
            <h3>Dribble Dash Juego 2D de Fútbol</h3>
            <img
              src="https://c.animaapp.com/XeGSEg7A/img/captura-de-pantalla-2025-10-30-a-la-s--12-34-39-p--m--1.png"
              alt="Dribble Dash"
            />
            <p>
              Juego donde el jugador avanza esquivando objetos y defensores.
              Diseñé los personajes, los obstáculos, el estadio y la pantalla de
              inicio.
            </p>
          </article>

          <article className="project-card">
            <div className="project-year">2025</div>
            <h3>Remind App de Recordatorios para Adultos Mayores</h3>
            <img
              src="https://c.animaapp.com/XeGSEg7A/img/captura-de-pantalla-2025-10-30-a-la-s--12-39-54-p--m--1@2x.png"
              alt="Remind app"
            />
            <p>
              App que ayuda a recordar tareas y medicinas. Diseñé UX/UI y la
              identidad visual, y desarrollé frontend y backend para manejar
              recordatorios y base de datos.
            </p>
          </article>
        </div>
      </section>

      <section id="contacto" className="section contact">
        <h2>Contacto</h2>
        <div className="contact-list">
          <a
            href="https://www.linkedin.com/in/benjaminvernik"
            target="_blank"
            rel="noreferrer"
            className="contact-item"
          >
            <span className="contact-icon linkedin" aria-hidden="true" />
            Linkedin: Benjamin Vernik
          </a>
          <a href="mailto:benjavernik@gmail.com" className="contact-item">
            <span className="contact-icon mail" aria-hidden="true" />
            Gmail: Benjavernik@gmail.com
          </a>
          <a href="tel:+541120944567" className="contact-item">
            <span className="contact-icon phone" aria-hidden="true" />
            Telefono:+541120944567
          </a>
        </div>
        <button
          type="button"
          className="cta"
          onClick={() => scrollToSection("contacto")}
        >
          Contactame
        </button>
      </section>
    </div>
  );
};
