import './App.css';

import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import these

import HomePage from './pages/HomePage';
import PlanTrip from './pages/PlanTrip';

function App() {
    return (
        <BrowserRouter>
            <Analytics />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/plan-your-trip" element={<PlanTrip />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
