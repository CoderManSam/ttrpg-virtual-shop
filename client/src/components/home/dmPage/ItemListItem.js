import { useState } from 'react';

function ItemListItem({item}) {
  return (
    <li>
      <img src={item.image} alt={`${item.name} icon`} className="shop-list-item-icon"></img>
      <p>{item.name}</p>
    </li>
  )
}

export default ItemListItem;