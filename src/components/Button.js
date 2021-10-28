import React from 'react'

const Button = ({color, text, onClick}) => {
    return (
        <button 
          onClick={onClick}
          style={{ backgroundColor: color }}
          className='btn2'
          >
              {text}
          </button>
    )
}

export default Button
