import React from 'react';
import './regionview.css';

const RegionView = () => {
  return (
    <div className="region-view">
      <h3>Region Specific View</h3>
      <div className="dropdowns">
        <label>State</label>
        <select>
          <option>Choose State</option>
        </select>
        <label>District</label>
        <select>
          <option>Choose District</option>
        </select>
        <label>City</label>
        <select>
          <option>Choose City</option>
        </select>
      </div>
      <div className="map">
        <iframe
          title="Bangalore Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0713938028655!2d77.56768961477154!3d12.971598890857702!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670dd6dd3ff%3A0x982a75188fa25ba8!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1694708494367!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '8px' }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default RegionView;
