import styles from './Slider.module.css'

function Home() {
    
    return (
        <div className={styles.container}id='Home'>
            <div className={styles.cont}>
            <p className={styles.text_home}   >Get what matters </p>
            <h1 className={styles.text2_home}>
                Start or grow your own business</h1>
            <h4 className={styles.text3_home}>Get your dream in a few
                simple steps, and without any guarantees!
                Get a loan from your income
            </h4>
            <button type="button" className={styles.but_Apply_home}>
                <a className={styles.a_Apply_home} href="">
                    Apply Now</a>

            </button>
            </div>



        </div>

    )
}

export default Home