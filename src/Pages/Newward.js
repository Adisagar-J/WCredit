// NewWardForm.js
import { Table, label,Input } from 'antd';
import React from 'react';
import '../Styles/NewWardForm.css';

const NewWard = () => {
  return (
    <div className="new-ward-form">
      <div className="header">
        NEW WARD
      </div>
      <form className="form">
        <div className="form-row">
          <div className="column">
          <label htmlFor="wardNo" className="required">Ward No</label>
            <Input type="text" id="wardNo" required />
          </div>
          <div className="column">
            <label htmlFor="area"className="required">Area</label>
            <Input type="text" id="area" required />
          </div>
        </div>
        <div className="form-row">
          <div className="column">
            <label htmlFor="locality" className="required">Locality</label>
            <Input type="text" id="locality" />
          </div>
          <div className="column">
            <label htmlFor="street" className="required">Street</label>
            <Input type="text" id="street" required />
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

export default NewWard;
