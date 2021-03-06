import React, {useEffect} from "react"
import {useDispatch} from "react-redux";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ReactNavbar from "./components/ReactNavbar.jsx"
import {Switch,Route} from 'react-router-dom';
import Products from './components/Products.jsx';
import Cart from './components/Cart';
import Default from './components/Default.jsx';
import {storeProducts} from "./data";
import {detailProduct} from "./data";
import Details from "./components/Details";
import Modal from "./components/Modal";
import setProducts from "./components/actions/setProducts";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'setProductsReducer', products:storeProducts});
    dispatch({type: 'setDetailsReducer', allDetails:detailProduct});
    dispatch(setProducts());
  },[dispatch]);
  return (
    <>
      <ReactNavbar/>
      <Switch>
        <Route exact path="/" component={Products} />
        <Route path="/cart" component={Cart}/>
        <Route path="/details" component={Details}/>
        <Route component={Default}/>
      </Switch>
      <Modal/>
    </>
  );
}

export default App;
