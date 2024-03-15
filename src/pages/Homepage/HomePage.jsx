import './homepage.css';

import {
    AccountBalanceWalletOutlined,
    AddLocationOutlined,
    ArrowForward,
    PhotoCameraOutlined,
} from '@mui/icons-material';
// import Footer from 'src/components/Footer';
import Navbar from 'src/components/Navbar';
import TourPackages from 'src/components/TourPackages';
import CardList from 'src/components/UI/CardList';
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
                <div className="mt-12 flex flex-col gap-4 px-5 md:mt-32 md:px-40">
                    <div className="max-w-xl text-5xl text-white md:text-6xl">
                        Unleash And Live your Travel Dreams
                    </div>
                    <div className="mt-12 flex flex-col gap-y-10">
                        <div className="max-w-xl text-sm text-white md:text-base">
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Voluptate tempore eligendi placeat earum.
                            Earum nostrum labore praesentium eligendi excepturi
                            blanditiis.
                        </div>
                        <button className="w-fit rounded-md bg-[#009ECA] px-4 py-2 text-sm text-white md:text-base">
                            Plan your Trip
                        </button>
                    </div>
                </div>
            </div>

            <div className="h-[100vh] bg-[#E3F0FF] px-5 py-28 font-Manrope  md:px-40">
                <div className="flex gap-10  md:gap-48">
                    <div className="suitcase h-[400px] w-[350px] rounded-md md:h-[500px] md:w-[400px]"></div>
                    <div className="mt-3 flex flex-col gap-4 md:mt-8">
                        <div className="max-w-lg text-2xl font-light tracking-wider md:max-w-2xl md:text-4xl">
                            Discover India Proudly with Triplifly, Enjoy your
                            Journey
                        </div>
                        <div className="mt-2 max-w-sm text-xs md:mt-4 md:max-w-md md:text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio veritatis totam asperiores expedita
                            exercitationem laboriosam tenetur! At ut distinctio
                            deleniti?
                        </div>
                        <button className="animated-word ml-2 mt-6 rounded-sm py-2 text-sm md:px-6">
                            About Us
                        </button>
                        <div className="mt-6 hidden gap-12 md:flex">
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
                <div className="ml-5 mt-6 flex gap-6 md:hidden">
                    <div className="flex flex-col font-light">
                        <div className="text-3xl">12+</div>
                        <div className="text-sm">Years of Excellence</div>
                    </div>
                    <div className="flex flex-col font-light">
                        <div className="text-3xl">40K+</div>
                        <div className="text-sm">Happy Customers</div>
                    </div>
                    <div className="flex flex-col font-light">
                        <div className="text-3xl">20K+</div>
                        <div className="text-sm">Successful Packages</div>
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

                <CardList />
            </div>

            <div className=" flex bg-[#F3F7FC] py-28 font-Manrope">
                <div className="left-0 h-[600px] w-[800px] bg-[#E3F0FF] px-40 py-28">
                    <div className=" max-w-sm text-4xl font-medium tracking-wider">
                        Special Offers for Custom Packages
                    </div>
                    <div className="mt-8 max-w-sm text-sm">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quisquam iste corrupti debitis earum itaque delectus nam
                        sequi sed nostrum corporis?
                    </div>

                    <div className="flex items-center justify-between py-5">
                        <div className="flex size-36 flex-col items-center justify-center rounded-md bg-[#F3F7FC] shadow-sm ">
                            <AddLocationOutlined
                                style={{
                                    color: '#009ECA',
                                    height: '50px',
                                    width: '50px',
                                }}
                            />
                            <div className="mt-2 max-w-xs p-0.5 text-center text-xs">
                                Custom your tour spots
                            </div>
                        </div>
                        <div className="flex size-36 flex-col items-center justify-center rounded-md bg-[#F3F7FC] shadow-sm ">
                            <AccountBalanceWalletOutlined
                                style={{
                                    color: '#009ECA',
                                    height: '50px',
                                    width: '50px',
                                }}
                            />
                            <div className="mt-2 max-w-xs p-0.5 text-center text-xs">
                                Competative Pricings
                            </div>
                        </div>
                        <div className="flex size-36 flex-col items-center justify-center rounded-md bg-[#F3F7FC] p-4 shadow-sm">
                            <PhotoCameraOutlined
                                style={{
                                    color: '#009ECA',
                                    height: '50px',
                                    width: '50px',
                                }}
                            />
                            <div className="mt-2 max-w-xs p-0.5 text-center text-xs">
                                Free Photography of Selected Place
                            </div>
                        </div>
                    </div>

                    <button className="w-fit rounded-md bg-[#009ECA] px-4 py-2 text-sm text-white">
                        Plan your Trip
                    </button>
                </div>
                <div className="sunset-safari mt-[50px] h-[450px] w-[400px] -translate-x-20 rounded-md shadow-sm"></div>
            </div>

            <TourPackages />

            {/* <Footer location={location} /> */}
        </>
    );
};

export default HomePage;
