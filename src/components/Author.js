import React from 'react';
import {Link} from 'react-router-dom';

export default function Author(props) {
  const {author} = props;
  return (
    <Link to={"/author/" + author.id} style={{ color: 'black', textDecoration: 'none' }}>
      <li>{author.name}</li>
    </Link>
  )
}
