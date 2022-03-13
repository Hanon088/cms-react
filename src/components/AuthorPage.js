import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostList from './PostList';
import NavBar from './NavBar';

export default function AuthorPage() {
  const {authorId} = useParams();
  const [author, setAuthor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(
    () => {
      setLoading(true)
      fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users/" + authorId)
        .then((res) => res.json())
        .then((json) => setAuthor(json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    },
    [authorId],
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
  return (
    <div className='container-fluid min-vh-100'>
      <div className='row justify-content-center'>
      <div className='row justify-content-center m-3'>
          <h2 className='text-center'>{author.name}</h2>
        </div>
      <div className='col-md-1 m-2'>
            <NavBar />
          </div>
        <div className='col-md-10'>
        <div className='row justify-content-center m-3'>
      <div>
      <div className='rounded col-6'><img className='img-fluid' src={author.avatar_urls["96"]} alt={author.avatar_urls["48"]}></img></div>
      <br></br>
      <div className='col-6'>{(author.description) ? author.description : "author description goes here"}</div>
      </div>
      
      <div className='m-3'>
        <PostList authorId={authorId} groupBy="author" />
      </div>
      </div>
    </div>
    </div>
    </div>
  )
}
