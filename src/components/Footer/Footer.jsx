import style from './Footer.module.css'

const Footer = () => {
    return (
        <div className={style.container}>
            <div className={style.secondContainer}>
                <div className={style.copy}>
                    <p>&copy; 2023 Mariano Torres. Derechos Reservados.</p>
                </div>
                <div className={style.redes}>
                    <ul className={style.ul}>
                        <a target="_blank" className={style.a} href="https://www.linkedin.com/in/mariano-torres-1b717b236/">Linkedin</a>
                        <a target="_blank" className={style.a} href="https://github.com/MarianoiTorres">GitHub</a>
                        <a target="_blank" className={style.a} href="https://www.instagram.com/mariano0o0/">Instagram</a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer