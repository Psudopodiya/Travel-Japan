import Navbar from 'src/components/Navbar';
const AboutUs = () => {
    return (
        <div className="base font-Manrope">
            <Navbar />
            <div className="px-40 py-28">
                <h1 className="text-4xl font-light tracking-wider">About Us</h1>
                <p className="mt-4 max-w-md text-sm">
                    Learn more about our company and our mission to provide
                    unforgettable travel experiences.
                </p>
                <div className="mt-10 flex gap-10">
                    <div className="flex-1">
                        <img
                            src="about-us-image.jpg"
                            alt="About Us"
                            className="h-96 w-full rounded-md object-cover"
                        />
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-medium">Our Story</h2>
                        <p className="mt-4 text-sm">
                            Provide a brief description of your company history
                            and mission here.
                        </p>
                        <h2 className="mt-6 text-2xl font-medium">
                            Our Values
                        </h2>
                        <ul className="mt-2 list-disc pl-4 text-sm">
                            <li>Value 1</li>
                            <li>Value 2</li>
                            <li>Value 3</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
