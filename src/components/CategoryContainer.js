import React from 'react';
import Category from './Category';

export default function CategoryContainer(props) {
    const {categories} = props
  return (
    <ul>
      {categories.map((category) => (
        <Category key={category.id} category={category}/>
      ))}
    </ul>
  )
}
