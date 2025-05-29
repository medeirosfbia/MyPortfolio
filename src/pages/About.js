import React from 'react';

function About() {
    return (
        <div className="card card-custom p-4">
            <h2>Sobre mim</h2>
            <p>
                Sou uma desenvolvedora apaixonada por tecnologia, com experiência em desenvolvimento web, mobile e backend.<br />
                Gosto de aprender novas tecnologias e criar soluções que impactam positivamente as pessoas.<br />
                {/* Altere este texto para colocar sua história, stack, experiências, etc. */}
            </p>
            <ul>
                <li><b>Stack:</b> React, Node.js, JavaScript, TypeScript, Python, ...</li>
                <li><b>Idiomas:</b> Português, Inglês</li>
                <li><b>Localização:</b> Brasil</li>
            </ul>
        </div>
    );
}

export default About;
