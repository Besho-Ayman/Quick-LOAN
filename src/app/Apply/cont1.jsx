import React from 'react';
import styles from './cont1.module.css';

class FormComponent extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.select1}>
        <input className={styles.select}
          type="text"
          id="fname"
          placeholder="First Name"

        />
       
        <input className={styles.select}
          type="text"
          id="lname"
          placeholder="Last Name"
        />
        
        <br />  <br />
        <input className={styles.select}
          type="number"
          id="lname"
          placeholder="Age"
        />

        <input className={styles.select}
          type="number"
          id="lname"
          placeholder="Total Income"
        />
        </div>
{/* <br />  <br /> */}
        <label htmlFor="Marital"> Marital Status</label><br />
        <select className={styles.select} id="Marital">
          <option value="Marital">Single</option>
          <option value="Marital">Married</option>
        </select>
        <br />  <br />
        <label htmlFor="Marital">  Education</label><br />
        <select className={styles.select} id="Marital">
          <option value="Marital">Graduate</option>
          <option value="Marital">Student</option>
        </select>








      </div>

    );
  }
}

export default FormComponent;
