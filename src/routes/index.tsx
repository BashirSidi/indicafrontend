import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Control from '../pages/Control';
import Details from '../pages/Details';
import Kpis from '../pages/Kpis';
import Measures from '../pages/Measures';

const Router = () => (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/control' element={<Control/>} />
      <Route path='/details' element={<Details/>} />
      <Route path='/kpis' element={<Kpis/>} />
      <Route path='/measures' element={<Measures/>} />
    </Routes>
);

export default Router;