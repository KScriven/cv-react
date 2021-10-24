import React from 'react';

function Contact(data) {

  return (
    <div>
      <header>
        <h2>Component Communications 👄</h2>
      </header>
      <p>You are welcome to email me at: {data.location.state} or if its work related drop me a DM on LinkedIn</p>
    </div>
  );
}

export default Contact;