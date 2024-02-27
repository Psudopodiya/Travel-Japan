import './homepage.css';

import { ArrowForward } from '@mui/icons-material';

import Navbar from '../components/Navbar';
import CardList from '../components/UI/CardList';

const HomePage = () => {
    const plans = [
        'Varioud Destinations',
        'Best Tour Guide',
        'Easy Booking',
        'Best Customer Support',
    ];

    return (
        <>
            <div className="base font-Manrope">
                <Navbar />
                <div className="mt-32 flex gap-4 px-40">
                    <div className="max-w-sm text-8xl text-white">
                        Unleash And Live your Travel Dreams
                    </div>
                    <div className="mt-32 flex flex-col gap-y-10">
                        <div className="text-xl">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptate tempore eligendi placeat earum.
                            Earum nostrum labore praesentium eligendi excepturi
                            blanditiis.
                        </div>
                        <button className="w-fit rounded-md bg-[#009ECA] px-4 py-2 text-white">
                            Plan your Trip
                        </button>
                    </div>
                </div>
                {/* <WeatherComponent /> */}
            </div>

            <div className="flex h-[100vh] gap-48 bg-[#E3F0FF] px-40 py-28 font-Manrope">
                <div className="suitcase h-[500px] w-[400px] rounded-md"></div>
                <div className="mt-8 flex flex-col gap-4">
                    <div className="max-w-2xl text-4xl font-light tracking-wider">
                        Discover India Proudly with Triplifly, Enjoy your
                        Journey
                    </div>
                    <div className="mt-4 max-w-md text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odio veritatis totam asperiores expedita exercitationem
                        laboriosam tenetur! At ut distinctio deleniti?
                    </div>
                    <button className="animated-word mt-6 rounded-sm px-6 py-2">
                        About Us
                    </button>
                    <div className="mt-6 flex gap-12">
                        <div className="flex flex-col font-light">
                            <div className="text-[52px]">12+</div>
                            <div>Years of Excellence</div>
                        </div>
                        <div className="flex flex-col font-light">
                            <div className="text-[52px]">40K+</div>
                            <div>Happy Customers</div>
                        </div>
                        <div className="flex flex-col font-light">
                            <div className="text-[52px]">20K+</div>
                            <div>Successful Packages</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex h-[100vh] gap-48 bg-[#F3F7FC] px-40 py-28 font-Manrope">
                <div className="mt-8 flex flex-col gap-4">
                    <div className="max-w-md text-4xl font-light tracking-wider">
                        We Offer Following Services For You
                    </div>
                    <div className="mt-4 max-w-xs text-sm">
                        Explore our broad range of tailored services
                        Specifically for you, Taking your Experience beyond
                        Limit
                    </div>

                    <div className="mt-10 flex flex-col gap-y-3 font-light">
                        {plans.map((plan, index) => {
                            return (
                                <div
                                    key={index}
                                    className="flex justify-between border-[1px] border-transparent border-b-gray-300 p-2 transition duration-700 ease-in-out hover:border-[1px] hover:border-b-[#009ECA] hover:text-[#009ECA]"
                                >
                                    <p>{plan}</p>
                                    <ArrowForward
                                        color="inherit"
                                        fontSize="small"
                                    />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="suitcase h-[600px] w-[600px] rounded-md"></div>
            </div>

            <div className="bg-[#00131D] px-40 py-28 font-Manrope font-light text-white">
                <div className="text-4xl">Special Offers and Deals</div>
                <div className="mt-8 max-w-sm text-sm">
                    Find Amazing offers and deals with special discount that you
                    have been waiting for a long time to experience
                </div>
                <div className="relative mt-8 px-0">
                    <div className="flex flex-nowrap gap-4 overflow-x-auto">
                        <CardList />
                    </div>
                </div>
            </div>

            {/* <Footer location={location} /> */}
        </>
    );
};

export default HomePage;
