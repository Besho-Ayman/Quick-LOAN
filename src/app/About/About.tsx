import styles from './About.module.css'

function About() {
    return (
        <section className={styles.AboutUs}>
            <div className={styles.titl}>
                <h5>About Us</h5>
                <h1>Learn about how Banca works</h1>
            </div>
            <div className={styles.about_item}>
                <div className={styles.about_text}>
                    <div className={styles.text1}>

                        <div>
                            <h1>1.5M</h1>
                            <h5>Active Customer</h5>
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum available,but the majority have.</p>
                    </div>
                    <div className={styles.text1}>
                        <div>
                            <h1>30k</h1>
                            <h5>Business Partners</h5>
                        </div>
                        <p>There are many variations of passages of Lorem Ipsum available,but the majority have.</p>
                    </div>
                </div>
                <div >
                <img className={styles.about_imeag} src='../../About/icon1.png' alt="My2 " />
                </div>
            </div>
        </section>
    )
}

export default About