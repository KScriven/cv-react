import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_MY_DATA} from '../queries';

function Contact() {
  const { loading, data, error } = useQuery(GET_MY_DATA);

  if (loading) return "Loading...";

  if (error) return (<pre>Come back later we are taking a break</pre>);

  return (
    <div data-testid="contact-testid">
      <header>
        <h2>Component Communications</h2>
      </header>
      <p>You are welcome to email me at <em>{data.emailAddress}</em></p>
      <p>If its work related drop me a DM on LinkedIn <em>{data.linkedIn}</em></p>
    </div>
  );
}

export default Contact;