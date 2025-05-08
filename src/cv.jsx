import React from 'react';
import './estilo.css'; // Asegúrate de tener un archivo CSS para estilos adicionales
export const Portfolio = () => {
    return (
        <div style={{ fontFamily: 'Arial, sans-serif', margin: '20px' }}>
            <header style={{ textAlign: 'center', marginBottom: '50px' }}>
                <h1>Mi Portafolio</h1>
                <p>Desarrollador de Software</p>
            </header>

            <section>
                <h2>Sobre mí</h2>
                <p>
                    Soy un desarrollador de software apasionado por crear soluciones innovadoras y eficientes.
                    Tengo experiencia en diversas tecnologías y disfruto aprender cosas nuevas constantemente.
                </p>
            </section>

            <section>
                <h2>Habilidades</h2>
                <ul>
                    <li>JavaScript (React, Node.js)</li>
                    <li>HTML y CSS</li>
                    <li>Git y control de versiones</li>
                    <li>Bases de datos (SQL, MongoDB)</li>
                    <li>Metodologías ágiles</li>
                </ul>
            </section>

            <section>
                <h2>Proyectos</h2>
                <ul>
                    <li>
                        <strong>Gestor de Tareas</strong> - Aplicación para organizar tareas diarias. 
                        <a href="https://github.com/tu-usuario/gestor-tareas" target="_blank" rel="noopener noreferrer"> Ver en GitHub</a>
                    </li>
                    <li>
                        <strong>Portafolio Personal</strong> - Mi sitio web personal para mostrar mis proyectos. 
                        <a href="https://github.com/tu-usuario/portafolio" target="_blank" rel="noopener noreferrer"> Ver en GitHub</a>
                    </li>
                </ul>
            </section>

            <section>
                <h2>Contacto</h2>
                <p>Email: tuemail@example.com</p>
                <p>LinkedIn: <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer">linkedin.com/in/tu-usuario</a></p>
                <p>GitHub: <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer">github.com/tu-usuario</a></p>
            </section>
        </div>
    );
};