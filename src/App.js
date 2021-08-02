import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Order from './pages/Order';
import Pricing from './pages/Pricing';
import Testimoni from './pages/Testimoni';
import Themes from './pages/Themes';
import Navbars from './components/Navbar';
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
