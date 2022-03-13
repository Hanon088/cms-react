import React from 'react';

export default function MinimizedPost(props) {
  const {post} = props;
  return (
    <div className='border border-secondary rounded w-75 h-100 my-4' style={{backgroundColor: "#84e3ff"}}>
      <a href={"/post/" + post.id} className="text-decoration-none text-dark">
      <div>{post.date.replace("T", "  ")}</div>
      <div>{post.title.rendered}</div>
      <div dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
      </a>
    </div>
  )
}
