import ArrowCircleLeftIcons from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import PlaceIcon from '@mui/icons-material/Place';
import { useState } from 'react';
import travelDestinations from 'src/assets/constants/travelDestinations';

const TourPackages = () => {
    const [scrollX, setScrollX] = useState(0);

    const handleScrollLeft = () => {
        setScrollX((prevScrollX) => Math.min(prevScrollX + 300, 0));
    };

    const handleScrollRight = () => {
        setScrollX((prevScrollX) =>
            Math.max(prevScrollX - 300, -3000 + window.innerWidth),
        );
    };
    return (
        <div className="bg-[#F3F7FC] px-40 py-28 font-Manrope">
            <div className="flex flex-row gap-5 ">
                <div className="left-0 size-fit px-40">
                    <div className=" max-w-sm text-4xl font-medium tracking-wider">
                        Best Tour Packages
                    </div>
                    <div className="mt-8 max-w-sm text-sm">
                        Explore Our Taloured Packages and embark on an
                        unforgetable journey worldwide today
                    </div>
                    <div className="flex items-center justify-between py-5"></div>
                </div>
                <div className="flex items-center justify-center gap-5 ">
                    <ArrowCircleLeftIcons
                        onClick={handleScrollLeft}
                        sx={{
                            '&:hover': { color: '#009ECA' },
                            fontSize: '32px',
                        }}
                    />
                    <ArrowCircleRightIcon
                        onClick={handleScrollRight}
                        sx={{
                            '&:hover': { color: '#009ECA' },
                            fontSize: '32px',
                        }}
                    />
                </div>
            </div>
            <div>
                <div
                    className="mt-3 flex gap-5 transition-transform duration-500"
                    style={{ transform: `translateX(${scrollX}px)` }}
                >
                    {travelDestinations.map((destination, index) => {
                        return (
                            <div
                                key={index}
                                className="item flex h-[400px] min-w-[300px] flex-col justify-end rounded-md px-4 py-8"
                                style={{
                                    backgroundImage: `url(${destination.imageUrl})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <div className="flex min-h-32 flex-col gap-3 rounded-md bg-white bg-opacity-70 p-3">
                                    <div className="flex gap-1">
                                        <PlaceIcon
                                            style={{
                                                color: '#009ECA',
                                                height: '18px',
                                            }}
                                        />
                                        <div className="text-sm ">
                                            {destination.placeName},
                                        </div>
                                        <div className="text-sm ">
                                            {destination.country}
                                        </div>
                                    </div>
                                    <div className="max-w-sm px-2 text-sm ">
                                        {destination.description}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default TourPackages;
