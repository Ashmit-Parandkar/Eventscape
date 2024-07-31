import React from 'react';

import './LoadingSpinner.css';

const LoadingSpinner = props => {
  return (
    <div className={`${props.asOverlay && 'loading-spinner__overlay'}`}>
      <div className="lds-dual-ring"></div>
      {props.text && <h1 style={{position:"fixed", top:"70vh", margin:"0 25vw"}}>{props.text}</h1>}
    </div>
  );
};

export default LoadingSpinner;
