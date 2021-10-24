import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_INTRO } from './queries'

function Me() {
  const { loading, data, error } = useQuery(GET_INTRO);

  if (loading) return "Loading...";

  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <header>
        <h2>Component Type</h2>
      </header>
      <p>{data.intro}</p>
    </div>
  )
};

export default Me;