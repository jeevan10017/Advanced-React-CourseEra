import React from 'react'

const grandChildComponent = (props) => {
  return (
    <div>
        <h1>GrandClildComponent</h1>
        <span>
    {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
</span></div>
  )
}

export default grandChildComponent