import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_CONTACT } from './queries'

function SayHi() {
  const { loading, data, error } = useQuery(GET_CONTACT);

  if (loading) return "Loading...";

  if (error) return <pre>{error.message}</pre>

  return (
    <div>
      <header>
        <h2>Component Communications 👄</h2>
      </header>
      <p>You are welcome to email me at: {data.emailAddress} or if its work related drop me a DM on LinkedIn: {data.linkedIn}</p>
    </div>
  );
}

export default SayHi;