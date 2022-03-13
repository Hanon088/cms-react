import React from 'react';
import {Link} from 'react-router-dom';

export default function Category(props) {
    const {category} = props;
  return (
    <Link to={"/category/" + category.id} style={{ color: 'black', textDecoration: 'none' }}>
      <li>{category.name}</li>
    </Link>
  )
}
