import React from 'react'
import { useLocation } from 'react-router-dom'
import NavbarItem from './NavbarItem'

const Navbar = () => {

    const GetUrl = () => {
        const location = useLocation();
        const { pathname } = location;
        const splitLocation = pathname.split("/");
        return splitLocation[1];
    }

    return (
        <ul className="text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
            <NavbarItem name="About" link='/about' isCurrent={GetUrl() === 'about'  || GetUrl() === ""} />
            <NavbarItem name="Experiences" link='/experiences' isCurrent={GetUrl() === 'experiences'} />
            <NavbarItem name="Services" link='/services' isCurrent={GetUrl() === 'services'} />
            <NavbarItem name="Testimonials" link='/testimonials' isCurrent={GetUrl() === 'testimonials'} />
            <NavbarItem name="Contact" link='/contact' isCurrent={GetUrl() === 'contact'} />
        </ul>
    )
}

export default Navbar
