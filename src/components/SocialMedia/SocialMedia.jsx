import React from 'react'
import {
    BsLinkedin,
    BsGithub,
    BsTwitter,
    BsMedium
} from 'react-icons/bs'
import SocialMediaItem from './SocialMediaItem'


const SocialMedia = () => {
    return (
        <div className="grid h-20 place-items-center grid-cols-4 rounded-md shadow-sm" role="group">
            <SocialMediaItem icon={<BsLinkedin color='blue' />} />
            <SocialMediaItem icon={<BsGithub color='black' />} />
            <SocialMediaItem icon={<BsTwitter color='blue' />} />
            <SocialMediaItem icon={<BsMedium color='black' />} />
        </div>
    )
}

export default SocialMedia
