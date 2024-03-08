import './App.css';

import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import these
import AboutUs from 'src/pages/AboutUs/AboutUs';
import Gallery from 'src/pages/Gallery/Gallery';
import HomePage from 'src/pages/Homepage/HomePage';
import PlanTrip from 'src/pages/PlanYourTrip/PlanTrip';
import TopDestinations from 'src/pages/TopDestinations/TopDestinations';

function App() {
    return (
        <BrowserRouter>
            <Analytics />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/plan-your-trip" element={<PlanTrip />} />
                <Route path="/top-destinations" element={<TopDestinations />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/about-us" element={<AboutUs />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
