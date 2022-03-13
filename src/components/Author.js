import React from 'react'

export default function Author(props) {
  const {author} = props;
  return (
    <a href={"/author/" + author.id} className="text-decoration-none text-dark">
      <li>{author.name}</li>
    </a>
  )
}
