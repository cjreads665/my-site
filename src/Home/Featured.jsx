import React,{Children}  from 'react'
import Card from '../Reuse/Card'
const Featured = () => {
  const projects = [
    {
      name: 'TrackTrak',
      description : 'A web app to track your portfolio with Sign Up feature',
      image:'blob:https://vercel.com/4ee139c3-ed25-4892-95c0-42788d1e5d0b',
      link: "https://crypto-web-gold.vercel.app/"
    }
  ]
  return (
    <div className=''>
      <h1 className='text-5xl my-8'>featured projects</h1>
      <p className='leading-relaxed text-xl p-1'>
        some of my projects i'm currently working on/completed.
</p>
<div className='mt-4'>
{
      Children.toArray(projects.map(obj=>{
        return <Card link={obj.link} image={obj.image} name={obj.name} description={obj.description} />
      }))
    }
</div>
 
    </div>
  )
}

export default Featured