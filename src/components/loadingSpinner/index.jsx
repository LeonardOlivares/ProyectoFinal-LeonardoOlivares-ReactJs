import React from 'react';
import { Spinner } from 'react-bootstrap';

const LoadingSpinner = ({text}) => {
  return (
    <div className="d-flex align-items-center justify-content-center" >
        {text}
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default LoadingSpinner;