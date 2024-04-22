import React from 'react';
// import axios from 'axios'; // استيراد مكتبة axios

import styles from './cont2.module.css';
class FormComponent2 extends React.Component {
  render() {
    return (

      <div className={styles.coment}>
        <div className={styles.coment} >
          <div  className={styles.select1} >

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

          {/* <div>
            <label htmlFor="banks">Choose your preferred bank service</label><br /><br />
            <select className={styles.select} id="banks">
              <option value="">Individual Banking</option>
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
          </div> */}
        </div>
      
        <div>

          {/* <br><br> */}
          <div className={styles.totalInput}>
            <div className={styles.number}>

              {/* <br /><br /> */}


            </div>

            {/* <br><br> */}
            {/* <br><br> */}
          </div>
          

          <div className={styles.number}>
          <input type="number" id="myNumber" className={styles.amount} placeholder=" Your loan amount" />

          <input type="number" className={styles.Dependents} id="number" placeholder="Dependents" />
          <input type="number" className={styles.Dependents} id="number" placeholder="Experience" />

            <input type="number" className={styles.Applicantlncome} id="number" placeholder="Applicantlncome" />

            <input type="number" id="number" className={styles.coapplicantlncome} placeholder="coapplicantlncome" />
            
            <input type="number" id="number" className={styles.Loan} placeholder="Loan Amount Term" />

          </div>
          {/* <br /><br /> */}

        </div>

      </div>
    );
  }
}

export default FormComponent2;
