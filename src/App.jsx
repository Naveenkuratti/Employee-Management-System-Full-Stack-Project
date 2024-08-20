import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListEmployeeComponent from './components/ListEmployeeComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import CreateEmployeeComponent from './components/CreateEmployeeComponent';
import ViewEmployeeComponent from './components/ViewEmployeeComponent'; // Import your ViewEmployeeComponent

const App = () => {
  return (
    <div>
      <Router>
        <div className='container'>
          <HeaderComponent />
          <div className='container'>
            <Routes>
              <Route path="/" exact element={<ListEmployeeComponent />} />
              <Route path="/employees" element={<ListEmployeeComponent />} />
              <Route path="/add-employee" element={<CreateEmployeeComponent />} />
              <Route path="/add-employee/:id" element={<CreateEmployeeComponent />} />
              <Route path="/view-employee/:id" element={<ViewEmployeeComponent />} /> {/* Add this line */}
            </Routes>
          </div>
          <FooterComponent />
        </div>
      </Router>
    </div>
  );
};

export default App;
