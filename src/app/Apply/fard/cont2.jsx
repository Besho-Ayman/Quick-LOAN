"use client"
import React from 'react';
import axios from 'axios'; // استيراد مكتبة axios

import styles from './cont2.module.css';

class FormComponent2 extends React.Component {
  componentDidMount() {
    // يمكنك استخدام axios هنا لإرسال الطلب
    axios.post('https://db95-41-37-229-149.ngrok-free.app/api/register')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error('حدث خطأ في الطلب:', error);
      });
  }
  render() {
    return (
      <div>
      









        {/* // <div className={styles.coment}> */}
        <div className={styles.coment} >
          <div className={styles.select1} >

            <div>
              <label htmlFor="cars">Self Employed</label><br />
              <select className={styles.select} id="cars">
                <option value="">Yes</option>
                <option value="Personal loan">No</option>
              </select>


            </div>
            <div>
              <label htmlFor="cars">Loan Status</label><br />
              <select className={styles.select} id="cars">
                <option value="">Yes</option>
                <option value="Personal loan">No</option>
              </select>
            </div>
          </div>
          <div className={styles.select1} >
            <div>

              <label htmlFor="cars">Credit History</label><br />
              <select className={styles.select} id="cars">
                <option value="">Good</option>
                <option value="Personal loan">Bad</option>
              </select>
            </div>
            <div>
              <label htmlFor="cars">CD Account</label><br />
              <select className={styles.select} id="cars">
                <option value="">have</option>
                <option value="Personal loan">no</option>
              </select>
            </div>
          </div>

        </div>

        <div>

          <div className={styles.totalInput}>
            <div className={styles.number}>



            </div>

          </div>


          <div className={styles.number}>
            <input type="number" id="myNumber" className={styles.amount} placeholder=" Your loan amount" />
            <input type="number" className={styles.Dependents} id="number" placeholder="Dependents" />
            <input type="number" className={styles.Dependents} id="number" placeholder="Experience" />
            <input type="number" className={styles.Applicantlncome} id="number" placeholder="Applicantlncome" />
            <input type="number" id="number" className={styles.coapplicantlncome} placeholder="coapplicantlncome" />
            <input type="number" id="number" className={styles.Loan} placeholder="Loan Amount Term" />

          </div>

        </div>
        <div className={styles.buttonContainer}>
          <button className={styles.beforeButton} >previous</button>
          <button className={styles.sendButton} >Send</button>
        </div>
      </div>
    );
  }
}

export default FormComponent2;
