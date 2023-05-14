import style from './Contact.module.css'
import emailjs from 'emailjs-com';

const Contact = () => {

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
          alert("¡Mensaje enviado!");
          console.log(res);
        });
    }

    return (
        <div className={style.container} id='contact'>
            <div className={style.secondContainer}>
                <div className={style.title}>
                    <h1>Contact</h1>
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
    )
}

export default Contact