import React from 'react'

const SkillList = ({skills}) => {
    return (
        <nav class="list-none mb-5 ml-10">
            {skills.map((skill, index) =>
                <li className='list-disc'><span class="text-gray-600 hover:text-gray-800">{skill}</span></li>
            )}
        </nav>
    )
}

export default SkillList
