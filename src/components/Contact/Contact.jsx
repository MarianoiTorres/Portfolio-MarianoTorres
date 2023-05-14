import style from './Contact.module.css'
import emailjs from 'emailjs-com';
import ModalSubmit from '../Modal/Modal';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Contact = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitHandler = (event) => {
        event.preventDefault()

        emailjs
            .sendForm(
                "service_hp31hl5",
                "template_93rbe2h",
                event.target,
                "GQSlXjKIa8g38Q47P"
            )
            .then((res) => {
                handleShow()
            });
    }


    return (
        <>
            <div className={style.container} id='contact'>
                <div className={style.secondContainer}>
                    <div className={style.title}>
                        <h1>¡Contactame!</h1>
                    </div>
                    <div className={style.formContainer}>
                        <form onSubmit={submitHandler}>

                            <input autocomplete="off" placeholder='Nombre' type="text" name="name" required />

                            <input autocomplete="off" placeholder='Email' type="email" name="email" required />

                            <input autocomplete="off" placeholder='Asunto' type="text" name="subject" required />

                            <textarea placeholder='Mensaje' id="message" name="message" required></textarea>

                            <input className={style.submit} type="submit" value="Enviar" />
                        </form>
                    </div>
                </div>
            </div>
            <ModalSubmit show={show} handleClose={handleClose} />
        </>
    )
}

export default Contact