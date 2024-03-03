import PropTypes from 'prop-types';
const TourCards = ({ tours }) => {
    return (
        <div className="mt-8 flex flex-wrap gap-4 px-5 font-Manrope ">
            {tours.map((tour, index) => (
                <div
                    key={index}
                    className="min-h-1/4 flex w-1/4 flex-col items-center gap-2 rounded-lg bg-[#009ECA] p-4 shadow-lg"
                >
                    <img
                        src={tour.referenceImage}
                        alt={tour.tourName}
                        className=" size-8 border border-black"
                    />
                    <h3>{tour.tourName}</h3>
                    <p>{tour.description}</p>
                    <p>
                        Duration:{tour.days} days, {tour.nights} nights
                    </p>
                    <p>Price:${tour.price}</p>
                </div>
            ))}
        </div>
    );
};

TourCards.propTypes = {
    tours: PropTypes.array,
};

export default TourCards;
