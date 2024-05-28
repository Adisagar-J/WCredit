import React, { useState } from 'react';
import './NewVehicle.css';  // Import the CSS file

const NewVehicle = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic
    console.log('Vehicle Name:', vehicleName);
    console.log('Vehicle Number:', vehicleNumber);
  };

  const handleCancel = () => {
    // Handle cancel logic
    setVehicleName('');
    setVehicleNumber('');
  };

  return (
    <div className="content">
      <h2 className="form-header">NEW VEHICLE</h2>
      <form onSubmit={handleSubmit} className="vehicle-form">
        <div className="form-group-horizontal">
          <div className="form-group">
            <label>Vehicle Name*</label>
            <input
              type="text"
              value={vehicleName}
              onChange={(e) => setVehicleName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Vehicle Number*</label>
            <input
              type="text"
              placeholder="Ex(TN XX AZ XXXX)"
              value={vehicleNumber}
              onChange={(e) => setVehicleNumber(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="form-buttons">
          <button type="submit" className="btn submit-btn">Submit</button>
          <button type="button" onClick={handleCancel} className="btn cancel-btn">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewVehicle;
