import React, { Children } from "react";
import Card from "../Reuse/Card";
import tracktrack from "../images/tracktrak.png";
import { top } from "../data";
const Featured = () => {
  const projects = top
  return (
    <div className="mt-10">
      <h1 className="text-5xl my-8">
        {" "}
        <span className="text-[#08ff17]">featured</span> projects
      </h1>
      <p className="leading-relaxed text-xl p-1">
        some of my projects i'm currently working on/completed.
      </p>
      <div className=" flex flex-col lg:grid items-center lg:ml-8 lg:grid-cols-3 my-4">
        {Children.toArray(
          projects.map((obj) => {
            return (
              <Card
                link={obj.link}
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
  );
};

export default Featured;
