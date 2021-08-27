import React from 'react';

const LoadingBox = () => {
    return (
        <div style={{textAlign:'center', color:"green",fontSize:"30px"}}>
            <i className="fa fa-spinner fa-spin"> </i> <span>Loading.....</span>
        </div>
    );
};

export default LoadingBox;