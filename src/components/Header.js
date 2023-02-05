//uppercase convention for components
//extension - React/Redux snippets
//import React from 'react'

import PropTypes from 'prop-types'
import Button from './Button'

//create arrow function component
//we can pass a prop inside of our component here
//and replace h1 with a non-static text
//const Header = (props) => {
  //return (
   // <header>
    //    <h1>{props.title}</h1>
    //</header>
  //)
//}

//instead of props we can destructure
//with objects
const Header = ({ title }) => {
  const onClick = () => {}
  console.log('click')
  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button color='green' text='Add'
        onClick={onClick} />

    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string,
}
export default Header