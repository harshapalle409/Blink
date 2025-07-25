import React from 'react';
import { Outlet } from 'react-router-dom';
import '../Styles/Services.css';

const Services = () => {
  return (
    <div className="services_wrapper">
      <h2 className="services_heading">Explore Our Services</h2>
      <p className="services_intro">Whether you're looking for a fresh look or a pampering session, we've got tailored services for everyone.</p>
      <Outlet />
    </div>
  );
};

export default Services;