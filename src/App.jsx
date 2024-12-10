
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Sidenav from './Sidenav';

const App = () => {


  return (
    <Sidenav>


      <Routes>
        <Route path="/" element={<div>Dashboard Content</div>} />
        <Route path="/agents" element={<div>Agents Page</div>} />
        <Route path="/products" element={<h1> Hello Product Page </h1>} />
        <Route path="/logout" element={<div>Logging out...</div>} />
      </Routes>

    </Sidenav>
  )
};



export default App;



