import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import OrderDetail from './pages/orderDetail'
import Orders from './pages/orders'

function App () {
  return (
    <>
      <Router>
        <Route path='/ordens'><Orders /></Route>
        <Route path='/order/:id'><OrderDetail /></Route>
      </Router>
    </>
  )
};

export default App
