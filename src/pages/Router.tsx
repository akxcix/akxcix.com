import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './Contact/Contact';
import Home from './Home/Home';
import NotFound from './NotFound/NotFound';

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home className='home'/>}/>
                <Route path='/contact' element={<Contact className='contact' />}/>
                <Route path='*' element={<NotFound className='notfound' />} />
            </Routes>
        </BrowserRouter>
    );
  }
  