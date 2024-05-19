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
      

      </div>
    );
  }
}

export default FormComponent2;
