import React from 'react';
import CategoryContainer from './CategoryContainer';
import AuthorContainer from './AuthorContainer';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const [categories, setCategories] = useState(null);
    const [authors, setAuthors] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(
      () => {
        setLoading(true)

        Promise.all([fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/categories"),
                     fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/users")])
                .then(([res1, res2]) => Promise.all([res1.json(), res2.json()]))
                .then(([res1, res2]) => {setCategories(res1); setAuthors(res2)})
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
      <div>
          <div>
              <Link to="/" style={{ color: 'black', textDecoration: 'none' }}><h6>Home</h6></Link>
          </div>
          <div>
              <h6>Categories</h6>
              <CategoryContainer categories={categories}/>
          </div>
          <div>
              <h6>Authors</h6>
              <AuthorContainer authors={authors}/>
          </div>
      </div>
    )
}
