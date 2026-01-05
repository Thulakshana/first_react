import React from 'react'

function BodyContent(props) {
  return (
    <>
    <h1>main content</h1>
    {props.children}
    </>
  )
}

export default BodyContent