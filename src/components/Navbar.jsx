import NavbarButtons from './Buttons/NavbarButtons';
const Navbar = () => {
    return (
        <div className="flex w-full justify-between gap-4 py-10">
            <div className="ml-56">Logo</div>
            <div className="mr-16 flex gap-8 ">
                <NavbarButtons buttonName="Travel" />
                <NavbarButtons buttonName="Schedule" />
                <NavbarButtons buttonName="Blog" />
                <NavbarButtons buttonName="Contact Us" />
            </div>
        </div>
    );
};

export default Navbar;
