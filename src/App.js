import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import Home from './pages/Home';
import Home from './pages/Home/index.jsx';
import Order from './pages/Order/index';
import Pricing from './pages/Pricing/index';
import Testimoni from './pages/Testimoni/index';
import Themes from './pages/Themes/index';
import Navbars from './components/Navbar';
// import Footer from './components/Footer';
import './App.scss';
export default function App() {
  return (
    <BrowserRouter>
      <Navbars />
      <div className='container'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/order' exact component={Order} />
          <Route path='/pricing' exact component={Pricing} />
          <Route path='/testimoni' exact component={Testimoni} />
          <Route path='/themes' exact component={Themes} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
