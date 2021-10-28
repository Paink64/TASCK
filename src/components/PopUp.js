import React from 'react'

const PopUp = ({ toggle }) => {
    return (
        <div>
            <div className='modal_content'>
                <span className='close' onClick={toggle}>&times;</span>
                <p>This is a test popup.</p>
            </div>
        </div>
    )
}

export default PopUp
