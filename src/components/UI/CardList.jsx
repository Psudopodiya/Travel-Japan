import './cardList.css';

import { useState } from 'react';

const CardList = () => {
    const headings = [
        'Sunset Safari',
        'Mountain Retreats',
        'Island Hopping',
        'City Lights',
    ];

    const [hoveredCard, setHoveredCard] = useState(null);

    const generateClassName = (heading) => {
        const res = heading.toLowerCase().replace(/\s+/g, '-');
        return res;
    };

    const calculateButtonTranslation = (index) => {
        if (index < headings.length / 2) return 'translate-x-[50px]'; // Move left for first half
        return 'translate-x-[-50px]'; // Move right for second half
    };

    return (
        <>
            <div className="container">
                {headings.map((heading, index) => {
                    return (
                        <div
                            key={index}
                            className={`${generateClassName(heading)} item flex h-[450px] w-[350px] flex-col justify-end rounded-md px-4 py-8`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className="text-sm">{heading}</div>
                            <div className="max-w-sm text-lg">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Quasi, neque.
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-center">
                <button
                    className={`animated-word mt-6 rounded-sm px-6 py-2 transition-transform duration-150 ease-in-out ${hoveredCard !== null ? calculateButtonTranslation(hoveredCard) : ''}`}
                >
                    Explore
                </button>
            </div>
        </>
    );
};

export default CardList;
