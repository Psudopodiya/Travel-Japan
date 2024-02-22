import './homepage.css';

import pathMap from '../assets/map.svg';
import path from '../assets/path.svg';
import react from '../assets/react.svg';
import GuideIcon from '../components/Icons/GuideIcon';
import Navbar from '../components/Navbar';
import { WeatherComponent } from '../components/UI/WeatherComponent';

const HomePage = () => {
    const dates = [10, 14, 18, 23, 26, 30];
    const location = [
        'Tokyo',
        'Okohoma',
        'Kioto',
        'Sapporo',
        'Osaka',
        'Fukuokai',
    ];

    return (
        <>
            <div className="homepage-header">
                <Navbar />
                <div className="mx-[40%] mt-[15%] font-Enriqueta text-4xl tracking-[.7em] text-white">
                    JAPAN
                </div>
                <WeatherComponent />
            </div>

            <div className="w-full px-40 pt-12 font-ZCOOL text-xl">
                <div>CHOOSE YOUR UNFORGETABLE JOURNEY</div>
                <div className="mt-7 flex">
                    <div className="w-2/5">
                        <div>
                            <img src={path} alt="map" />
                        </div>
                        <div>
                            <img src={react} alt="map" />
                        </div>
                        <div>
                            <img src={pathMap} alt="map" />
                        </div>

                        <div className="mt-5">OUR GUIDES</div>
                        <div className="mt-5 flex-row space-y-5">
                            <GuideIcon name="Mary Smith" designation="Guide" />
                            <GuideIcon
                                name="Ronny Taylor"
                                designation="Photographer"
                            />
                        </div>
                    </div>
                    <div className="ml-36 w-3/5 text-lg">
                        <div>ADVENTURE TRAVEL</div>
                        <div className="mt-5 text-base">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Commodi dolore dolor ea ad minus quis
                            consequatur id vero qui. Error quis consequuntur
                            odio, libero nam omnis incidunt accusantium
                            voluptate amet ut, non corrupti molestiae accusamus,
                            nesciunt ipsum. Doloribus quam consequatur
                            voluptates, libero magni, tempora ex nihil,
                            architecto necessitatibus nisi quia placeat
                            distinctio ipsa maiores neque repudiandae dolorem!
                            Nisi cumque minus quis similique quisquam cum
                            laudantium, voluptates ab soluta dolores eaque quo
                            vel autem culpa hic in ad. Amet sequi vero porro
                            minus et eveniet modi debitis architecto dicta
                            laborum eos, quaerat temporibus optio unde eaque
                            vitae dolore, quae reiciendis corrupti.
                        </div>
                        <div className="mt-4 max-w-fit border-[1px] border-transparent transition duration-700 ease-in-out hover:border-[1px] hover:border-b-red-600">
                            Learn More
                        </div>

                        <div>VIDEO BOX</div>

                        <div className="mt-4 max-w-fit border-[1px] border-transparent transition duration-700 ease-in-out hover:border-[1px] hover:border-b-red-600">
                            Book Trip
                        </div>
                    </div>
                </div>
            </div>

            <div className="homepage-tours my-10 flex h-fit w-full  flex-col items-center py-5 font-ZCOOL  text-white">
                <div className="mt-6">Unforgetable</div>
                <div className="mt-5 text-6xl tracking-[.7em] text-red-600">
                    JAPAN
                </div>
                <div className="mt-5 ">
                    Tokyo|Okohoma|Kioto|Sapporo|Osaka|Fukuokai
                </div>
                <div className="mt-5 max-w-fit border-[1px] border-transparent transition duration-700 ease-in-out hover:border-[1px] hover:border-b-red-600">
                    Book Trip
                </div>

                {dates.map((date, index) => {
                    return (
                        <div key={index} className="mt-8 flex">
                            <div className="mr-2 text-6xl">{date}</div>
                            <div>
                                <div className="mt-1">April</div>
                                <div className="mt-1">{location[index]}</div>
                            </div>
                        </div>
                    );
                })}

                <div className="mt-5 max-w-fit border-[1px] border-transparent transition duration-700 ease-in-out hover:border-[1px] hover:border-b-red-600">
                    Book Trip
                </div>
                <div className="mt-5 max-w-fit border-[1px] border-transparent transition duration-700 ease-in-out hover:border-[1px] hover:border-b-red-600">
                    Subscribe to be the first to know
                </div>
            </div>
        </>
    );
};

export default HomePage;
