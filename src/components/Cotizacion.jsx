import React, { useRef, useState } from 'react'
import styles from './Cotizacion.module.css'
import emailjs from 'emailjs-com'

const Cotizacion = () => {
  const form = useRef()
  const [errors, setErrors] = useState({})
  const [submitError, setSubmitError] = useState('')
  const [attemptedSubmit, setAttemptedSubmit] = useState(false)
  const [showNotification, setShowNotification] = useState(false)

  const validate = () => {
    const newErrors = {}
    const formData = form.current

    const name = formData.from_name.value.trim()
    const email = formData.reply_to.value.trim()
    const message = formData.message.value.trim()

    // Validación nombre (solo letras y espacios, max 50)
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]+$/
    if (!name) newErrors.from_name = 'El nombre es obligatorio'
    else if (!nameRegex.test(name))
      newErrors.from_name = 'El nombre solo puede contener letras y espacios'
    else if (name.length > 50)
      newErrors.from_name = 'El nombre no puede superar 50 caracteres'

    // Validación email
    const emailRegex =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    if (!email) newErrors.reply_to = 'El correo es obligatorio'
    else if (!emailRegex.test(email))
      newErrors.reply_to = 'El correo no tiene un formato válido'

    // Validación mensaje
    if (!message) newErrors.message = 'El mensaje es obligatorio'
    else if (message.length > 500)
      newErrors.message = 'El mensaje no puede superar 500 caracteres'

    setErrors(newErrors)
    setSubmitError(
      Object.keys(newErrors).length > 0
        ? 'Algunos campos están incorrectos. Revisa y vuelve a enviar.'
        : ''
    )

    return Object.keys(newErrors).length === 0
  }

  const sendEmail = (e) => {
    e.preventDefault()
    setAttemptedSubmit(true)

    if (!validate()) return

    emailjs
      .sendForm(
        'service_8stz76u',
        'template_89uz4vh',
        form.current,
        '7tGp9LRA013IWB-v-'
      )
      .then(
        (result) => {
          console.log(result.text)
          form.current.reset()
          setErrors({})
          setSubmitError('')
          setAttemptedSubmit(false)
          setShowNotification(true)
          // Ocultar notificación después de 3s
          setTimeout(() => setShowNotification(false), 3000)
        },
        (error) => {
          console.log(error.text)
          setSubmitError('Ocurrió un error, intentá nuevamente.')
        }
      )
  }

  return (
    <section id="cotizacion" className={styles.cotizacionSection}>
      <div className={styles.header}>
        <h2>Solicitar cotización</h2>
        <p>
          Contanos sobre tu proyecto y te enviaremos una propuesta personalizada
          adaptada a tus necesidades. Para otras consultas podés realizarlo en la sección "Contacto".
        </p>
      </div>

      <div className={styles.cotizacionContainer}>
        <form ref={form} onSubmit={sendEmail} className={styles.cotizacionForm}>
          <input
            type="text"
            name="from_name"
            placeholder="Nombre completo"
            maxLength={50}
            className={
              attemptedSubmit
                ? errors.from_name
                  ? styles.invalid
                  : styles.valid
                : ''
            }
            required
          />
          {errors.from_name && <p className={styles.error}>{errors.from_name}</p>}

          <input
            type="email"
            name="reply_to"
            placeholder="Correo electrónico"
            className={
              attemptedSubmit
                ? errors.reply_to
                  ? styles.invalid
                  : styles.valid
                : ''
            }
            required
          />
          {errors.reply_to && <p className={styles.error}>{errors.reply_to}</p>}

          <select
            name="service_type"
            className={errors.service_type ? styles.invalid : ''}
            required
          >
            <option value="">Seleccionar servicio</option>
            <option value="Página web">Página web</option>
            <option value="Aplicación móvil">Aplicación móvil</option>
            <option value="Portfolio personal">Portfolio personal</option>
            <option value="Campaña Política">Campaña Política</option>
          </select>

          <textarea
            name="message"
            placeholder="Contanos sobre tu proyecto..."
            rows="5"
            maxLength={500}
            className={
              attemptedSubmit
                ? errors.message
                  ? styles.invalid
                  : styles.valid
                : ''
            }
            required
          ></textarea>
          {errors.message && <p className={styles.error}>{errors.message}</p>}

          <button type="submit" className={styles.button}>
            Enviar solicitud
          </button>

          {submitError && <p className={styles.submitError}>{submitError}</p>}
        </form>

        <div className={styles.cotizacionInfo}>
          <h3>Contacto directo</h3>
          <p>📧 ipn.devteam@gmail.com</p>
          <p>📱 +54 263 4380152</p>
          <p>📍 San Martín, Mendoza - Argentina</p>
        </div>
      </div>

      {/* Notificación tipo toast */}
      {showNotification && (
        <div className={styles.toastNotification}>Solicitud enviada</div>
      )}
    </section>
  )
}

export default Cotizacion