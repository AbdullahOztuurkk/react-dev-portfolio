import React from 'react'
import { CgWorkAlt, CgMail } from 'react-icons/cg'
import { ImLocation } from 'react-icons/im'
import BiographyItem from './BiographyItem'

const Biography = () => {
    return (
        <table className='ml-5'>
            <BiographyItem value={"Anadolu Kontrol Mühendislik"} icon={<CgWorkAlt size={20} />} />
            <BiographyItem value={"oabdullahozturk@yandex.com"} icon={<CgMail size={20} />} />
            <BiographyItem value={"Sivas"} icon={<ImLocation size={20} />} />
        </table>
    )
}

export default Biography
