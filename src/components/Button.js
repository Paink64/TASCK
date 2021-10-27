import PropTypes from 'prop-types'


const Button = ({color, text, onClick}) => {
    return (
        <button
            onClick={onClick}
            style={{ backgroundColor: color}}
            className='btn' > 
        {text}
       </button>
    )
}
Button.deafultProps = {
    color: 'gold'
}

Button.propTypes = {
    onClick: PropTypes.func
}
export default Button
