"use client";
import styles from './Calculator.module.css';
import React, { useEffect, useState } from "react";

function LoanCalculator() {
  const [loanAmount, setLoanAmount] = useState(0);
  const [loanTerm, setLoanTerm] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const [monthlyPayment, setMonthlyPayment] = useState(0);
  const [totalPayment, setTotalPayment] = useState(0);
  const [totalInterest, setTotalInterest] = useState(0);

  useEffect(() => {
    calculateLoan();
    updateTooltip("sliderLoanAmount", "tooltipLoanAmount");
    updateTooltip("sliderLoanTerm", "tooltipLoanTerm");
    updateTooltip("sliderPercentage", "tooltipPercentage");
  }, [loanAmount, loanTerm, percentage]);

  const updateTooltip = (sliderId, tooltipId) => {
    const slider = document.getElementById(sliderId);
    const tooltip = document.getElementById(tooltipId);

    if (slider && tooltip) {
      const maxValue = slider.getAttribute("max");
      const val = slider.value;
      const center = (val / maxValue) * 100 + "%";
      tooltip.style.left = center;
    }
  };

  const calculateLoan = () => {
    // Calculation logic for loan
    const principal = parseFloat(loanAmount);
    const annualInterest = parseFloat(percentage) / 100;
    const numberOfPayments = parseFloat(loanTerm) * 12;

    const x = Math.pow(1 + annualInterest, numberOfPayments);
    const monthly = (principal * x * annualInterest) / (x - 1);

    const total = monthly * numberOfPayments;
    const totalInterest = total - principal;

    setMonthlyPayment(monthly.toFixed(2));
    setTotalPayment(total.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
  };

  return (
    <>

      <section className={styles.Calculator} id='Calculator'>
        <div className={styles.titl}>
          <h5> loan Calculator</h5>
          <h1> Calculate and confirm your loans</h1>
        </div>
        <div className={styles.Calculator_item}>
          <div className={styles.Calculator_text}>
            <div className={styles.text1}>
              {/* <h1>loan Calculator</h1> */}
              <h5 className={styles.term}>Loan term</h5>
            </div>

          </div>
        </div>


      </section >

      <div className={styles.tatal}>

        <section className={styles.Calculator} id='Calculator'>
          <h4 className={styles.h6}>Loan Amount</h4>

          <div className={styles.totalcont}>
            <div className={styles.test1}>
              <input
                className={styles.test}
                aria-valuemin={0}
                type="range"
                min="5000"
                max="1000000"
                value={loanAmount}
                id="sliderLoanAmount"
                onChange={({ target: { value } }) => setLoanAmount(value)}
              />
            </div>

            <div id="progress"></div>
            <div
              id="tooltipLoanAmount"
              className={styles.cont}
            >
              {loanAmount}
              LE
            </div>
          </div>
          <h4 className={styles.h6}>Interest Rate</h4>
          <div className={styles.totalcont}>
            <div className={styles.test1}>
              <input
                className={styles.test}
                aria-valuemin={1}
                type="range"
                min="1"
                max="12"
                value={loanTerm}
                id="sliderLoanTerm"
                onChange={({ target: { value } }) => setLoanTerm(value)}
              />
            </div>

            <div id="progress"></div>

            <div
              id="tooltipLoanTerm"
              className={styles.cont}
            >
              {loanTerm}
              Y
              {/* {loanTerm !== 1 && "y"} */}
            </div>
          </div>
          <h4 className={styles.h6}>Loan Duration</h4>
          <div className={styles.totalcont}>

            <div className={styles.test1}>

              <input

                className={styles.test}
                aria-valuemin={0}
                type="range"
                min="0"
                max="100"
                value={percentage}
                id="sliderPercentage"
                onChange={({ target: { value } }) => setPercentage(value)}
              />

            </div>

            <div id="progress"></div>
            <div
              id="tooltipPercentage"
              className={styles.cont}
            >
              {percentage}%
            </div>
          </div>
        </section>


        <div className={styles.result}>
          <h3 className={styles.Details} >Loan Details</h3>
          <div>
            <span className={styles.Payment}>Monthly Payment:</span> <span className={styles.totalPayment}>{monthlyPayment}</span>

          </div>
          <br />
          <div>

            <span className={styles.Payment}>Total Payment:</span> <span className={styles.totalPayment}>{totalPayment}</span>
          </div>
          <br />


          <div>
            <span className={styles.Payment}>Total Interest:</span> <span className={styles.totalPayment}>{totalInterest}</span>
          </div>


        </div>
      </div>
    </>
  );
}

export default LoanCalculator;
