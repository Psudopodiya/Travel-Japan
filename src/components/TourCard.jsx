import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PlaceIcon from '@mui/icons-material/Place';
import PropTypes from 'prop-types';

const TourCards = ({ tours }) => {
    return (
        <div className="mt-8 flex flex-wrap justify-center gap-10 px-5 font-Manrope">
            {tours.map((tour) => (
                <div
                    key={tour.id}
                    className="flex h-96 w-1/4 flex-col justify-between rounded-md bg-slate-200 py-5 transition duration-300 ease-in-out hover:scale-110"
                    style={{
                        backgroundImage: `url(${tour.referenceImage})`,
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                    }}
                >
                    <div className="flex justify-between px-5">
                        <div>Rating</div>
                        <FavoriteIcon />
                    </div>
                    <div className="bottom-0 mx-5 flex max-h-fit flex-col justify-end gap-4 rounded-md bg-white bg-opacity-70 p-3  ">
                        <div className="flex flex-col">
                            <p className=" text-sm ">{tour.description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-1">
                                <AccessTimeIcon fontSize="20px" />
                                <p className="text-xs">
                                    {tour.nights}N/{tour.days}D
                                </p>
                            </div>
                            <div className="flex items-center gap-1">
                                <PlaceIcon fontSize="20px" />
                                <p className="text-xs">{tour.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <p className="text-sm">From :</p>
                            <p className="text-lg">${tour.price}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

TourCards.propTypes = {
    tours: PropTypes.array.isRequired, // Ensure 'tours' is marked as required
};

export default TourCards;
