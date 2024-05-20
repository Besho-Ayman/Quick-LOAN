import Nav from './nav/Nav';
import Slider from './Slider/Slider';
import About from './About/About';
import Footer from './Footer/Footer';
import BusinessBank from './BusinessBank/BusinessBank';
import Apply from './Apply/Apply';



export default function Home() {
    return (
        <main>

            <Nav />
            <Apply />
         
            <Slider />
            <About />
            <BusinessBank />
            <Footer />
        </main>
    );
}
