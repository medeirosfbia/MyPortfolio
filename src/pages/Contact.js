import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa';

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        toast.success('Mensagem enviada! (Funcionalidade de envio pode ser implementada)');
        setForm({ name: '', email: '', message: '' });
    };

    return (
        <div className="card card-custom p-4">
            <h2>Contato</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Nome</label>
                    <input type="text" className="form-control" name="name" value={form.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Email</label>
                    <input type="email" className="form-control" name="email" value={form.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label>Mensagem</label>
                    <textarea className="form-control" name="message" value={form.message} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-custom">Enviar</button>
            </form>
            <div className="mt-4">
                <p>
                    <FaEnvelope className="me-2" /> beatriz@email.com<br />
                    <FaWhatsapp className="me-2" /> (99) 99999-9999
                </p>
            </div>
        </div>
    );
}

export default Contact;
