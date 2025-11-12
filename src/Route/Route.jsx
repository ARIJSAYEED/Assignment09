import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';
import Games from '../Pages/Games';
import Root from '../Components/Root';
import Error from '../Pages/Error';
import Auth from '../Pages/Auth';
import Login from '../Components/Login';
import Register from '../Components/Register';
import GameDetails from '../Pages/GameDetails';
import PrivateRoute from '../Auth/PrivateRoute';

export let router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                index: true,
                element: <Home></Home>,
            }
        ]
    },
    {
        path: 'auth',
        element: <Auth></Auth>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            }
        ]

    },
    {
        path: 'games',
        element: <Games></Games>,
        loader: () => fetch('/Data30.json')
    },
    {
        path: 'games-details/:id',
        loader: () => fetch('/Data30.json'),
        element: <PrivateRoute>
            <GameDetails></GameDetails>
        </PrivateRoute>
    },
    {
        path: 'developer',
        loader: () => fetch('/Data30.json'),
        element:
    },
    {
        path: '/*',
        element: <Error></Error>
    }
])

const Route = () => {
    return (
        <div>

        </div>
    );
};
export default Route;