import React from 'react'

export default function Comment(props) {
  const {comment} = props;
  return (
    <div>
      <div>{comment.author_name} {comment.date.replace("T", "  ")}</div>
      <div dangerouslySetInnerHTML={{__html: comment.content.rendered}} />
    </div>
  )
}
