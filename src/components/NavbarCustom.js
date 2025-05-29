import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './NavbarCustom.css'; // Importa o CSS de hover

function NavbarCustom() {
    const navLinkStyle = {
        color: '#fff',
        fontWeight: 500,
        padding: '6px 10px',
        borderRadius: '4px',
        transition: 'background 0.2s, color 0.2s'
    };
    const navLinkActiveStyle = {
        color: '#f875aa',
        background: 'rgba(255,255,255,0.08)',
        fontWeight: 700
    };

    return (
        <nav
            className="navbar navbar-expand-lg"
            style={{
                background: '#232526',
                borderBottom: '1px solid #333',
                boxShadow: 'none',
                padding: '0.5rem 0'
            }}
        >
            <div className="container">
                <NavLink
                    className="navbar-brand navbar-brand-hover"
                    to="/"
                    style={{ color: '#fff', fontWeight: 600, fontSize: 20, letterSpacing: 1, transition: 'color 0.2s' }}
                >
                    Beatriz Faria
                </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto" style={{ gap: 2 }}>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link navbar-hover"
                                to="/"
                                style={({ isActive }) => isActive ? { ...navLinkStyle, ...navLinkActiveStyle } : navLinkStyle}
                                end
                            >Início</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link navbar-hover"
                                to="/sobre"
                                style={({ isActive }) => isActive ? { ...navLinkStyle, ...navLinkActiveStyle } : navLinkStyle}
                            >Sobre</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link navbar-hover"
                                to="/projetos"
                                style={({ isActive }) => isActive ? { ...navLinkStyle, ...navLinkActiveStyle } : navLinkStyle}
                            >Projetos</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="nav-link navbar-hover"
                                to="/contato"
                                style={({ isActive }) => isActive ? { ...navLinkStyle, ...navLinkActiveStyle } : navLinkStyle}
                            >Contato</NavLink>
                        </li>
                        <li className="nav-item d-flex align-items-center ms-2">
                            <a
                                href="https://github.com/medeirosfbia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link navbar-hover"
                                style={{
                                    color: '#fff',
                                    padding: 0,
                                    marginRight: 10,
                                    borderRadius: '5px',
                                    minWidth: 36,
                                    minHeight: 36,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <FaGithub size={23} />
                            </a>
                            <a
                                href="https://linkedin.com/in/medeirosfbia"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="nav-link navbar-hover"
                                style={{
                                    color: '#fff',
                                    padding: 0,
                                    marginLeft: 10,
                                    borderRadius: '5px',
                                    minWidth: 36,
                                    minHeight: 36,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                            >
                                <FaLinkedin size={23} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarCustom;
