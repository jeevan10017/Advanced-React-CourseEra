import React from 'react'

const FruitsCounter = (props) => {
  return (
    <div>
        <h5>Total Fruits : {props.fruits.length}</h5>
    </div>
  )
}

export default FruitsCounter