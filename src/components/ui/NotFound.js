import React from 'react';

const NotFound = (props) => {
    let msg = (msg ? msg : 'Error 404: Not Found')
    return (
        <div>
            <center>
                <h1>{msg}</h1>
            </center>
        </div>
    )
};

export default NotFound;