import './homepage.css';

import path from '../assets/path.svg';
import GuideIcon from '../components/Icons/GuideIcon';
import Navbar from '../components/Navbar';
import { WeatherComponent } from '../components/UI/WeatherComponent';

const HomePage = () => {
    return (
        <>
            <div className="homepage-header">
                <Navbar />
                <div className="font-Enriqueta mx-[40%] mt-[15%] text-4xl tracking-[.7em] text-white">
                    JAPAN
                </div>
                <WeatherComponent />
            </div>
            <div className="h-[100vh] w-full px-40 pt-12">
                <div>Heading</div>
                <div className="mt-7 flex">
                    <div className="w-2/5">
                        <div>
                            <img src={path} alt="map" />
                        </div>
                        <div className="flex-row space-y-5">
                            <GuideIcon name="Mary Smith" designation="Guide" />
                            <GuideIcon
                                name="Ronny Taylor"
                                designation="Photographer"
                            />
                        </div>
                    </div>
                    <div className="w-3/5"></div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
