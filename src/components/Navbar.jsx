import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import { useEffect, useRef, useState } from 'react';

import NavbarButton from './Buttons/NavbarButtons';

const Navbar = () => {
    const [searchActive, setSearchActive] = useState(false);

    const searchInputRef = useRef(null);

    useEffect(() => {
        if (searchActive) {
            searchInputRef.current?.focus();
        }
    }, [searchActive]);

    const searchBarClass = searchActive
        ? 'opacity-100 visible'
        : 'opacity-0 invisible';

    return (
        <div className="relative w-full py-10 font-Manrope text-sm">
            <div className="flex  items-center gap-40 px-40 ">
                <div>Logo</div>

                <div className="flex items-center gap-12">
                    <NavbarButton buttonName="Home" />
                    <NavbarButton buttonName="Plan Your Trip" />
                    <NavbarButton buttonName="Top Destinations" />
                    <NavbarButton buttonName="Gallery" />
                    <NavbarButton buttonName="About Us" />
                    <NavbarButton buttonName="Contacts" />
                    <IconButton
                        onClick={() => setSearchActive(!searchActive)}
                        aria-label="Search"
                    >
                        <SearchIcon style={{ color: '#009ECA' }} />
                    </IconButton>
                    <Avatar style={{ background: 'transparent' }} />
                </div>

                <div
                    className={`absolute inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${searchBarClass}`}
                >
                    <input
                        ref={searchInputRef}
                        type="text"
                        placeholder="Search..."
                        className="z-0 h-10 w-3/4 rounded-lg pl-4 pr-10 focus:shadow focus:outline-none md:w-1/2 lg:w-1/3"
                        onBlur={() => setSearchActive(false)}
                    />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
