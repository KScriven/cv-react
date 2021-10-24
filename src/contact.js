import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTACT } from './queries'

function SayHi() {
  const { loading, data, error } = useQuery(GET_CONTACT);

  console.log('data', data);

  if (loading) return "Loading...";

  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <header>
        <h1>Component Communications</h1>
      </header>
      <main class="main-content">
        <p>Speak with me</p>
        <p>{data.emailAddress}</p>
        <p>{data.linkedIn}</p>
      </main>
    </div>
  );
}

export default SayHi;