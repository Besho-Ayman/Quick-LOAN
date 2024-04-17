
"use client"
import styles from './Apply.module.css';
import React from "react"
// import Nav from './nav/Nav'
import FormComponent from './cont1'
import FormComponent2 from './cont2'

// import React, { useEffect } from "react";

export default function Apply() {
    const [isVisible1, setIsVisible1] = React.useState(true);
    const [isVisible2, setIsVisible2] = React.useState(false);
    const [isVisible3, setIsVisible3] = React.useState(false);

    const handleButtonClick1 = () => {
        setIsVisible1(!isVisible1);
        setIsVisible1(true);
        setIsVisible2(false);
        setIsVisible3(false);
    };
    const handleButtonClick2 = () => {
        setIsVisible2(!isVisible2);
        setIsVisible2(true);
        setIsVisible1(false);
        setIsVisible3(false);
    };
    const handleButtonClick3 = () => {
        setIsVisible3(!isVisible3);
        setIsVisible3(true);
        setIsVisible2(false);
        setIsVisible1(false);
    };


    return (
        <div id='Apply'>

            {/* home */}
            <div className={styles.apply}>
                <div className={styles.prg}>
                    <h1 className={styles.h_apply}> Loan Apply</h1>
                    <h5 className={styles.h_apply2}>Home  Loan Apply</h5>
                    <img className={styles.img_apply} src="./img26.png" alt="mm" />
                </div>
            </div>

            {/* <!-- ==========box-left====== --> */}
            <div className={styles.boxLeft}>
                <ul className={styles.boxLeftUl}>
                    <li className={styles.boxLeftLi} data-cont=".one">
                        <span className={styles.icon}></span>
                        <span className={styles.boxLeftLiTitle} onClick={handleButtonClick1}>Personal Details</span>
                    </li>
                    <li className={styles.boxLeftLi} data-cont=".two">
                        <span className={styles.icon}></span>
                        <span className={styles.boxLeftLiTitle} onClick={handleButtonClick2}>Loan Details</span>
                    </li>
                    <li className={styles.boxLeftLi} data-cont=".three">
                        <span className={styles.icon}></span>
                        <span className={styles.boxLeftLiTitle} onClick={handleButtonClick3}>Documents Upload</span>
                    </li>
                </ul>


                {/* <!-- =========box- right======== --> */}
                <div className={styles.boxRight}>



                    <div className={styles.content}>
                        <div className={styles.one} style={{ display: isVisible1 ? 'block' : 'none' }}>
                            <FormComponent />
                            <div className={styles.buttonContainer}>
                                {/* <button className={styles.beforeButton}>previous</button> */}
                                {/* <button className={styles.sendButton}>Send</button> */}
                                <button className={styles.sendButton} onClick={handleButtonClick2}>Send</button>

                            </div>
                        </div>
                        <div className={styles.two} style={{ display: isVisible2 ? 'block' : 'none' }}>
                            <FormComponent2 />
                            <div className={styles.buttonContainer}>
                                <button className={styles.beforeButton} onClick={handleButtonClick1}>previous</button>
                                <button className={styles.sendButton} onClick={handleButtonClick3}>Send</button>
                            </div>
                        </div>

                        {/* ========content3===== */}
                        <div className={styles.three} style={{ display: isVisible3 ? 'block' : 'none' }}>
                            <p>
                                Selfie photo
                                <br />
                                Your personal photo. The photo must be done by yourself.
                                The photo must show your face and your both shoulders.
                                <br />
                                ID Card
                                <br />
                                Valid Government ID card must be shown.
                                Front and back side. Original ID card. Full photo.
                                All parts of the ID card must show on the photo.
                            </p>
                            <form className={styles.fileUploadForm} id="fileUploadForm">
                                <label htmlFor="fileInput">Choose a file:</label>
                                <input type="file" id="fileInput" name="fileInput" accept=".txt, .pdf, .docx, .jpg" />
                            </form>
                            <div className={styles.buttonContainer}>
                                <button className={styles.beforeButton} onClick={handleButtonClick2}>previous</button>

                                <button className={styles.sendButton}>Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div >
    )
};



