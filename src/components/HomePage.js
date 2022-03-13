import React from 'react';
import PostContainer from './PostContainer';
import { useState, useEffect } from 'react';
import NavBar from './NavBar';

export default function HomePage() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(
      () => {
        setLoading(true)
        fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/posts")
          .then((res) => res.json())
          .then((json) => setData(json))
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
    return (
      <div className='container-fluid min-vh-100'>
        <div className='row justify-content-center m-3'>
          <h2 className='text-center'>Content</h2>
        </div>
        <div className='row justify-content-center'>
          <div className='col-md-1 m-2'>
            <NavBar />
          </div>
          <div className='col-md-10'>
        <PostContainer posts={data}/>
        </div>
        </div>
      </div>
    )
}
