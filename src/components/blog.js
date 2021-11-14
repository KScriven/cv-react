import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_MY_BLOGS } from '../queries';

function Blog() {
  const { loading, data, error } = useQuery(GET_MY_BLOGS);

  if (loading) return "Loading...";

  if (error) return (<pre>Come back later we are taking a break</pre>);

  console.log(data);

  return (
    <div data-testid="blog-testid">
      <header>
        <h2>Welcome to my Blogs to Self</h2>
      </header>
      <div>
        {data && data.map((blog, idx) => (
          <><span key={idx}></span><h3>{blog.intro}</h3></>
        ))}
      </div>
      {/* <p>{data}</p> */}
    </div>
  );
}

export default Blog;