import React from 'react';

const Error = (props) => {
    return (
        <div>
            <h1 style={{color:"red"}}>{props.children }!!</h1>
        </div>
    );
};

export default Error;