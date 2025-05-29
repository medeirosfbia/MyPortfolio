import React from 'react';
import { FaCode, FaLaptopCode } from 'react-icons/fa';

function Home() {
    return (
        <div className="text-center">
            <h1>
                <FaCode color="#f875aa" /> Olá, eu sou <span style={{ color: '#f875aa' }}>Beatriz Faria</span>
            </h1>
            <h3 className="mt-3 mb-4" style={{ color: '#ffb86b' }}>Desenvolvedora Full Stack</h3>
            <p>
                Apaixonada por tecnologia, programação e desafios criativos.<br />
                <span style={{ color: '#a084ee' }}>Transformando ideias em código!</span>
            </p>
            <a href="/projetos" className="btn btn-custom mt-4">
                <FaLaptopCode className="me-2" /> Ver Projetos
            </a>
        </div>
    );
}

export default Home;
