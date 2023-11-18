"use client"
import React, { useState } from 'react';


import styles from './Details.module.css'

function Details() {

  // Function to open a specific tab
function  b  (event, tabName) {
  // Get all tab content elements
  var tabContent = document.getElementsByClassName("tab-content");

  // Hide all tab content
  for (var i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Get all tab buttons
  var tabButtons = document.getElementsByClassName("tab");

  // Remove the "active" class from all tab buttons
  for (var i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }

  // Show the selected tab content
  document.getElementById(tabName).style.display = "block";

  // Add the "active" class to the clicked button
  event.currentTarget.className += " active";
}

// Set the first tab as active by default
// document.getElementsByClassName("tab")[0].click();


  return (
    <>
      <h1 className={styles.business}> Business Bank</h1>
      <div className={styles.tabs}>
        <div className={styles.tab} onClick="openTab{event, 'tab1'}"> Loan Payment </div>
        <div className={styles.tab} onClick="openTab(event, 'tab2')">Required Documents</div>
        <div className={styles.tab} onClick="openTab(event, 'tab3')" >The Conditions</div>
        <div className={styles.tab} onClick="openTab(event, 'tab4')">Credit </div>
      </div>
      <div id="tab1" className={styles.tab_content}>
        <div className={styles.tap1}>
          <div className={styles.tab1_item}>
            <img className={styles.img} src="./img18.jpg" />

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



    </>
  )
}








export default Details