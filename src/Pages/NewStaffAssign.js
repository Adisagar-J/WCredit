// NewStaffAssign.js
import React from 'react';
import { Input } from 'antd';
import '../Styles/NewStaffAssign.css';

const NewStaffAssign = () => {
  return (
    <div className="new-ward-form">
      <div className="header">
        NEW WARD
      </div>
      <form className="form">
        <div className="form-row">
          <div className="input-container">
            <label htmlFor="wardNo" className="required">Ward No</label>
            <Input type="text" id="wardNo" required />
          </div>
          <div className="input-container">
            <label htmlFor="area" className="required">Vehicle Name</label>
            <Input type="text" id="area" required />
          </div>
          <div className="input-container">
            <label htmlFor="locality" className="required">Staff Name</label>
            <Input type="text" id="locality" />
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

export default NewStaffAssign;
