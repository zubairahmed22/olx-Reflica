import React from 'react';
import {
  BrowserRouter as Router, Switch,Route} from "react-router-dom";


import Header from "./Header";
import AllCatagery from "./AllCatagery";
import ProductSection from "./ProductSection"
import FreshRecom from "./FreshRecom";
import FooterImage from "./FooterImage"
import SecondFooter from "./SecondFooter";
import LastFooter from "./LastFooter";
import AddSell from './AddSell';


function App() {




  
  return (
    <Router>
    <div className="App">
    <Switch>

    <Route path="/AddSell">

    <AddSell/>
    
    </Route>
    
    <Route path="/">
    <Header/>
   
    <AllCatagery/>
    

    <ProductSection/>
    <FreshRecom/>
    <FooterImage/>
    <SecondFooter/>
    <LastFooter/>
   
    </Route>

    

  
    </Switch>
    </div>
    </Router>
  );
}

export default App;
