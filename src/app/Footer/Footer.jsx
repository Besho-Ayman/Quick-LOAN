import styles from './Footer.module.css';
function Footer() {
  return (

    <footer className={styles.footerr}>
      <div className={styles.footer}>
        <div className={styles.footer_item}>
          <ul className={styles.ul1}>
            <li>
              <h4> Quick LOAN is a leading bank in the worldzone and  prominent international banking institution</h4>
            </li>
            <li>COTATION</li>
            <li>2023-01-05 14:00(INTERNATIONAL TIME)</li>
          </ul>
          <ul>
            <li>
              <h4> Quick LOAN</h4>
            </li>
            <li>Our 'company purpose'</li>
            <li>Jobs & Careers</li>
            <li>Our Responsibility</li>
            <li>Our Core Businesses</li>
          </ul>
          <ul>
            <li>
              <h4>Publication</h4>
            </li>
            <li>Compliance Publication</li>
            <li>Annual Reports</li>
            <li>CSR Reports</li>
            <li>Financial documentation</li>
          </ul>
          <ul>
            <li>
              <h4> Quick LOAN</h4>
            </li>
            <li>Our news</li>
            <li>Our press releases</li>
            <li>Our job offers</li>
            <li>Our websites</li>
          </ul>
        </div>
      </div>
      <div className={styles.social_footer}>
        <div className={styles.social_footeritem}>
          <div className={styles.logoo}>
            <h5>
              <img className={styles.logo} src='../../nav/icon4.png' alt="My " />
              Quick LOAN
            </h5>
          </div>
          <h6>@2023 All Right Reserved by Spider-Themes</h6>
          <div  >
            <a href="https://www.facebook.com">
              <img className={styles.icons} src='../../Footer/icon1.png' alt="My " />
            </a>

            <a href="https://www.twitter.com/">
              <img className={styles.icons} src='../../Footer/icon2.png' alt="My " />
            </a>

            <a href="https://www.facebook.com">
              <img className={styles.icons} src='../../Footer/icon3.png' alt="My2 " />
            </a>


          </div>






        </div>
      </div>


    </footer>
    // <script src="./all.min.js"></script>

  )
}

export default Footer