import React, { useEffect, useRef, useState } from 'react';
import './Contact.css';
import instagram from "../assets/social-icons/instagram-1-svgrepo-com.svg";
import facebook from "../assets/social-icons/facebook-1-svgrepo-com.svg";
// import whatsapp from "../assets/social-icons/whatsapp-svgrepo-com.svg";
import linkedin from "../assets/social-icons/linkedin-1-svgrepo-com.svg";

import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState('');
  const [attemptedSubmit, setAttemptedSubmit] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const validate = () => {
    const newErrors = {};
    const formData = form.current;

    const name = formData.from_name.value.trim();
    const email = formData.reply_to.value.trim();
    const message = formData.message.value.trim();

    // Validación nombre
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/;
    if (!name) newErrors.from_name = 'El nombre es obligatorio';
    else if (!nameRegex.test(name))
      newErrors.from_name = 'El nombre solo puede contener letras y espacios';
    else if (name.length > 50)
      newErrors.from_name = 'El nombre no puede superar 50 caracteres';

    // Validación email
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email) newErrors.reply_to = 'El correo es obligatorio';
    else if (!emailRegex.test(email))
      newErrors.reply_to = 'El correo no tiene un formato válido';

    // Validación mensaje
    if (!message) newErrors.message = 'El mensaje es obligatorio';
    else if (message.length > 500)
      newErrors.message = 'El mensaje no puede superar 500 caracteres';

    setErrors(newErrors);
    setSubmitError(
      Object.keys(newErrors).length > 0
        ? 'Algunos campos están incorrectos. Revisa y vuelve a enviar.'
        : ''
    );

    return Object.keys(newErrors).length === 0;
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setAttemptedSubmit(true);

    if (!validate()) return;

    emailjs
      .sendForm(
        'service_8stz76u', // 🔹 tu Service ID
        'template_udna2l8', // 🔹 tu Template ID
        form.current,
        '7tGp9LRA013IWB-v-' // 🔹 tu Public Key
      )
      .then(
        (result) => {
          form.current.reset();
          setErrors({});
          setSubmitError('');
          setAttemptedSubmit(false);
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 3000);
        },
        (error) => {
          setSubmitError('Ocurrió un error, intentá nuevamente.');
        }
      );
  };

  return (
    <section id='contacto' className="contact-section">
      <div data-aos='fade-up' className="contact-container">
        <h2>Contacto</h2>
        <p>¿Tenés alguna consulta o propuesta? ¡Escribinos!</p>
        <form ref={form} className="contact-form" onSubmit={sendEmail}>
          <label htmlFor="topic">Área de interés</label>
          <select
            id="topic"
            name="service_type"
            className={errors.service_type ? 'invalid' : ''}
            required
          >
            <option value="">Seleccioná una opción</option>
            <option value="negocios">Negocios</option>
            <option value="politica">Política</option>
          </select>

          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="from_name"
            placeholder="Tu nombre"
            maxLength={50}
            className={
              attemptedSubmit
                ? errors.from_name
                  ? 'invalid'
                  : 'valid'
                : ''
            }
            required
          />
          {errors.from_name && <p className='error'>{errors.from_name}</p>}

          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="reply_to"
            placeholder="Tu email"
            className={
              attemptedSubmit
                ? errors.reply_to
                  ? 'invalid'
                  : 'valid'
                : ''
            }
            required
          />
          {errors.reply_to && <p className='error'>{errors.reply_to}</p>}

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Escribí tu mensaje..."
            maxLength={500}
            className={
              attemptedSubmit
                ? errors.message
                  ? 'invalid'
                  : 'valid'
                : ''
            }
            required
          ></textarea>
          {errors.message && <p className='error'>{errors.message}</p>}

          <div className='button-container'>
            <button type="submit">Enviar</button>
          </div>

          {submitError && <p className='submitError'>{submitError}</p>}
        </form>

        <div className='social-icons-container'>
          <a target='_blank' href="https://www.instagram.com/ipn_software?igsh=MWFjbHhmOGhnMDlxeg%3D%3D&utm_source=qr">
          <img className='hover' src={instagram} alt="Instagram" />
          </a>
          <a target='_blank' href="https://www.linkedin.com/company/ipn-software/about/?viewAsMember=true">
          <img className='hover' src={linkedin} alt="LinkedIn" />
          </a>
          <a target='_blank' href="https://www.facebook.com/profile.php?id=61582482527829">
          <img className='hover' src={facebook} alt="Facebook" />
          </a>
        </div>
      </div>

      {/* Notificación tipo toast */}
      {showNotification && (
        <div className='toastNotification'>Consulta enviada</div>
      )}
    </section>
  );
};

export default ContactForm;
