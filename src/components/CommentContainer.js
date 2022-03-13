import React from 'react';
import Comment from './Comment';

export default function CommentContainer(props) {
  const {comments} = props;
  return (
    <div className='row justify-content-left my-2'>
      {
        comments.map((comment) => (
          <div key={comment.id} className='col-md-8 my-2'>
          <Comment comment={comment} />
          </div>
        ))
      }
    </div>
  )
}
