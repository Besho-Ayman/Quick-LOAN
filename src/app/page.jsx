import Image from 'next/image'
import styles from './page.module.css'
import Nav from './nav/Nav'
// import NavS from './navS/NavS'
import Homee from './Slider/Home'
import About from './About/About'
import Apply from "./Apply/Apply"
import Footer from './Footer/Footer'
import BusinessBank from './BusinessBank/BusinessBank'
import Calculator from './Calculator/Calculator'
import Slider from './Calculator/Slider'
import Contact from './Contact/Contact'
// import Form from './Aapply/Form'

export default function Home() {
  return (
    <main  >

      <Nav />
      {/* <Homee />
      <About />
      <BusinessBank />
      <Calculator />
      <Slider />
      <Contact /> */}
      {/* <div><Apply /></div> */}
      <Footer />
    </main>
  )
}
