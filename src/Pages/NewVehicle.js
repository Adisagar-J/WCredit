import React, { useState } from 'react';

const NewVehicleForm = () => {
  const [vehicleName, setVehicleName] = useState('');
  const [vehicleNumber, setVehicleNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Vehicle Name:', vehicleName);
    console.log('Vehicle Number:', vehicleNumber);
  };

  return (
    <div className="new-vehicle-form">
      <h2>New Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="vehicleName">Vehicle Name*</label>
          <input
            type="text"
            id="vehicleName"
            value={vehicleName}
            onChange={(e) => setVehicleName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="vehicleNumber">Vehicle Number*</label>
          <input
            type="text"
            id="vehicleNumber"
            placeholder="Ex(TN XX AZ XXXX)"
            value={vehicleNumber}
            onChange={(e) => setVehicleNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button">Submit</button>
          <button type="button" className="cancel-button" onClick={() => { setVehicleName(''); setVehicleNumber(''); }}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default NewVehicleForm;
