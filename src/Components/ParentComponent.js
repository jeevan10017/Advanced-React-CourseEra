import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
  return (
    <ChildComponent name="Max" bowlShape="Square" bowlStatus="full" />
  )
}

export default ParentComponent