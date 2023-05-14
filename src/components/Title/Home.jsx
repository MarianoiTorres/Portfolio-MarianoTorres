import style from './Title.module.css'

const Home = () => {

    return (
        <div className={style.container} id='home'>
            <div className={style.secondContainer}>
                <div className={style.title}>
                    <p className={style.myName}>Hola! Soy Mariano Torres</p>
                    <h1 className={style.fullstack}>Full Stack <br /> Web  Developer</h1>
                </div>
                <div>
                    <img className={style.img} src="https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Home
