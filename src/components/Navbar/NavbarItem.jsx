import React from 'react'
import { Link } from 'react-router-dom'

const NavbarItem = ({ name, link, isCurrent }) => {
    return (
        <li class="w-1/4" style={{ borderBottom: isCurrent === true ? "5px solid blue" : null}} >
            <Link to={link}  className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">{name}</Link>
        </li>
    )
}

export default NavbarItem
