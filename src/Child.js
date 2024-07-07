import React from 'react'

const Child = (props) => {
  return (
    <>
    <h1>This is Props Message</h1>
    <>{props.message}</>
    </>
  )
}

export default Child