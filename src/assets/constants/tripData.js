const data = [
    {
        locationName: 'Italy',
        locationImage: 'https://images.com/italy_coastline.jpg',
        tours: [
            {
                tourName: 'Taste of Tuscany',
                referenceImage:
                    'https://images.unsplash.com/photo-1572181021711-64df791c556a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dHVzY2FueXxlbnwwfHwwfHx8MA%3D%3D',
                location: 'Tuscany, Italy',
                days: 7,
                nights: 6,
                price: 1500,
                description:
                    'Culinary journey through vineyards, olive groves, and historic hilltop towns.',
                categories: ['food', 'culture', 'europe'],
            },
            {
                tourName: 'Rome & Amalfi Coast Escape',
                referenceImage:
                    'https://images.unsplash.com/photo-1635181738318-1967ddbcd591?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1sYWZpJTIwY29zdHxlbnwwfHwwfHx8MA%3D%3D',
                location: 'Rome & Amalfi Coast, Italy',
                days: 9,
                nights: 8,
                price: 2200,
                description:
                    'Ancient ruins, vibrant cities, and breathtaking coastal scenery.',
                categories: ['history', 'beach', 'europe'],
            },
            {
                tourName: 'Venice & the Dolomites',
                referenceImage:
                    'https://images.unsplash.com/photo-1511135570219-bbad9a02f103?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHZlbmljZXxlbnwwfHwwfHx8MA%3D%3D',
                location: 'Venice & the Dolomites, Italy',
                days: 6,
                nights: 5,
                price: 1800,
                description:
                    'Gondola rides, Renaissance art, and majestic mountain landscapes.',
                categories: ['city', 'nature', 'europe'],
            },
            {
                tourName: 'Sicilian Sun & Sea',
                referenceImage:
                    'https://images.unsplash.com/photo-1561472014-a4d9f1eec52b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2ljaWx5fGVufDB8fDB8fHww',
                location: 'Sicily, Italy',
                days: 8,
                nights: 7,
                price: 1650,
                description:
                    'Ancient Greek temples, vibrant markets, and pristine beaches.',
                categories: ['history', 'beach', 'europe'],
            },
            {
                tourName: 'Northern Italy Delights',
                referenceImage:
                    'https://images.unsplash.com/photo-1537535261941-f2cbdb39bd83?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8TGFrZSUyMENvbW98ZW58MHx8MHx8fDA%3D',
                location: 'Lake Como & Milan, Italy',
                days: 7,
                nights: 6,
                price: 1900,
                description:
                    'Charming lakeside towns, fashion capital Milan, and Alpine scenery.',
                categories: ['city', 'luxury', 'europe'],
            },
        ],
    },
    {
        locationName: 'Thailand',
        locationImage: 'https://images.com/thailand_temples.jpg',
        tours: [
            {
                tourName: 'Bangkok & Beaches',
                referenceImage:
                    'https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QmFuZ2tva3xlbnwwfHwwfHx8MA%3D%3D',
                location: 'Bangkok & Southern Beaches, Thailand',
                days: 10,
                nights: 9,
                price: 1100,
                description:
                    'Bustling markets, serene temples, and tropical island paradise.',
                categories: ['city', 'beach', 'asia'],
            },
            {
                tourName: 'Northern Thailand Adventure',
                referenceImage:
                    'https://plus.unsplash.com/premium_photo-1673283243146-4386ce977262?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Q2hpYW5nJTIwTWFpfGVufDB8fDB8fHww',
                location: 'Chiang Mai & Northern Highlands, Thailand',
                days: 8,
                nights: 7,
                price: 950,
                description:
                    'Hill tribes, jungle treks, and elephant encounters.',
                categories: ['adventure', 'nature', 'asia'],
            },
            {
                tourName: 'Thai Food & Temple Trails',
                referenceImage:
                    'https://images.unsplash.com/photo-1677920284356-2df0362e365b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuZ2tvayUyMHRyYXZlbHxlbnwwfHwwfHx8MA%3D%3D',
                location: 'Bangkok & Central Thailand, Thailand',
                days: 12,
                nights: 11,
                price: 1300,
                description:
                    'Culinary exploration, floating markets, and ancient Buddhist sites.',
                categories: ['food', 'culture', 'asia'],
            },
            {
                tourName: 'Island Hopping in Paradise',
                referenceImage:
                    'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U291dGhlcm4lMjBJc2xhbmRzJTJDJTIwVGhhaWxhbmR8ZW58MHx8MHx8fDA%3D',
                location: 'Southern Islands, Thailand',
                days: 11,
                nights: 10,
                price: 1700,
                description:
                    'Snorkeling, diving, and beach relaxation across multiple islands.',
                categories: ['beach', 'relaxation', 'asia'],
            },
            {
                tourName: 'Thailand Wellness Retreat',
                referenceImage:
                    'https://plus.unsplash.com/premium_photo-1700955150032-ae6ef96bf021?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8S29oJTIwU2FtdWklMkMlMjBUaGFpbGFuZHxlbnwwfHwwfHx8MA%3D%3D',
                location: 'Koh Samui, Thailand',
                days: 8,
                nights: 7,
                price: 1450,
                description:
                    'Yoga, meditation, spa treatments, and healthy cuisine.',
                categories: ['wellness', 'asia'],
            },
        ],
    },
    {
        locationName: 'Kenya',
        locationImage: 'https://images.com/kenya_safari.jpg',
        tours: [
            {
                tourName: 'Classic Wildlife Safari',
                referenceImage:
                    'https://images.unsplash.com/photo-1519659528534-7fd733a832a0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtlbnlhfGVufDB8fDB8fHww',
                location: 'Masai Mara National Reserve, Kenya',
                days: 6,
                nights: 5,
                price: 2800,
                description:
                    'Big Five encounters, Masai Mara, and stunning savanna landscapes.',
                categories: ['wildlife', 'adventure', 'africa'],
            },
        ],
    },
    {
        locationName: 'Japan',
        locationImage: 'https://images.com/japan_landscape.jpg',
        tours: [
            {
                tourName: 'Taste of Tokyo & Kyoto',
                referenceImage: 'https://images.com/tokyo_kyoto_food.jpg',
                location: 'Tokyo & Kyoto, Japan',
                days: 7,
                nights: 6,
                price: 2500,
                description:
                    'Culinary and cultural immersion in Japanese bustling capital and historic heart.',
                categories: ['food', 'culture', 'city', 'asia'],
            },
            {
                tourName: 'Hiking the Japanese Alps',
                referenceImage: 'https://images.com/japanese_alps_hiking.jpg',
                location: 'Kamikochi & the Japanese Alps, Japan',
                days: 6,
                nights: 5,
                price: 1900,
                description:
                    'Mountain adventures, hot springs, and traditional villages.',
                categories: ['nature', 'adventure', 'asia'],
            },
            {
                tourName: 'Zen Temples & Gardens',
                referenceImage: 'https://images.com/zen_temple_kyoto.jpg',
                location: 'Kyoto, Japan',
                days: 5,
                nights: 4,
                price: 1600,
                description:
                    'Seeking tranquility in Kyoto ancient shrines and gardens.',
                categories: ['culture', 'wellness', 'asia'],
            },
            {
                tourName: 'Anime Wonderland',
                referenceImage: 'https://images.com/tokyo_akihabara.jpg',
                location: 'Tokyo, Japan',
                days: 4,
                nights: 3,
                price: 1100,
                description:
                    'Explore the pop-culture epicenters of Akihabara and Nakano.',
                categories: ['pop-culture', 'city', 'asia'],
            },
            {
                tourName: 'Okinawa Island Escape',
                referenceImage: 'https://images.com/okinawa_beach.jpg',
                location: 'Okinawa, Japan',
                days: 7,
                nights: 6,
                price: 1800,
                description:
                    'Tropical beaches, coral reefs, and unique Ryukyuan culture.',
                categories: ['beach', 'culture', 'asia'],
            },
        ],
    },
    {
        locationName: 'Greece',
        locationImage: 'https://images.com/greek_islands.jpg', // Replace with a valid image URL
        tours: [
            {
                tourName: 'Athenian Odyssey',
                referenceImage: 'https://images.com/athens_acropolis.jpg', // Replace with a valid image URL
                location: 'Athens, Greece',
                days: 5,
                nights: 4,
                price: 1200,
                description:
                    'Ancient Acropolis, bustling markets, and modern city life.',
                categories: ['history', 'city', 'europe'],
            },
            // ... Add the other Greece tours similarly ...
        ],
    },
];

export default data;
