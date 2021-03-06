import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import Review from './Components/Review/Review';
import Inventory from './Components/Inventory/Inventory';
import NotFound from './Components/NotFound/NotFound';
import ProductDetails from './Components/ProductDetails/ProductDetails';



function App() {
  return (
    <div> 
        <Header></Header>
      <Router>
              <Switch>
                  <Route path="/shop">
                      <Shop></Shop>
                  </Route>
                  <Route path="/review">
                      <Review></Review>
                  </Route>
                  <Route path="/inventory">
                      <Inventory></Inventory>
                  </Route>
                  <Route exact path="/">
                      <Shop></Shop>
                  </Route>
                  <Route path="/:productKey">
                      <ProductDetails></ProductDetails>
                  </Route>
                  <Route  path="*">
                        <NotFound></NotFound>
                  </Route>
              </Switch>
      </Router>

        
    </div>

  );
}

export default App;
