import React from 'react'
import './HeaderComponent.css'
import MenuBarComponent from '../MenuBar/MenuBarComponent'

function HeaderComponent() {
  return (
   <>
   <h1 id="h1">This is my first component</h1>
   <MenuBarComponent linkname="home" url="#home"/>
   <MenuBarComponent linkname="about" url="#about"/>
   <MenuBarComponent linkname="logging" url="#logging"/>
   <MenuBarComponent linkname="footer" url="#footer"/>
   </>
  )
}

export default HeaderComponent