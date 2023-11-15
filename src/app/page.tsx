import Image from 'next/image'
import styles from './page.module.css'
import Nav from './nav/Nav'
import Slider from './Slider/Slider'


export default function Home() {
  return (
    <main  >
      <Nav />
      <Slider />
    </main>
  )
}
