import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import these

import HomePage from './pages/HomePage';
import PlanTrip from './pages/PlanTrip';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/plan-your-trip" element={<PlanTrip />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
