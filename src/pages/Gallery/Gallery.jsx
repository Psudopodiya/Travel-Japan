import Navbar from 'src/components/Navbar';

const Gallery = () => {
    // Array of image URLs or paths
    const images = [
        // Add your image URLs or paths here
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // ...
    ];

    return (
        <div className="base font-Manrope">
            <Navbar />
            <div className="px-40 py-28">
                <h1 className="text-4xl font-light tracking-wider">
                    Our Gallery
                </h1>
                <p className="mt-4 max-w-md text-sm">
                    Explore the beauty of our destinations through our gallery.
                </p>
                <div className="mt-10 grid grid-cols-3 gap-4">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="h-64 overflow-hidden rounded-md"
                        >
                            <img
                                src={image}
                                alt={`Gallery Image ${index}`}
                                className="h-full w-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Gallery;
