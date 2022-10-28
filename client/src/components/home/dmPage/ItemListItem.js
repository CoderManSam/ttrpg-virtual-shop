import { useState } from 'react';

function ItemListItem({item}) {
  const [hideItemInfo, setHideItemInfo] = useState(true)

  return (
    <li className='item'>
      <img src={item.image} alt={`${item.name} icon`} className="dmpage-list-icon" onClick={() => setHideItemInfo(!hideItemInfo)}></img>
      <p>{item.name}</p>
      { hideItemInfo ?
        <div></div>   :  
        <div>
          <p>{item.description}</p>
          <p>{item.cost}G</p>
        </div>
      }
    </li>
  )
}

export default ItemListItem;