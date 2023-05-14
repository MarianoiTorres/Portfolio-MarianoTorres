import style from './Project.module.css'

const Project = () => {
    return (
        <div className={style.container} id='projects'>
            <div className={style.secondContainer}>
                <div className={style.title}>
                    <h1>Proyectos</h1>
                </div>
                <div className={style.projectsContainer}>
                    <div className={style.containerPerProject}>
                        <div className={style.project}>
                            <h2 className={style.titleProject}>Videogames App</h2>
                            <a href='https://pi-videogames-mdjn.vercel.app/'><img className={style.img} width='550px' src="https://res.cloudinary.com/djdqwkavb/image/upload/v1684008036/Captura_ktt5bg.png"></img></a>
                        </div>
                        <div className={style.info}>
                            <p>Single-page application que consume información sobre videojuegos de la API RAWG, la misma cuenta con las siguiente funcionalidades:
                                - Paginado
                                - Filtrar por género u origen
                                - Ordenar por rating o alfabéticamente
                                - Buscar juegos
                                - Crear tu propio juego
                                - Ver los detalles de cada uno al hacer click sobre las cards</p>
                            <div className={style.links}>
                                <button className={style.demo}><a className={style.a} href="https://pi-videogames-mdjn.vercel.app/" target="_blank">Ver demo</a></button>
                                <button className={style.github}><a href="https://github.com/MarianoiTorres/PI-Videogames" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.containerPerProject}>
                        <div className={style.project}>
                            <h2 className={style.titleProject}>The Chocolate Hub</h2>
                            <a href='https://deploy-front2.vercel.app/home'><img className={style.img} width='550px' src="https://res.cloudinary.com/djdqwkavb/image/upload/v1684008128/Captura_xfpyjd.png"></img></a>
                        </div>
                        <div className={style.info}>
                            <p>E-commerce de venta de chocolates, ofrece una amplia variedad de productos de alta calidad. Aceptamos pasarelas seguras de pago como MercadoPago y criptomonedas, y ofrecemos un registro fácil con cuentas de Google o Facebook. Los usuarios pueden valorar y comentar productos, y los administradores tienen acceso a un dashboard completo para modificar cualquier aspecto de la aplicación.</p>
                            <div className={style.links}>
                                <button  className={style.demo}><a className={style.a} href='https://deploy-front2.vercel.app/home' target="_blank">Ver demo</a></button>
                                <button className={style.github}><a href="https://github.com/MarianoiTorres/PF-TheChocolateHub" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a></button>
                            </div>
                        </div>
                    </div>
                    <div className={style.containerPerProject}>
                        <div className={style.project}>
                            <h2 className={style.titleProject}>Portfolio</h2>
                            <a href=''><img className={style.img} width='550px' src="https://res.cloudinary.com/djdqwkavb/image/upload/v1684021017/Captura_cxq0w9.png"></img></a>
                        </div>
                        <div className={style.info}>
                            <p>Mi Portfolio :D</p>
                            <div className={style.links}>
                                <button  className={style.demo}><a className={style.a} href='https://portfolio-mariano-torres.vercel.app/'>Ver demo</a></button>
                                <button className={style.github}><a href="https://github.com/MarianoiTorres/Portfolio-MarianoTorres" target="_blank"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" /></a></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Project 