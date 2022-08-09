import React, { useContext } from 'react'
import ConfigContext from '../context/ConfigContext'
import Biography from './Biography/Biography'
import SocialMedia from './SocialMedia/SocialMedia'

const Sidebar = () => {
    const context = useContext(ConfigContext)

    return (
        <div style={{ height: 700 }} className="max-w-sm place-content-around bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg mx-auto mt-10" width={300} height={300} src={ context.about.avatar === "" ? "https://picsum.photos/300" : context.about.avatar} alt="" />
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{context.about.name}</h5>
                </a>
                <p className="mb-3 font-normal text-center text-gray-900">{context.about.title}</p>
                <Biography email={context.socialMedia.email} companyName={context.about.companyName} location={context.about.location} />
                <SocialMedia value={context.socialMedia} />
            </div>
        </div>
    )
}

export default Sidebar