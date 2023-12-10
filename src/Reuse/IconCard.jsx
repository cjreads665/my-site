import React from 'react'

const IconCard = ({icon,text,type}) => {
  return (<div>
    {
        type=='svg'? <img src={icon} alt="cypress" className='w-20' /> 
        :
      <i class={`${icon} text-5xl hover:bg-white hover:text-black rounded-md border-2 p-2 mr-2`}></i>
    }
      {/* <img src={icon} alt="cypress" className='' />  */}
  </div>
  )
}

export default IconCard