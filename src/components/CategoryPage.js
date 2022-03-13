import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PostList from './PostList';
import NavBar from './NavBar';

export default function CategoryPage() {
  const {categoryId} = useParams();
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(
    () => {
      setLoading(true)
      fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/categories/" + categoryId)
        .then((res) => res.json())
        .then((json) => setCategory(json))
        .catch((error) => setError(error))
        .finally(() => setLoading(false))
    },
    [categoryId],
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
          <h2 className='text-center'>{category.name}</h2>
        </div>
      <div className='row justify-content-center'>
      <div className='col-md-1 m-2'>
            <NavBar />
          </div>
      <div className='col-10'>
      <div className='row justify-content-center m-3'>
        <PostList categoryId={categoryId} groupBy="category" />
      </div>
      </div>
      </div>
    </div>
  )
}
