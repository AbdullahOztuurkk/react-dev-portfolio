import React from 'react'

const BiographyItem = ({ value, icon }) => {
    return (
        <tr>
            <td width={20} height={50} className="pr-5">{icon}</td>
            <td>{value}</td>
        </tr>
    )
}

export default BiographyItem
