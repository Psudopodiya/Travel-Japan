const travelDestinations = [
    {
        imageUrl:
            'https://images.unsplash.com/photo-1624439769961-9d335b880474?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWZmaWVsJTIwdG93ZXJ8ZW58MHx8MHx8fDA%3D',
        country: 'France',
        placeName: 'Eiffel Tower',
        description:
            'Iconic symbol of Paris, offering breathtaking views from its towers, embodying the beauty of French architecture.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1608037521277-154cd1b89191?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3JlYXQlMjB3YWxsJTIwb2YlMjBjaGluYXxlbnwwfHwwfHx8MA%3D%3D',
        country: 'China',
        placeName: 'Great Wall of China',
        description:
            'Historic fortification, one of the most impressive architectural feats, stretching over 13,000 miles.',
    },
    {
        imageUrl:
            'https://plus.unsplash.com/premium_photo-1668703334257-c134fdfd8331?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhbmQlMjBjYW55b258ZW58MHx8MHx8fDA%3Dhttps://plus.unsplash.com/premium_photo-1668703334257-c134fdfd8331?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z3JhbmQlMjBjYW55b258ZW58MHx8MHx8fDA%3D',
        country: 'USA',
        placeName: 'Grand Canyon',
        description:
            'A colossal natural wonder, offering some of the most spectacular vistas and hiking trails.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1519761112046-3abcd5a21728?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TWFjaHUlMjBQaWNjaHV8ZW58MHx8MHx8fDA%3D',
        country: 'Peru',
        placeName: 'Machu Picchu',
        description:
            'Intriguing ancient Incan city high in the Andes, known for its archaeological significance and panoramic views.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8VGFqJTIwTWFoYWx8ZW58MHx8MHx8fDA%3D',
        country: 'India',
        placeName: 'Taj Mahal',
        description:
            'Magnificent mausoleum in Agra, a masterpiece of Mughal architecture and a monument to love.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1593378026483-2a1fd46a35bd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bm9ydGhlcm4lMjBsaWdodHN8ZW58MHx8MHx8fDA%3D',
        country: 'Iceland',
        placeName: 'Northern Lights',
        description:
            'Experience the magical dance of the auroras in Iceland, a breathtaking natural light display.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U2FudG9yaW5pfGVufDB8fDB8fHwy',
        country: 'Greece',
        placeName: 'Santorini',
        description:
            'Stunning island known for its whitewashed buildings with blue domes, dramatic views, and beautiful sunsets.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TWFzYWklMjBNYXJhfGVufDB8fDB8fHwy',
        country: 'Kenya',
        placeName: 'Masai Mara',
        description:
            'Famous wildlife reserve, home to the great migration. Ideal for safaris and witnessing the unspoiled wilderness.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dmVuaWNlfGVufDB8fDB8fHwy',
        country: 'Italy',
        placeName: 'Venice',
        description:
            'The city of canals, offering romantic gondola rides, rich history, and stunning architecture.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UHlyYW1pZHMlMjBvZiUyMEdpemF8ZW58MHx8MHx8fDI%3D',
        country: 'Egypt',
        placeName: 'Pyramids of Giza',
        description:
            'One of the Seven Wonders of the Ancient World, showcasing the architectural skill of ancient Egyptians.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8QmFsaXxlbnwwfHwwfHx8Mg%3D%3D',
        country: 'Indonesia',
        placeName: 'Bali',
        description:
            'Island paradise offering lush landscapes, vibrant culture, and stunning beaches.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8S3lvdG98ZW58MHx8MHx8fDI%3D',
        country: 'Japan',
        placeName: 'Kyoto',
        description:
            'Historic city with beautiful temples, traditional tea houses, and stunning cherry blossom views.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1616128618694-96e9e896ecb7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U3lkbmV5JTIwT3BlcmElMjBIb3VzZXxlbnwwfHwwfHx8Mg%3D%3D',
        country: 'Australia',
        placeName: 'Sydney Opera House',
        description:
            'Iconic, sail-shaped building and performing arts venue, symbolizing the artistic creativity of Australia.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1603201236596-eb1a63eb0ede?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8VmljdG9yaWElMjBGYWxsc3xlbnwwfHwwfHx8Mg%3D%3D',
        country: 'Zambia/Zimbabwe',
        placeName: 'Victoria Falls',
        description:
            'One of the largest and most famous waterfalls in the world, offering stunning views and a thunderous roar.',
    },
    {
        imageUrl:
            'https://images.unsplash.com/photo-1593995863951-57c27e518295?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Q2hyaXN0JTIwdGhlJTIwUmVkZWVtZXJ8ZW58MHx8MHx8fDI%3D',
        country: 'Brazil',
        placeName: 'Christ the Redeemer',
        description:
            'Massive statue of Jesus Christ overlooking Rio de Janeiro, known for its breathtaking panorama.',
    },
];

export default travelDestinations;
