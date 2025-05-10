import Aerial_Vehicle_Information_Bar from './components/sidebar'
import Alkar_Header from './components/header'
import GroundControlMap from './components/map';
import './styles/app.css'
import Alkar_Footer from './components/footer';

export default function GroundControlStation() {
    return(
    <>
        <div className='parts'>
            <header>
                <Alkar_Header />
            </header>
            <main>
                <Aerial_Vehicle_Information_Bar />
                <GroundControlMap />
            </main>
            <footer>
                <Alkar_Footer />
            </footer>
        </div>
    </>
    );
}