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
        <h1>Component Type</h1>
      </header>
      <main className="main-content">
        <p>{data.intro}</p>
      </main>
    </div>
  )
};

export default Me;