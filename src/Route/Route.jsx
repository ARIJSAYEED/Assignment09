import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Games from '../Pages/Games';
import Root from '../Components/Root';
import Error from '../Pages/Error';

export let router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            }
        ]
    },
    {
        path: 'games',
        element: <Games></Games>,
        loader: () => fetch('/Data30.json')
    },
    {
        path:'/*',
        element:<Error></Error>
    }
])

const Route = () => {
    return (
        <div>

        </div>
    );
};
export default Route;