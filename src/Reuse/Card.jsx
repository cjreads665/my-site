import React,{useEffect} from 'react'

const Card = ({link,image,name,description,glink,dlink}) => {
    
  return (
<div className="text-white border border-1 border-white mt-8 p-4 h-[40%] card mx-2">
<img src={image} alt={name} className='mb-2' />
<h3 className='text-2xl mb-4 font-bold italic'>{name}</h3>
<p>
    {description}
</p>
<div className='w-2/5 sm:w-1/5 flex justify-between m-2'>
<a href={glink} target='_blank'><i className="fa-brands fa-github text-[2rem]"></i></a>
<a href={dlink} target='_blank'><i className="fa-solid fa-link text-[2rem]"></i></a>
</div>
</div>
  )
}

export default Card