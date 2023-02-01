import Home from '../pages/Home';
import { Routes, Route } from 'react-router-dom';
import Main from '../layout/Main';
import Login from '../pages/Login/Login';
import Faqs from '../pages/Faqs';
import About from '../pages/About';
import Getqb from '../pages/Getqb';
import Signup from '../pages/Signup/Signup';
const RouteComponents = () => {
    return (
    <div>
        <Routes>
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
