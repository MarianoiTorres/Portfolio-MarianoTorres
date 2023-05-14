import { useState } from 'react'
import style from './Nav.module.css'

const Nav = () => {

    const [menu, setMenu] = useState(false)

    const menuHandler = () => {
        setMenu(!menu)
    }
    const ulClassName = `${style.ul} ${menu ? style.open : style.closed}`;
    return (
        <div className={style.container}>
            <div className={style.secondContainer}>

                <a className={style.navLinks} href='https://www.linkedin.com/in/mariano-torres-1b717b236/'><h3 className={style.name}>Mariano Torres</h3></a>
                <h2 className={style.separador}> | </h2>
                <button className={style.menu} onClick={menuHandler}>
                   <img src="https://icon-library.com/images/white-menu-icon-png/white-menu-icon-png-18.jpg" alt="" />
                </button>
                
                { <ul className={ulClassName}>
                    <a href="#home" className={style.navLinks}>
                        Inicio
                    </a>
                    <a href="#skills" className={style.navLinks}>
                        Skills
                    </a>
                    <a href="#projects" className={style.navLinks}>
                        Proyectos
                    </a>
                    <a href="#education" className={style.navLinks}>
                        Educación
                    </a>
                    <a href="#contact" className={style.navLinks}>
                        Contacto
                    </a>
                </ul>}
            </div>

        </div>
    )
}

export default Nav