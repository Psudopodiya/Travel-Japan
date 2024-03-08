import './navbarButtons.css';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const NavbarButtons = ({ buttonName }) => {
    const buttonClass =
        buttonName === 'Home'
            ? 'border-[1px] text-[16px] border-transparent font-OpenSans hover:text-[#009ECA] text-white transition duration-700 ease-in-out hover:border-[1px] hover:border-b-white font-Manrope'
            : 'border-[1px] text-[16px] border-transparent font-OpenSans hover:text-[#009ECA] text-white transition duration-700 ease-in-out hover:border-[1px] hover:border-b-[#009ECA] font-Manrope';

    if (buttonName == 'Home') {
        return (
            <Link to={'/'}>
                <button className={`${buttonClass}  max-w-fit `}>
                    {buttonName}
                </button>
            </Link>
        );
    } else {
        return (
            <Link to={`/${buttonName.toLowerCase().replace(/ /g, '-')}`}>
                <button className={`${buttonClass}  max-w-fit`}>
                    {buttonName}
                </button>
            </Link>
        );
    }
};

NavbarButtons.propTypes = {
    buttonName: PropTypes.string.isRequired,
};

export default NavbarButtons;
