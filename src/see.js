import React from 'react';

function See(data) {

  return (
    <div>
      <header>
        <h2>Component Capabilities</h2>
      </header>
      <p>This is a place where I share my interests</p>
      <p>{data.location.state}</p>
    </div>
  );
}

export default See;