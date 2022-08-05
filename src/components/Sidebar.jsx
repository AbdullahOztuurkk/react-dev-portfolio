import React from 'react'
import Biography from './Biography/Biography'
import SocialMedia from './SocialMedia/SocialMedia'

const Sidebar = () => {
    return (
        <div style={{ height:700}} className="max-w-sm place-content-around bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg mx-auto mt-10" src="https://picsum.photos/300" alt="" />
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Abdullah Öztürk</h5>
                </a>
                <p className="mb-3 font-normal text-center text-gray-900">Software Developer</p>
                <Biography />
                <SocialMedia />
            </div>
        </div>
    )
}

export default Sidebar