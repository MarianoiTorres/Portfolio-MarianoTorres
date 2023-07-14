import style from './Skills.module.css'
import ts from './ts.png'

const Skills = () => {

    return (
        <div className={style.container} id='skills'>
            <div className={style.secondContainer}>
                <div className={style.title}>
                    <h1>Skills</h1>
                </div>
                
                <div className={style.skillsContainer}>
                    <div className={style.skills}><img className={style.img} src="https://img.icons8.com/ios/50/javascript--v1.png" alt="" /> Javascript</div>
                    <div className={style.skills}><img className={style.img} src="https://icon-library.com/images/nodejs-icon/nodejs-icon-1.jpg" alt="" /> Node</div>
                    <div className={style.skills}><img className={style.img} src="https://img.icons8.com/ios/50/express-js.png" alt="express-js"/>Express</div>
                    <div className={style.skills}><img className={style.img} src="https://static-00.iconduck.com/assets.00/sequelize-icon-443x512-zt3ku70k.png" alt="" /> Sequelize</div>
                    <div className={style.skills}><img className={style.img} src="https://img.icons8.com/ios/50/postgreesql.png" alt="postgreesql"/>PostgreSQL</div>
                    <div className={style.skills}><img className={style.img} src="https://img.icons8.com/ios/50/react-native--v1.png" alt="react-native--v1"/>React</div>
                    <div className={style.skills}><img className={style.img} src="https://img.icons8.com/ios/50/redux.png" alt="redux"/>Redux</div>
                    <div className={style.skills}><img className={style.img} src="https://img.icons8.com/ios/50/git.png" alt="git"/>Git</div>
                    <div className={style.skills}><img className={style.img} src="https://img.icons8.com/ios/50/css3.png" alt="css3"/>CSS</div>  
                    <div className={style.skills}><img className={style.img} src="https://cdn.iconscout.com/icon/free/png-256/tailwind-css-5285308-4406745.png" alt="css3"/>Tailwind</div>
                    <div className={style.skills}><img className={style.img} src="https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/mongodb-512.png" alt="css3"/>MongoDB</div>
                    <div className={style.skills}><img className={style.img} src='https://img.icons8.com/ios/50/typescript.png' alt="css3"/>Typescript</div>
                </div>
            </div>
        </div>
    )
}

export default Skills