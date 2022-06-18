import React,{useEffect} from 'react'

const Card = ({link,image,name,description,glink,dlink}) => {
    
  return (
<div className="text-white border border-1 border-white mt-8">
<img src={image} alt={name} />
<h1>{name}</h1>
<p>
    {description}
</p>
<div className='w-2/5 flex justify-between m-2'>
<a href={glink} target='_blank'><i className="fa-brands fa-github text-[2rem]"></i></a>
<a href={dlink} target='_blank'><i className="fa-solid fa-link text-[2rem]"></i></a>
</div>
</div>
  )
}

export default Card