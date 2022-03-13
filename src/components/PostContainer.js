import React from 'react';
import MinimizedPost from './MinimizedPost';

export default function PostContainer(props) {
    const {posts} = props;
  return (
    <div className='row justify-content-center'>
      {posts.map((post) => (
        <div className='col-md-5 col-sm-12 my-2'>
        <MinimizedPost key={post.id} post={post}/>
        </div>
      ))}
    </div>
  )
}
