import React from 'react';

function Me(data) {

  return (
    <div>
      <header>
        <h2>Component Type</h2>
      </header>
      <p>{data.location.state}</p>
    </div>
  )
};

export default Me;