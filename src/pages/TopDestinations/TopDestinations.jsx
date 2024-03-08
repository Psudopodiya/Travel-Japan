import Navbar from 'src/components/Navbar';

const TopDestinations = () => {
    // Array of destination objects
    const destinations = [
        {
            name: 'Destination 1',
            image: 'destination1.jpg',
            description: 'Description of Destination 1',
        },
        {
            name: 'Destination 2',
            image: 'destination2.jpg',
            description: 'Description of Destination 2',
        },
        // Add more destinations here
    ];

    return (
        <div className="base font-Manrope">
            <Navbar />
            <div className="px-40 py-28">
                <h1 className="text-4xl font-light tracking-wider">
                    Top Destinations
                </h1>
                <p className="mt-4 max-w-md text-sm">
                    Explore our most popular destinations.
                </p>
                <div className="mt-10 grid grid-cols-3 gap-8">
                    {destinations.map((destination, index) => (
                        <div key={index} className="rounded-md shadow-md">
                            <img
                                src={destination.image}
                                alt={destination.name}
                                className="h-48 w-full rounded-t-md object-cover"
                            />
                            <div className="p-4">
                                <h2 className="text-xl font-medium">
                                    {destination.name}
                                </h2>
                                <p className="mt-2 text-sm">
                                    {destination.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default TopDestinations;
