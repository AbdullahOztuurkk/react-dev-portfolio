import React from 'react'
import SocialMedia from './SocialMedia/SocialMedia'

const Sidebar = () => {
    return (
        <div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg mx-auto mt-10" src="https://picsum.photos/300" alt="" />
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Abdullah Öztürk</h5>
                </a>
                <p className="mb-3 font-normal text-center text-gray-900">Software Developer</p>
                <p className='mt-5 mb-5 font-normal text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni eius odit quam nemo! Consectetur, tenetur? Voluptates blanditiis quibusdam vitae veritatis odit? Doloribus fuga, itaque neque vel id aliquam laborum? Dolorum.</p>
                <SocialMedia />
            </div>
        </div>
    )
}

export default Sidebar