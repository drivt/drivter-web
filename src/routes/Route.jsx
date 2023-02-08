import Home from '../pages/Home';
import { Routes, Route } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../pages/Login/Login';
import Faqs from '../pages/Faqs';
import About from '../pages/About';
import Getqb from '../pages/Getqb';
import Signup from '../pages/Signup/Signup';

import Hello from '../screens/hello/Hello';
import Airtime from '../screens/airtime/Airtime';
import Success from '../screens/success/Success';
import Failed from '../screens/failed/Failed';
import Cabletv from '../screens/tv/Cabletv';
import Electricity from '../screens/electricity/Electricity';
import Betting from '../screens/betting/Betting';

const RouteComponents = () => {
    return (
    <div>
        <Routes>
        
        <Route path="/hello" element={<Hello />} />
        <Route path="/airtime" element={<Airtime />} />
        <Route path="/cabletv" element={<Cabletv />} />
        <Route path="/electricity" element={<Electricity />} />
        <Route path="/betting" element={<Betting />} />
        <Route path="/success" element={<Success />} />
        <Route path="/failed" element={<Failed />} />

            <Route path="/" element={<Main />}>
                <Route path="/" element={<Home />} />
                <Route path="/getqb" element={<Getqb />} />
                <Route path="/faqs" element={<Faqs />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Route>
        </Routes>
    </div>
    );
};

export default RouteComponents;
