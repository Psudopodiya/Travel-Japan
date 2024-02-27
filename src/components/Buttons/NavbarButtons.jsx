import './navbarButtons.css';

import PropTypes from 'prop-types';
const NavbarButtons = ({ buttonName }) => {
    const name = buttonName;

    if (buttonName === 'Home') {
        return (
            <div className="border-[1px] border-transparent px-2 font-OpenSans text-[#009ECA] transition duration-700 ease-in-out hover:border-[1px] hover:border-b-white">
                {name}
            </div>
        );
    }
    return (
        <div className="border-[1px] border-transparent px-2 font-OpenSans text-white transition duration-700 ease-in-out hover:border-[1px] hover:border-b-[#009ECA]">
            {name}
        </div>
    );
};

NavbarButtons.propTypes = {
    buttonName: PropTypes.string.isRequired,
};

export default NavbarButtons;
