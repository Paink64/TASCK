import React from 'react';
import { Link } from 'react-router-dom';

const Navitem = ({ itemLink }) => {
    return (
        <li>
            <Link to={itemLink}>
            </Link>
        </li>
    )
}

export default Navitem
