import React from 'react';
import PostPage from './PostPage';
import AuthorSideBar from './AuthorSideBar';
import CommentPane from './CommentPane';
import NavBar from './NavBar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function ContentPage() {
    const {postId} = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(
      () => {
        fetch("https://fswd-wp.devnss.com/wp-json/wp/v2/posts/" + postId)
                .then((res) => res.json())
                .then((json) => setPost(json))
                .catch((error) => setError(error))
                .finally(() => setLoading(false))
      },
      [postId],
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
          <h2 className='text-center'>{post.title.rendered}</h2>
        </div>
        <div className='row justify-content-center'>
        <div className='col-md-1 m-2'>
            <NavBar />
          </div>
        <div className='col-md-10'>
        <PostPage post={post} />
        <div className='row justify-content-center'>
            <hr></hr>
            <AuthorSideBar authorId={post.author}/>
            <hr></hr>
            <CommentPane postId={postId}/>
          </div>
        </div>
        </div>
      </div>
    )
}
