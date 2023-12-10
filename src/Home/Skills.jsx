import React from 'react'
import CypressIcon from '../cypress.svg'
import IconCard from '../Reuse/IconCard'

const Skills = () => {
    const skills = [{
        icon: "fa-brands fa-js",
        name: 'Javascript',
        type: 'icon'
    },
    {
        icon: CypressIcon,
        name: 'Cypress',
        type: 'svg'
    },
]
  return (
    <div className='mt-12'>
{skills.map((skill)=>{
    return <IconCard icon={skill.icon} type={skill.type}/>
})}
        
    </div>
  )
}

export default Skills