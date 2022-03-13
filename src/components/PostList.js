import React from 'react';
import MinimizedPost from './MinimizedPost';
import { useState, useEffect } from 'react';

export default function PostList(props) {
    const {authorId, categoryId, groupBy} = props;
    const [posts, setPosts] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(
      () => {
        setLoading(true)
        fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/posts")
          .then((res) => res.json())
          .then((json) => setPosts(json))
          .catch((error) => setError(error))
          .finally(() => setLoading(false))
      },
      [],
    )
    if (loading) {
      return (
        <div>Loading...</div>
      )
    }
    if (error) {
      return (
        <div>Error: {error.message}</div>
      )
    }
    if (groupBy === "author"){
        return (
            <div className='row justify-content-center'>
              {
                  posts.filter((post) => post.author === parseInt(authorId))
                  .map((post) => (
                      <div className='col-md-6 col-sm-12 my-2'>
                      <MinimizedPost key={post.id} post={post}/>
                      </div>
                  ))
              }
            </div>
          )
    }
    else {
        return (
            <div className='row justify-content-center'>
              {
                  posts.filter((post) => post.categories.includes(parseInt(categoryId)))
                  .map((post) => (
                      <div className='col-md-6 col-sm-12 my-2'>
                      <MinimizedPost key={post.id} post={post}/>
                      </div>
                  ))
              }
            </div>
          )
    }
}
