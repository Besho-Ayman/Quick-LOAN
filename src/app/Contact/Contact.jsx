import styles from './Contact.module.css';
function Contact() {
    return (
        <section className={styles.Contactt} id='Contact'>


            <div className={styles.contact}>

                <h1 className={styles.h1}>Contact</h1>
                <div className={styles.contact_child}>
                    <div>
                        <span className={styles.span}>GET IN TOUCH</span>
                        <h2>Have Queries Befor The Appointment?</h2>
                        <ul className={styles.ul}>
                            <li className={styles.li}>
                                <h4 className={styles.part1}>Lets Talk</h4>
                                {/* <br /> */}
                                <span className={styles.span}>phone:01204244567</span>
                                <br />
                                <br />
                                <span className={styles.span}>email:sandra@gmail.com</span>
                            </li>
                            <li>
                                <h4>Timing</h4>
                                <span className={styles.span}>Mon - Sat : 09:00AM - 06:00PM</span>
                                <br />
                                <br />
                                <span className={styles.span}>Sunday : Closed</span>
                            </li>
                            <li>
                                <h4>Location</h4>
                                {/* <br /> */}
                                <span className={styles.span}>EL-gomhoria st</span>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contact_child1}>
                        <h3>Dont Hesited TO Contact Us</h3>
                        <div>
                            <input className={styles.input} type="text" placeholder="Name" />
                            <input className={styles.input} type="text" placeholder="Email" />
                        </div>
                        <div>
                            <input className={styles.phone} type="number" placeholder="Phone" />
                        </div>
                        <textarea className={styles.textarea} cols="55" rows="7" placeholder="Message"></textarea>
                        <div className={styles.buttonn}>
                            <button className={styles.button}>Send</button>
                        </div>
                    </div>
                </div>
            </div >
            </section>
                )
}

export default Contact