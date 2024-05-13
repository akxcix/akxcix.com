import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from 'pages/Contact/Contact';
import Home from 'pages/Home/Home';
import NotFound from 'pages/NotFound/NotFound';
import Toxic from 'pages/Toxic/toxic';
import { LINK_ABOUT, LINK_CONTACT, LINK_HOME, LINK_TOXIC } from 'commons/constants';
import About from 'pages/About/About';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={LINK_HOME} element={<Home className='home' />} />
                <Route path={LINK_ABOUT} element={<About className='about' />} />
                <Route path={LINK_CONTACT} element={<Contact className='contact' />} />
                <Route path={LINK_TOXIC} element={<Toxic className='toxic' />} />
                <Route path='*' element={<NotFound className='notfound' />} />
            </Routes>
        </BrowserRouter>
    );
}
