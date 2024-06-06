import React, { useState, useEffect, useCallback } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import '../Styles/LocationTracking.css';

const initialCenter = {
  lat: 13.1284016, // Center the map around the initial location (Updated Coordinates)
  lng: 80.200254
};

const users = [
  { id: 1, name: 'User 1', lat: 13.1284016, lng: 80.200254 },
  { id: 2, name: 'User 2', lat: 28.6139, lng: 77.2090 }
];

function LocationTracking() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [map, setMap] = useState(null);

  const onLoad = useCallback((mapInstance) => {
    setMap(mapInstance);
  }, []);

  useEffect(() => {
    if (selectedUser && map) {
      map.panTo({ lat: selectedUser.lat, lng: selectedUser.lng });
    }
  }, [selectedUser, map]);

  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <div className="container">
        <div className="sidebar">
          <h2>User List</h2>
          <ul className="user-list">
            {users.map((user) => (
              <li key={user.id} className="user-item" onClick={() => setSelectedUser(user)}>
                {user.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="map-container">
          <GoogleMap
            mapContainerStyle={{ width: '100%', height: '100%' }} // Ensure this matches the container's style
            center={initialCenter}
            zoom={10}
            onLoad={onLoad}
          >
            {users.map((user) => (
              <Marker
                key={user.id}
                position={{ lat: user.lat, lng: user.lng }}
                title={user.name}
                onClick={() => setSelectedUser(user)}
              />
            ))}
            {selectedUser && (
              <InfoWindow
                position={{ lat: selectedUser.lat, lng: selectedUser.lng }}
                onCloseClick={() => setSelectedUser(null)}
              >
                <div>
                  <h2>{selectedUser.name}</h2>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </div>
      </div>
    </LoadScript>
  );
}

export default LocationTracking;
