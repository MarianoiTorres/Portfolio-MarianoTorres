import style from './Educ.module.css'

const Educ = () => {
    return (
        <div className={style.container} id='education'>
            <div className={style.secondContainer}>
                <div className={style.title}>
                    <h1>Educación</h1>
                </div>
                <div className={style.educContainer}>
                    <div className={style.education}>
                        <div className={style.containerCarrera}>
                            <h2 className={style.carrera}>Full Stack Web Developer</h2>
                            <p className={style.institucion}>SoyHenry</p>
                            <p className={style.fecha}>2023</p>
                        </div>
                        <img className={style.img} src="https://startupeable.com/directorio/wp-content/uploads/2021/03/d4face92a7abc37a414e0bc3acf4ff23ec588438.png" alt="" />
                    </div>
                    <div className={style.education}>
                        <div className={style.containerCarrera}>
                            <h2 className={style.carrera}>Tecnicatura Universitaria en Programacion</h2>
                            <p className={style.institucion}>Universidad Tecnologica Nacional</p>
                            <p className={style.fecha}>2022 - En Curso</p>
                        </div>
                        <img className={style.img}  src="https://upload.wikimedia.org/wikipedia/commons/6/67/UTN_logo.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Educ