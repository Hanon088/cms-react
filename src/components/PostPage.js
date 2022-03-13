import React from 'react';

export default function PostPage(props) {
    const {post} = props;
  return (
    <div>
       <div dangerouslySetInnerHTML={{__html: post.content.rendered}} />
    </div>
  )
}
