import React from 'react';
import {Link} from 'react-router-dom';

export default function MinimizedPost(props) {
  const {post} = props;
  return (
    <div className='border border-secondary rounded w-75 h-100 my-4' style={{backgroundColor: "#84e3ff"}}>
      <Link to={"/post/" + post.id} style={{ color: 'black', textDecoration: 'none' }}>
      <div>{post.date.replace("T", "  ")}</div>
      <div>{post.title.rendered}</div>
      <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
      </Link>
    </div>
  )
}
