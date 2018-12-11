import React from 'react'

const Header = (props) => {
  console.log(props)

  return (
    <header>
      <img alt='galvanize dino logo' src='./assets/g-dino.png' onClick={props.clowns} />
    </header>
  )
}
export default Header
