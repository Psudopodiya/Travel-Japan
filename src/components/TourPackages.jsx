import ArrowCircleLeftIcons from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import CardList from '../components/UI/CardList';

const TourPackages = () => {
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
                        sx={{
                            '&:hover': { color: '#009ECA' },
                        }}
                    />
                    <ArrowCircleRightIcon
                        sx={{
                            '&:hover': { color: '#009ECA' },
                        }}
                    />
                </div>
            </div>
            <div>
                <CardList />
            </div>
        </div>
    );
};

export default TourPackages;
