import React from 'react'
import grandChildComponent from './grandChildComponent'

const ChildComponent = (props) => {
  return (
    <div>
    <span><h1>Child Component</h1> </span>
   <div> {props.name} has <grandChildComponent bowlShape="square" bowlStatus="full" /></div>
   </div>
  )
}

export default ChildComponent