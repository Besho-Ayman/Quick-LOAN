import Image from 'next/image'
import styles from './page.module.css'
import Nav from './nav/Nav'
import Slider from './Slider/Slider'
import About from './About/About'
import Footer from './Footer/Footer'
import App from './BusinessBank/BusinessBank'
// import Details from './Details/Details'


export default function Home() {
  return (
    <main  >

     
      <Nav />
      <Slider />
      <About/>
      <App/>
      <Footer />
    </main>
  )
}
