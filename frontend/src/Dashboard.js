import React, { useState, useEffect } from 'react';

function Dashboard({ token, setToken }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchProtectedData();
  }, []);

  const fetchProtectedData = async () => {
    const response = await fetch('http://localhost:5000/api/protected', {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (response.ok) {
      const result = await response.json();
      setData(result);
    } else {
      alert('Unauthorized');
      setToken(null);
    }
  };

  const logout = () => {
    setToken(null);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={logout}>Logout</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}

export default Dashboard;