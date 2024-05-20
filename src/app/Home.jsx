import Nav from './nav/Nav';
import Slider from './Slider/Slider';
import About from './About/About';
import Details from './Details/Details';
import Footer from './Footer/Footer';



export default function Home() {
    return (
        <main>
            <Nav />
            <Slider />
            <About />
            <Details />
            <Footer />
        </main>
    );
}
