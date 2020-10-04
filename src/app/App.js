import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "../home/Home";
import Checkout from "../checkout/Checkout";
import Login from "../login/Login";
import {useContextValue} from "../context/StateProvider";
import {auth} from "../login/firebase";

function App() {
  const [, dispatch] = useContextValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Router>
      <div className="app">
        <Switch>
        
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          
          <Route path="/login">
            <Header />
            <Login />
          </Route>

          <Route path="/">
            <Header />
            <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
