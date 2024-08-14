

import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CartPage from './pages/CartPage';
import axios from 'axios';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Make a GET request to the backend API
        axios.get(`${process.env.REACT_APP_API_URL}/api/example`)
            .then(response => {
            setData(response.data.message);
            })
            .catch(error => {
                console.error('There was an error fetching data from the backend!', error);
        });
    }, []);

    return (
        <div>
            <h1>API Response:</h1>
            <p>{data}</p>
        </div>
    );
}

export default App;
