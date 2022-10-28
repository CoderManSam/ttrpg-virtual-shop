import React, { useEffect, useState } from 'react';
import ItemInfoModal from './ItemInfoModal';
// import ItemPopup from './ItemPopup';

const MyItemsListItems = ({item, shopId, newLocations, setNewLocations, locations, playerView, myItems, setMyItems}) => {
    const startingState = {
        diffX: 0,
        diffY: 0,
        dragging: false,
        styles: {top: 130}
    }

    const [position, setPosition] = useState(startingState)
    const [show, setShow] = useState(false);

    useEffect(() => {
      const itemLocation = item.locations.find((location) => location.shopId === shopId)

      if(itemLocation){
        setPosition({
          ...position,
          styles: {
              left: itemLocation.left,
              top: itemLocation.top
          }
          })
      }
    }, [myItems]);


    // console.log("current", ref.current.offsetWidth)

    const dragStart = (e) => {
      e.preventDefault()
    setPosition({
        ...position,
        diffX: e.screenX - e.currentTarget.getBoundingClientRect().left,
        diffY: e.screenY - e.currentTarget.getBoundingClientRect().top,
        dragging: true,
        // styles: {}
    })
    // console.log("drag start", position)
    }

    const dragging = (e) => {
      e.preventDefault()
    if(position.dragging){
        const left = (((e.screenX - position.diffX)/window.innerWidth)*100) + "%"
        const top = (((e.screenY - position.diffY)/window.innerHeight)*100)  + "%"
    
        setPosition({
        ...position,
        styles: {
            left: left,
            top: top
        }
        })

        // const existingLocation = newLocations.find((location) => location.itemId === item.id)

        // console.log("existingLocation", existingLocation)

        // if(existingLocation){
        //   setNewLocations([
        //     ...newLocations,
        //     {
        //       ...existingLocation,
        //       top: position.styles.top,
        //       left: position.styles.left
        //     }
        //   ])
        //   console.log("newLocations", newLocations)
        // }

        // else{
        //   setNewLocations([
        //     ...newLocations,
        //     {
        //       top: position.styles.top,
        //       left: position.styles.left,
        //       shopId: shopId,
        //       itemId: item.id
        //     }
        //   ])
        //   console.log("newLocations", newLocations)
        // }

        // console.log("dragging", left, top)
    }
    }

    const dragEnd = (e) => {
      e.preventDefault()
    setPosition({
        ...position,
        dragging: false
    })

    const existingLocation = newLocations.find((location) => location.itemId === item.id)
    const existingLocationIndex = newLocations.findIndex((location) => location.itemId === item.id)

    console.log("existingLocation", existingLocation)

    const locationToAddIfExisting = {
      ...existingLocation,
      top: position.styles.top,
      left: position.styles.left,
    }

    const locationToAdd = {
      top: position.styles.top,
      left: position.styles.left,
      shopId: shopId,
      itemId: item.id
    }

    if(existingLocation){
      // const filteredNewLocations = newLocations.filter(existingLocationIndex, 1, locationToAddIfExisting )

      const filteredNewLocations = newLocations.filter((location) => location.itemId !== item.id)
      filteredNewLocations.push(locationToAddIfExisting)

      setNewLocations([
        ...filteredNewLocations
      ])
      console.log("newLocations", newLocations)


      // const splicedNewLocations = newLocations.splice(existingLocationIndex, 1, locationToAddIfExisting )

      // setNewLocations([
      //   ...splicedNewLocations
      // ])
      // console.log("newLocations", newLocations)
    }

    else{
      setNewLocations([
        ...newLocations,
        locationToAdd
      ])
      console.log("newLocations", newLocations)
    }
    // console.log("drag end", position)
    }

//   const click = () => {
//     console.log("click")
//   }

    const handleShow = () => setShow(true);

    // const savePositions = () => {
    //     axios.put(`http://localhost:4000/items/1/`, {
    //         ...position
    //     }).then(res => console.log("res data", res.data))
    // }


    return (
        <>
            {/* <div className="block" style={position.styles} onDoubleClick={handleShow} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragEnd}> */}
            {playerView ?
              <div className="block">
                  <img src={item.image} alt={`${item.name} icon`} className="shop-list-item-icon hover" style={position.styles} onClick={handleShow}></img>
              </div>
              :
              <div className="block">
                <img src={item.image} alt={`${item.name} icon`} className="shop-list-item-icon hover" style={position.styles} onDoubleClick={handleShow} onMouseDown={dragStart} onMouseMove={dragging} onMouseUp={dragEnd}></img>
              </div>
            }
            {show ?
              <ItemInfoModal item={item} show={show} setShow={setShow} playerView={playerView} myItems={myItems} setMyItems={setMyItems} shopId={shopId}/>
              :
              <div></div>
            }
            {/* <ItemPopup show={show} setShow={setShow}/>   */}
            {/* <button onClick={savePositions}>Save changes</button> */}
        </>
    )
}

export default MyItemsListItems;