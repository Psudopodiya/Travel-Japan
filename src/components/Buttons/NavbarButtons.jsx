import './navbarButtons.css';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const NavbarButtons = ({ buttonName }) => {
    const buttonClass =
        buttonName === 'Home'
            ? 'border-[1px] border-transparent px-2 font-OpenSans text-[#009ECA] transition duration-700 ease-in-out hover:border-[1px] hover:border-b-white'
            : 'border-[1px] border-transparent px-2 font-OpenSans text-white transition duration-700 ease-in-out hover:border-[1px] hover:border-b-[#009ECA]';

    if (buttonName == 'Home') {
        return (
            <Link to={'/'}>
                <button className={buttonClass}>{buttonName}</button>
            </Link>
        );
    } else {
        return (
            <Link to={`/${buttonName.toLowerCase().replace(/ /g, '-')}`}>
                <button className={buttonClass}>{buttonName}</button>
            </Link>
        );
    }
};

NavbarButtons.propTypes = {
    buttonName: PropTypes.string.isRequired,
};

export default NavbarButtons;
