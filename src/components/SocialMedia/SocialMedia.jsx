import React from 'react'
import {
    BsLinkedin,
    BsGithub,
    BsTwitter,
    BsMedium
} from 'react-icons/bs'
import SocialMediaItem from './SocialMediaItem'


const SocialMedia = ({ value }) => {
    return (
        <div className="grid h-20 place-items-center grid-cols-4 rounded-md shadow-sm" role="group">
            <SocialMediaItem icon={<BsLinkedin color='blue' />} link={value.linkedin} />
            <SocialMediaItem icon={<BsGithub color='black' />} link={value.github} />
            <SocialMediaItem icon={<BsTwitter color='blue' />} link={value.twitter}/>
            <SocialMediaItem icon={<BsMedium color='black' />} link={value.medium}/>
        </div>
    )
}

export default SocialMedia
