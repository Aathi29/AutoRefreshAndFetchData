import React, { useEffect, useState } from 'react';
import "./App.css";

const App = ({ initialIndex }) => {
  const [data, setData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(initialIndex || 0);

  
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentIndex}`);
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    useEffect(() => {
      fetchData(); // Initial fetch
  
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 10000); // Auto-refresh every 10 seconds
  
      return () => clearInterval(intervalId); // Cleanup interval on component unmount
    }, [currentIndex]);

  useEffect(() => {
    localStorage.setItem('currentIndex', currentIndex.toString());
  }, [currentIndex]);

  return (
    <div>
      {data ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Company</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>{data.company.name}</td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;

