import React from 'react';

import {BrowserRouter, Link, Route, Routes} from 'react-router-dom'
import ProductScreen from './screens/ProductScreen';
import HomeScreen from './screens/HomeScreen';
import CartScreen from './screens/CartScreen';
import { useDispatch, useSelector } from 'react-redux';
import SigninScreen from './screens/SinginScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/paymentMethodScreen';

function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state)=>state.userSignin);
  const {userInfo} = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = ()=>{
     dispatch(signout());
  }
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row">
        <div>
          <Link className="brand" to="/">
            amazona
          </Link>
        </div>
        <div>
          <Link to="/cart">Cart

              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
          </Link>
         
          {userInfo ? (
              <div className="dropdown">
                <Link to="#">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                </Link>
                <ul className="dropdown-content">
                  <li>
                    <Link to="#signout" onClick={signoutHandler}>
                      Sign Out
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin">Sign In</Link>
            )} 
        </div>
      </header>
      <main>
      <Routes>
      <Route path="/shipping" element={<ShippingAddressScreen/>}></Route>
      <Route path='/' element = {<HomeScreen/>} exact/>
      <Route path='/cart/:id/:qty' element={<CartScreen/>}/>
      <Route path='/product/:id' element = {<ProductScreen/>}/>
      <Route path="/signin" element={<SigninScreen/>}></Route>
      <Route path="/register" element={<RegisterScreen/>}></Route>
      <Route path="/payment" element={<PaymentMethodScreen/>}></Route>
      <Route path="/cart" element={<CartScreen />}></Route>
      </Routes>
      </main>
      <footer className="row center">All right reserved</footer>
    </div>
    </BrowserRouter>
  );
}

export default App;