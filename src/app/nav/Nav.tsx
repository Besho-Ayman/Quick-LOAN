import styles from './Nav.module.css'
function Nav() {
    return (
        <nav className={styles.nav1}> 
        <ul className={styles.ul_nav}>
              <h1 className={styles.h1_nav}>BANK</h1>
            <li className={styles.li_nav}> <a className={styles.a_nav}href="HOME.html">HOME</a></li>
            <li className={styles.li_nav}> <a className={styles.a_nav} href="#Advantages">ABOUT</a> </li>
            <li className={styles.li_nav}> <a className={styles.a_nav} href="makeup.html">Business bank</a></li>  
            <li className={styles.li_nav}><a className={styles.a_nav} href="Loan_account.html">Calculator</a> </li>
      
            <li className={styles.li_nav}> <a className={styles.a_nav} href="Fees.html">Contact</a></li>
          <button type="button" className={styles.but_Apply}><a className={styles.a_Apply} href="conditions.html">Apply </a> </button>
          </ul> 
          </nav>  
      
    )
}

export default Nav