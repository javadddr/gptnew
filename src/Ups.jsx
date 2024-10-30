// Ups.jsx
import React, { useState } from 'react';

const Ups = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [trackingData, setTrackingData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const clientId = 'YWMsATe1NhAFhg6ACaSafMK3rHx4POIiUuBxS5GZ6c5QOG30';
  const clientSecret = 'k3VSPZLF4pxqhhztAyEm8DB2aPXATX5vAHRGC2UzVxhtnUNW8mYMmmWkU7QLK4MR';

  // Function to get access token
  const getAccessToken = async () => {
    try {
      const response = await fetch('https://wwwcie.ups.com/security/v1/oauth/token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: 'Basic ' + btoa(`${clientId}:${clientSecret}`),
        },
        body: 'grant_type=client_credentials',
      });

      const data = await response.json();
      console.log(data)
      if (response.ok && data.access_token) {
        return data.access_token;
      } else {
        setError('Failed to obtain access token. Check your credentials.');
        console.error('Token Response:', data);
        return null;
      }
    } catch (error) {
      setError('Failed to obtain access token due to a network error.');
      console.error('Token Fetch Error:', error);
      return null;
    }
  };

  // Function to track shipment
  const trackShipment = async () => {
    setLoading(true);
    setError(null);
    setTrackingData(null);

    const accessToken = await getAccessToken();
    if (!accessToken) {
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        `https://wwwcie.ups.com/api/track/v1/details/${trackingNumber}?locale=en_US&returnSignature=false`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${accessToken}`,
            transId: 'testing',
            transactionSrc: 'testing',
          },
        }
      );

      const data = await response.json();
      if (response.ok) {
        setTrackingData(data);
      } else {
        setError('Failed to fetch tracking data.');
        console.error('Tracking Response:', data);
      }
    } catch (error) {
      setError('Failed to fetch tracking data due to a network error.');
      console.error('Tracking Fetch Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (trackingNumber) {
      trackShipment();
    }
  };

  return (
    <div>
      <h1>UPS Shipment Tracker</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Tracking Number"
          value={trackingNumber}
          onChange={(e) => setTrackingNumber(e.target.value)}
          required
        />
        <button type="submit">Track Shipment</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {trackingData && (
        <div>
          <h2>Tracking Information:</h2>
          <p><strong>Status:</strong> {trackingData.status?.description || 'Unavailable'}</p>
          <p><strong>Last Location:</strong> {trackingData.location?.address?.city || 'N/A'}, {trackingData.location?.address?.stateProvince || 'N/A'}</p>
          <p><strong>Estimated Delivery:</strong> {trackingData.estimatedDelivery?.date || 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default Ups;
