// NewWardForm.js
import { Table, label,Input } from 'antd';
import React from 'react';
import './NewWardForm.css'; // You'll need to create this CSS file for styling

const NewPoints = () => {
  return (
    <div className="new-ward-form">
      <div className="header">
        NEW WARD
      </div>
      <form className="form">
        <div className="form-row">
          <div className="column">
          <label htmlFor="wardNo" className="required">Name</label>
            <Input type="text" id="wardNo" required />
          </div>
          <div className="column">
            <label htmlFor="area"className="required">Ward</label>
            <Input type="text" id="area" required />
          </div>
        </div>
        <div className="buttons">
          <button className="submit-button">Submit</button>
          <button className="cancel-button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewPoints;
