const CardList = () => {
    const headings = [
        'Sunset Safari',
        'Mountain Retreats',
        'Island Hopping',
        'City Lights',
    ];

    const generateClassName = (heading) => {
        const res = heading.toLowerCase().replace(/\s+/g, '-');
        return res;
    };
    return (
        <>
            {headings.map((heading, index) => {
                return (
                    <div
                        key={index}
                        className={`${generateClassName(heading)} flex h-[450px] w-[350px] flex-shrink-0 flex-col justify-end rounded-md px-4 py-8 transition-all duration-300 ease-in-out hover:w-[400px]`}
                    >
                        <div className="text-sm">{heading}</div>
                        <div className="max-w-sm text-lg">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Quasi, neque.
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default CardList;
