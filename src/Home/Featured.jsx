import React,{Children}  from 'react'
import Card from '../Reuse/Card'
const Featured = () => {
  const projects = [
    {
      name: 'Distance Mapper',
      description : 'Distance-Mapper is a tool which helps in calculating distance between two locations. A route between the places is shown on the map.',
      image:'https://user-images.githubusercontent.com/73706017/172362970-3f5d1549-81f1-4eaf-8b88-4345246362d0.png',
      link: "https://crypto-web-gold.vercel.app/",
      glink:'https://github.com/cjreads665/distance-mapper',
      dlink:'https://distance-mapper.netlify.app/'
    },
    {
      name: 'CodingPal',
      description : 'A Discord Bot to fetch crypto prices, weather, news and random kanye tweets',
      image:'https://media.discordapp.net/attachments/985581831774687272/987700596779921408/unknown.png?width=897&height=492',
      link: "https://discord.com/channels/983698728143691807/985581831774687272",
      glink:'https://github.com/ReallyCoolProjects/DiscBot',
      dlink:'https://distance-mapper.netlify.app/'
    },

  ]
  return (
    <div className='mt-10'>
      <h1 className='text-5xl my-8'> <span className="text-[#08ff17]">featured</span> projects</h1>
      <p className='leading-relaxed text-xl p-1'>
        some of my projects i'm currently working on/completed.
</p>
<div className='mt-4'>
{
      Children.toArray(projects.map(obj=>{
        return <Card link={obj.link} image={obj.image} name={obj.name} description={obj.description} glink={obj.glink} dlink={obj.dlink} />
      }))
    }
</div>
 
    </div>
  )
}

export default Featured