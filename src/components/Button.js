import PropTypes from 'prop-types'

//destructure the obj
const Button = ({color, text, onClick}) => {
    //events/actions
        //console.log('click')
  return (
    <button onClick={onClick}
    style={{backgroundColor: color}} 
    className='btn'> 
    {text} 
    </button>
  )
}

Button.defaultProps = {
    color: 'steelblue'
  }
Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
  }
export default Button