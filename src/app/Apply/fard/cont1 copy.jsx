import React from 'react';
import styles from './cont1.module.css';
import axios from 'axios'; // استيراد مكتبة axios

class FormComponent extends React.Component {
  componentDidMount() {
    // يمكنك استخدام axios هنا لإرسال الطلب
    axios.post('https://793e-41-37-229-149.ngrok-free.app/api/register')
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
