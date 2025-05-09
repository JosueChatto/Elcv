import React from 'react';
import './estilo.css'; // Estilos personalizados
import perfilfoto from'./assets/perfil.jpg'; // Estilos para la foto de perfil

export const Portfolio = () => {
    return (
        <div className="cv-container">
            <header className="cv-header">
                <img src={perfilfoto} alt="Foto de Perfil" className="cv-photo" />
                <h1>Josué Seabastian Cardenas Orozco</h1>
                <p className="cv-title">Ingeniero Informatico</p>
                <p className='cv-list'>Ubicación: Colima, México</p>
            </header>

            <section className="cv-section">
                <h2>Sobre mí</h2>
                <p>
                    Soy Ingeniero informatico que un apasionado al desarrollo de aplicaciones y configuracion de las Redes Estructuradas. Me especializo en crear soluciones  eficientes, escalables y con enfoque en la experiencia del usuario.
                    Mi objetivo es seguir creciendo profesionalmente y aportar valor real en cada proyecto en el que participo.
                </p>
            </section>

            <section className="cv-section">
                <h2>Habilidades Técnicas</h2>
                <ul className="cv-list">
                    <li>JavaScript (ES6+, React, Node.js)</li>
                    <li>HTML5, CSS3, SASS, Tailwind</li>
                    <li>Control de versiones con Git y GitHub</li>
                    <li>Bases de datos relacionales y no relacionales (PostgreSQL, MongoDB)</li>
                    <li>Diseño de interfaces (Figma, UI/UX)</li>
                </ul>
            </section>

            <section className="cv-section">
                <h2>Proyectos Destacados</h2>
                <ul className="cv-list">
                    <li>
                        <strong>Gestor de Tareas</strong> – Web app para organizar tareas. 
                        <a href="https://github.com/JosueTecnologico?tab=repositories" target="_blank" rel="noopener noreferrer"> Ver proyecto</a>
                    </li>
                    <li>
                        <strong>Portafolio Personal</strong> – Sitio web profesional de Github.
                        <a href="https://github.com/JosueChatto?tab=repositories" target="_blank" rel="noopener noreferrer"> Ver proyecto</a>
                    </li>
                </ul>
            </section>

            <section className="cv-section">
                <h2>Contacto</h2>
                <p>Email: <a href="josuechatto3010@gmail.com">josuechatto3010@gmail.com</a></p>
                <p>LinkedIn: <a href="https://www.linkedin.com/in/josue-sebastian-cardenas-orozco-147a622b8/" target="_blank">https://www.linkedin.com/in/josue-sebastian-cardenas-orozco-147a622b8/</a></p>
                <p>GitHub: <a href="https://github.com/JosueChatto" target="_blank">https://github.com/JosueChatto</a></p>
            </section>
            <section className="cv-section">
                <h2>Formación Académica</h2>
                <p>Ingeniería en Informática — Instituto Tecnologico de Colima - TECNM (2020 - 2025)</p>
            </section>
        </div>
    );
};
