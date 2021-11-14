import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MY_DATA } from '../queries';

function Me() {
  const { loading, data, error } = useQuery(GET_MY_DATA);

  if (loading) return "Loading...";

  if (error) return (<pre>Come back later we are taking a break</pre>);

  return (
    <div data-testid="me-testid">
      <header>
        <h2>Component Specifications</h2>
      </header>
      <p>{data.intro}</p>
    </div>
  )
};

export default Me;