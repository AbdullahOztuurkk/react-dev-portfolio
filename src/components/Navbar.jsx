import React from 'react'
import NavbarItem from './Navbar/NavbarItem'

const Navbar = () => {
    return (

        <React.Fragment>
            <ul class="text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <NavbarItem name="Experiences" link='/' isCurrent={true} />
                <NavbarItem name="Services" link='/' />
                <NavbarItem name="Testimonials" link='/' />
                <NavbarItem name="Contact" link='/' />
            </ul>
        </React.Fragment>
    )
}

export default Navbar
