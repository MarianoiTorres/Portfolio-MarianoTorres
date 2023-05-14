import style from './Nav.module.css'

const Nav = () => {

    return (
        <div className={style.container}>
            <div className={style.secondContainer}>

            <a href='https://www.linkedin.com/in/mariano-torres-1b717b236/'><h3 className={style.name}>Mariano Torres</h3></a>
            <h2 className={style.separador}> | </h2>
            <ul className={style.ul}>
                <a href="#home" className={style.navLinks}>
                    Home
                </a>
                <a href="" className={style.navLinks}>
                    About
                </a>
                <a href="#skills" className={style.navLinks}>
                    Skills
                </a>
                <a href="#projects" className={style.navLinks}>
                    Projects
                </a>
                <a href="#education" className={style.navLinks}>
                    Education
                </a>
                <a href="#contact" className={style.navLinks}>
                    Contact
                </a>
            </ul>
            </div>

        </div>
    )
}

export default Nav