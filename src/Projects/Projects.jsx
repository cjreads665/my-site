import React from 'react'
import { Children } from 'react'
import { allProjects } from '../data'
import Card from '../Reuse/Card'
const Projects = () => {
    let projects = allProjects
  return (
    <section>
    <div className="mt-10">
      <h1 className="text-5xl my-8">
        {" "}
        my <span className="text-[#08ff17]">projects</span> 
      </h1>
      <p className="leading-relaxed text-xl p-1">
        
      </p>
      <div className=" flex flex-col lg:grid items-center lg:ml-8 lg:grid-cols-3 my-4">
        {Children.toArray(
          projects.map((obj) => {
            return (
              <Card 
                image={obj.image}
                name={obj.name}
                description={obj.description}
                glink={obj.glink}
                dlink={obj.dlink}
                tech={obj.tech}
              />
            );
          })
        )}
      </div>
    </div>
    </section>
  )
}

export default Projects