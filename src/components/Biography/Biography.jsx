import React from 'react'
import { CgWorkAlt, CgMail } from 'react-icons/cg'
import { ImLocation } from 'react-icons/im'
import BiographyItem from './BiographyItem'

const Biography = ({companyName,email,location}) => {
    return (
        <table className='ml-5'>
            <BiographyItem value={companyName} icon={<CgWorkAlt size={20} />} />
            <BiographyItem value={email} icon={<CgMail size={20} />} />
            <BiographyItem value={location} icon={<ImLocation size={20} />} />
        </table>
    )
}

export default Biography
