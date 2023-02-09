import React from 'react';
import NoFound from '../../../images/error.jpg'

const NotFound = () => {
    return (
        <div>
            <h2>Page Not Found</h2>
            <img src={NoFound} style={{ width: "500px" }} alt="error" border="0" />
        </div>
    );
};

export default NotFound;