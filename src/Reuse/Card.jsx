import React, { Children, useEffect } from "react";

const Card = ({ link, image, name, description, glink, dlink,tech }) => {
  return (
    <div className="text-white border border-1 border-white mt-8 p-4 h-[40%] card mx-2 ">
      <div className="p-4 flex flex-col">
        <h3 className="text-2xl mb-4 font-bold italic">{name}</h3>
        <p className="">{description}</p>
        <div className="w-2/5 sm:w-1/5 md:w-[10rem] flex justify-between m-2">
          <a href={glink} target="_blank">
            <i className="fa-brands fa-github text-[2rem]"></i>
          </a>
          <a href={dlink} target="_blank">
            <i className="fa-solid fa-link text-[2rem]"></i>
          </a>
        </div>
        <div>
        {Children.toArray(tech?.map(tag=>{
          console.log(tag);
      return <span class="text-xs font-semibold inline-block py-1 px-2 rounded-full text-grey-600 bg-black-200 border-white border uppercase last:mr-0 mr-1">
         {tag}
      </span>
    }))}
        
        </div>
      </div>
    </div>
  );
};

export default Card;
