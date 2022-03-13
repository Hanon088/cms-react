import React from 'react';

export default function Category(props) {
    const {category} = props;
  return (
    <a href={"/category/" + category.id} className="text-decoration-none text-dark">
      <li>{category.name}</li>
    </a>
  )
}
