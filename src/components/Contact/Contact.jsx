import style from './Contact.module.css'

const Contact = () => {
    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <div className={style.title}>
                    <h1>Contact</h1>
                </div>
                <div className={style.formContainer}>
                    <form action="">
                        
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