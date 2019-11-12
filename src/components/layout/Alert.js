import React from 'react';

const Alert = ({ alert }) => {
  return (
    alert !== null && (
      <div className={`mt-2 alert alert-${alert.type}`}>
        <i className='fas fa-info-circle'></i> {alert.msg}
      </div>
    )
  );
};

export default Alert;
