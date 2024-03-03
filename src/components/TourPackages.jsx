import ArrowCircleLeftIcons from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { useState } from 'react';

import CardList from '../components/UI/CardList';

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
                    className="transition-transform duration-500"
                    style={{ transform: `translateX(${scrollX}px)` }}
                >
                    <CardList /> {/* This should render your cards */}
                </div>
            </div>
        </div>
    );
};

export default TourPackages;
