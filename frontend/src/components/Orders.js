import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Orders({ apiKey }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('https://api-scarlet-ogd2.onrender.com/api/orders', {
          headers: {
            'Authorization': `Bearer ${apiKey}`
          }
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    if (apiKey) {
      fetchOrders();
    }
  }, [apiKey]);

  return (
    <div className="orders">
      <h2>Mis Órdenes</h2>
      <ul>
        {orders.map(order => (
          <li key={order._id}>
            <p>Servicio: {order.serviceName}</p>
            <p>Cantidad: {order.quantity}</p>
            <p>Estado: {order.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
