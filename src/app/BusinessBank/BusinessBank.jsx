"use client"
import styles from './BusinessBank.module.css';
import React from "react"
export default function BusinessBank() {

    const [isVisible1, setIsVisible1] = React.useState(true);
    const [isVisible2, setIsVisible2] = React.useState(false);
    const [isVisible3, setIsVisible3] = React.useState(false);
    const [isVisible4, setIsVisible4] = React.useState(false);

    const handleButtonClick1 = () => {
        setIsVisible1(!isVisible1);
        setIsVisible1(true);
        setIsVisible2(false);
        setIsVisible3(false);
        setIsVisible4(false);
    };
    const handleButtonClick2 = () => {
        setIsVisible2(!isVisible2);
        setIsVisible2(true);
        setIsVisible1(false);
        setIsVisible3(false);
        setIsVisible4(false);
    };
    const handleButtonClick3 = () => {
        setIsVisible3(!isVisible3);
        setIsVisible3(true);
        setIsVisible2(false);
        setIsVisible1(false);
        setIsVisible4(false);
    };
    const handleButtonClick4 = () => {
        setIsVisible4(!isVisible4);
        setIsVisible4(true);
        setIsVisible2(false);
        setIsVisible3(false);
        setIsVisible1(false);
    };
    return (
        <div className={styles.all} id='Business_bank'>
            <h1 className={styles.business}> Business Bank</h1>
            <div className={styles.all_cont}>
                <div className={styles.tabs}>
                    <div className={styles.tab} onClick={handleButtonClick1} > Loan Payment</div>
                    <div className={styles.tab} onClick={handleButtonClick2}> Required Documents</div>
                    <div className={styles.tab} onClick={handleButtonClick3}> The Conditions</div>
                    <div className={styles.tab} onClick={handleButtonClick4}> Credit</div>

                </div>


                {/* isVisible1  */}
                <div id="div1" style={{ display: isVisible1 ? 'block' : 'none' } }>

                    <div id="tab1" className={styles.tab_content}>
                        <div className={styles.tap1}>
                            <div className={styles.tab1_item}>

                                <img className={styles.img} src="./img18.jpg" alt='11' />

                                <div className={styles.content}>

                                    <h1> We appreciate your trust in us and are delighted to offer you this loan.</h1>
                                    <p>You can repay the loan over a
                                        flexible period
                                        that suits your needs and financial capabilities."
                                        "We will provide you with convenient and suitable repayment options, allowing you to choose between
                                        fixed monthly
                                        installments or a lump sum payment at a specific time."
                                        "Our goal is to make the loan repayment process comfortable for you. Therefore, you can determine the
                                        repayment period
                                        that you prefer, whether it's short-term or long-term.</p>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                {/* isVisible2  */}
                <div id="test" style={{ display: isVisible2 ? 'block' : 'none' }}>
                    {/* محتوب 2  */}
                    <div id="tab2" className={styles.tab_content}>
                        <div className={styles.tap1}>
                            <div className={styles.tab1_item}>
                                <img className={styles.img} src="./img14.jpg" />

                                <div className={styles.content}>

                                    <h1> Completed Loan Application</h1>
                                    <p> You must fill out  loan application:
                                        and submit it with the
                                        required
                                        information accurately and in detail.
                                        Income Support Documents: You must provide documents that prove a stable income, such as salary slips or
                                        tax returns.
                                        Identity Documents: Valid and recognized identity documents must be submitted, including a passport or
                                        national ID card.</p>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>
                {/* isVisible3  */}
                <div id="test" style={{ display: isVisible3 ? 'block' : 'none' }}>
                    <div id="tab3" className={styles.tab_content}>
                        <div className={styles.tap1}>
                            <div className={styles.tab1_item}>
                                <img className={styles.img} src="./img19.jpg" />

                                <div className={styles.content}>

                                    <h1> Credit History:</h1>
                                    <p> Positive impact of a good credit history and regular debt repayment on loan eligibility.

                                        Income and Repayment Capacity: Need for a stable income and sufficient financial capacity to repay the
                                        loan.
                                        Personal Documentation: Submission of valid identification and current residential address documents.
                                    </p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* isVisible4  */}
                <div id="test" style={{ display: isVisible4 ? 'block' : 'none' }}>
                    <div id="tab4" className={styles.tab_content}>
                        <div className={styles.tap1}>
                            <div className={styles.tab1_item}>
                                <img className={styles.img} src="./img21.jpg" />

                                <div className={styles.content}>

                                    <h1> Completed Loan Application
                                        You must fill out  loan application:</h1>
                                    <p>  and submit it with the
                                        required
                                        information accurately and in detail.
                                        Income Support Documents: You must provide documents that prove a stable income, such as salary slips or
                                        tax returns.
                                        Identity Documents: Valid and recognized identity documents must be submitted, including a passport or
                                        national ID card.</p>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
};
