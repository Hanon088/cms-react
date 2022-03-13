import React from 'react';
import { useState, useEffect } from 'react';

export default function AuthorSideBar(props) {
    const {authorId} = props;

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
      <a href={"/author/" + authorId} className='m-2 text-decoration-none text-dark row'>
        <div className='col-1'>
         <div>{author.name}</div>
         <img className='img-fluid' src={author.avatar_urls["96"]} alt={author.avatar_urls["48"]}></img>
         </div>
         <div className='col-3 m-3'>
           {(author.description) ? author.description : "Author description goes here"}
         </div>
    </a>
    )
}
