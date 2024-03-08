import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import NavbarButton from './Buttons/NavbarButtons';
import Logo from './Icons/Logo';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full py-10 font-Manrope text-sm">
            <div className="flex items-center gap-32">
                <div className="ml-5 md:ml-40">
                    <Logo />
                </div>
                <div className="hidden items-center gap-10 md:flex">
                    <NavbarButton buttonName="Home" />
                    <NavbarButton buttonName="Plan Your Trip" />
                    <NavbarButton buttonName="Top Destinations" />
                    <NavbarButton buttonName="Gallery" />
                    <NavbarButton buttonName="About Us" />
                    <NavbarButton buttonName="Contacts" />
                </div>
                <div className="flex flex-col items-center md:hidden">
                    <button
                        className="mobile-menu-button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <MenuIcon />
                    </button>
                </div>
            </div>
            {/* drawer */}
            <div
                className={`fixed right-0 top-0 z-40 h-full w-[60vw] bg-gray-900 py-20 duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
            >
                <div className="flex flex-col items-center gap-10">
                    <NavbarButton buttonName="Plan Your Trip" />
                    <NavbarButton buttonName="Top Destinations" />
                    <NavbarButton buttonName="Gallery" />
                    <NavbarButton buttonName="About Us" />
                    <NavbarButton buttonName="Contacts" />
                </div>
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black opacity-50"
                    onClick={() => setIsOpen(false)}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;
