import React from 'react'
import samplelogo from './samplelogo.jpg'

const Logo = () => {
    return (
        <div className="image-container">
            <img src={samplelogo} alt="logo" height="100" width="100"
            ></img>
        </div>
    )
}

export default Logo
