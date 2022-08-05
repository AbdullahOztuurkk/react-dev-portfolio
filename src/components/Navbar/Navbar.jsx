import React from 'react'
import { useLocation } from 'react-router-dom'
import NavbarItem from './NavbarItem'

const Navbar = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");
    console.log(splitLocation);


    return (

        <React.Fragment>
            <ul className="text-sm font-medium text-center text-gray-500 rounded-lg divide-x divide-gray-200 shadow sm:flex dark:divide-gray-700 dark:text-gray-400">
                <NavbarItem name="Experiences" link='/experiences' isCurrent={splitLocation[1] === 'experiences' } />
                <NavbarItem name="Services" link='/services' isCurrent={splitLocation[1] === 'services'} />
                <NavbarItem name="Testimonials" link='/testimonials' isCurrent={splitLocation[1] === 'testimonials'} />
                <NavbarItem name="Contact" link='/contact' isCurrent={splitLocation[1] === 'contact'} />
            </ul>
        </React.Fragment>
    )
}

export default Navbar
