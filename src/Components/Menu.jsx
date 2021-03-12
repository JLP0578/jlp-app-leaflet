import React from 'react';
import {Link} from 'react-router-dom'

const Menu = () => {
    return (
        <div>
            <Link to="/Map">Map</Link><br/><br/>
            <Link to="/List">List</Link><br/><br/>
            <Link to="/User">User</Link>
        </div>
    )
}

export default Menu