import React from 'react'

const NavbarItem = ({ name, link, isCurrent }) => {
    return (
        <li class="w-1/4" style={{ borderBottom: isCurrent === true ? "5px solid blue" : null}}>
            <a href={link}  className="inline-block p-4 w-full bg-white hover:text-gray-700 hover:bg-gray-50 focus:ring-4 focus:ring-blue-300 focus:outline-none dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700">{name}</a>
        </li>
    )
}

export default NavbarItem
