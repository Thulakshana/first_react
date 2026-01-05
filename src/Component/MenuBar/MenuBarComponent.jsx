import React from 'react'

function MenuBarComponent(props) {
  return (
    <>
    <a href={props.url} className='link'>{props.linkname}</a>
    
    </>
  )
}

export default MenuBarComponent