import React from 'react';
import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home';

export let router = createBrowserRouter([
    {
        path:'/',
        element: <Home></Home>,
        children:[
            {
                index:true,
                element:<Home></Home>
            }
        ]
    }
])

const Route = () => {
    return (
        <div>
            
        </div>
);
};
export default Route;