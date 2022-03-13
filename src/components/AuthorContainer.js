import React from 'react'
import Author from './Author';

export default function AuthorContainer(props) {
  const {authors} = props;
  return (
    <ul>
      {
        authors.map((author) => (
          <Author key={author.id} author={author} />
        ))
      } 
    </ul>
  )
}
