import PropTypes from 'prop-types';
const Footer = ({ location }) => {
    return (
        <div className="cherry-blossom pt-8">
            <div className="mx-48 flex justify-center gap-60 border-t-2  border-black font-ZCOOL">
                <div className="mt-10">Logo</div>
                <div className="mt-10 flex justify-center gap-10">
                    <div className="flex-col space-y-2">
                        <div className="mb-5">Travel</div>
                        {location.map((loc) => {
                            return <div key={loc}>{loc}</div>;
                        })}
                    </div>
                    <div className="flex-col space-y-2">
                        <div className="mb-5">Schedule</div>
                        <div>See upcomming hikes</div>
                    </div>
                    <div className="flex-col space-y-2">
                        <div className="mb-5">Blog</div>
                        <div>Travel Gallery</div>
                        <div>Popular Directions</div>
                    </div>
                    <div className="flex-col space-y-2">
                        <div className="mb-5">Contacts</div>
                        <div>Tele: +1 1234567890</div>
                        <div>Mail: travel.japan@gmail.com</div>
                        <div>
                            Add: Lorem ipsum dolor sit, amet consectetur
                            adipisicing elit. Excepturi, eaque?
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
Footer.propTypes = {
    location: PropTypes.array,
};

export default Footer;
