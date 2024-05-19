"use client";
import React, { useState } from 'react';
import Apply from "../Apply/Apply";
import Homee from '../Slider/Home';
import About from '../About/About';
import BusinessBank from '../BusinessBank/BusinessBank';
import Calculator from '../Calculator/Calculator';
import Slider from '../Calculator/Slider';
import Contact from '../Contact/Contact';

import styles from './Nav.module.css';

function Nav() {
  const [showApply, setShowApply] = useState(false);

  const toggleApply = () => {
    setShowApply(prevShowApply => !prevShowApply);
  };
  
  return (
    <>
      <nav className={styles.nav1}>
        <ul className={styles.ul_nav} id="ul_nav">
          <img className={styles.logo} src='../../nav/icon4.png' alt="My Logo" />
          <h1 className={styles.h1_nav}>Quick LOAN</h1>
          <div className={styles.total_nav}>
            <li className={styles.li_nav}>
              <a className={styles.a_nav} href="#home">HOME</a>
            </li>
            <li className={styles.li_nav}>
              <a className={styles.a_nav} href="#About">ABOUT</a>
            </li>
            <li className={styles.li_nav}>
              <a className={styles.a_nav} href="#Business_bank">Business Bank</a>
            </li>
            <li className={styles.li_nav}>
              <a className={styles.a_nav} href="#Calculator">Calculator</a>
            </li>
            <li className={styles.li_nav}>
              <a className={styles.a_nav} href="#Contact">Contact</a>
            </li>
          </div>
          <button type="button" className={styles.but_Apply} onClick={toggleApply}>
          <a className={styles.a_Apply}  href="#Apply" >
             
              Apply </a> 

          </button>
        </ul>
        <div className={styles.icons}>
          <img id='open' src='../../nav/icon1.png' alt="Icon" />
        </div>
      </nav>
      
      {!showApply ? (
        <div id="total">
          <Homee />
          <About />
          <BusinessBank />
          <Calculator />
          <Slider />
          <Contact />
        </div>
      ) : (
        <div id="Apply">
          <Apply />
        </div>
      )}
    </>
  );
}

export default Nav;
