import React from 'react';
import { useQuery } from '@apollo/client';
import GET_MY_DATA from '../queries';

function Blog() {
  // const { loading, data, error } = useQuery(GET_MY_DATA);

  // if (loading) return "Loading...";

  // if (error) return (<pre>Come back later we are taking a break</pre>);

  return (
    <div data-testid="blog-testid">
      <header>
        <h2>Notes to Self</h2>
      </header>
      <p>ToDo: GraphQL Get some blogs setup here for reading</p>

    </div>
  );
}

export default Blog;