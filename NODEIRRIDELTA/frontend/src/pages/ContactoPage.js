import React from "react";
import { useState } from 'react';
import axios from 'axios';

const ContactoPage = (props) => {

    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: ''
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true)
        const response = await
            axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error === false) {
            setFormData(initialForm)
        }
    }



    return (
        <main className="holder contacto">
            <div className="contenedor-form">
                <h2 className="titulo-contacto">Contacto</h2>
                <form action="/contacto" onSubmit={handleSubmit} className="formulario">
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                    </p>

                    <p>
                        <label for="email">Email</label>
                        <input type="text" name="email" value={formData.email} onChange={handleChange}/>
                    </p>

                    <p>
                        <label for="telefono">Teléfono</label>
                        <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                    </p>

                    <p>
                        <label for="Mensaje">Mensaje o <br /> consulta</label>
                        <textarea name="mensaje" id="" cols="30" rows="10" value={formData.mensaje} onChange={handleChange}></textarea>
                    </p>

                    <p>
                        <input type="submit" value="Enviar" />
                    </p>
                </form>
                {sending ? <p>Enviando...</p> : null}
                {msg ? <p>{msg}</p> : null}


            </div>

            <div className="contenedor-ubi">
                <section className="ubi">
                    <h2 className="texto-ubi">¿Dónde estamos?</h2>
                    <iframe className="mapa" title="Mapa de irridelta"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3291.929127332791!2d-58.685103084775776!3d-34.40314728051191!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bca10d270a9be5%3A0x1f55b2bc18eddcdc!2sIRRIDELTA!5e0!3m2!1ses!2sar!4v1651178792662!5m2!1ses!2sar"
                        allowfullscreen="" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade" />
                </section>
            </div>
        </main>

    );
}
export default ContactoPage;