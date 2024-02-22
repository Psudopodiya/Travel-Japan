import './navbarButtons.css';

import PropTypes from 'prop-types';
const NavbarButtons = ({ buttonName }) => {
    const name = buttonName;
    return (
        <div className="border-[1px] border-transparent px-2 font-OpenSans text-white transition duration-700 ease-in-out hover:border-[1px] hover:border-b-red-600">
            {name}
        </div>
    );
};

NavbarButtons.propTypes = {
    buttonName: PropTypes.string.isRequired,
};

export default NavbarButtons;
