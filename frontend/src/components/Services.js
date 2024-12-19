import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Services({ apiKey }) {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get('https://api-scarlet-ogd2.onrender.com/api/services', {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        });
        setServices(response.data);
      } catch (error) {
        console.error('Error fetching services:', error);
      }
    };

    if (apiKey) {
      fetchServices();
    }
  }, [apiKey]);

  return (
    <div className="services">
      <h2>Servicios Disponibles</h2>
      <ul>
        {services.map(service => (
          <li key={service._id}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Services;
