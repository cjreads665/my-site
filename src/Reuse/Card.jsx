import React,{useEffect} from 'react'

const Card = ({link,image,name,description}) => {
    
  return (
<div className="text-white border border-1 border-white">
<img src={image} alt={name} />
<h1>{name}</h1>
<p>
    {description}
</p>
</div>
  )
}

export default Card