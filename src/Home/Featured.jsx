import React, { Children } from "react";
import Card from "../Reuse/Card";
import tracktrack from "../images/tracktrak.png";
const Featured = () => {
  const projects = [
    {
      name: "soft.tech",
      description:
        "A full fledged blog application that allows user to view, like, comment, sign up and much more. User can login to their account and change details such as bio, name,password and email. An account will allow the user to favourite articles. It' also allow users to post their own articles ",
      link: "https://discord.com/channels/983698728143691807/985581831774687272",
      glink: "https://github.com/ReallyCoolProjects/DiscBot",
      dlink: "https://distance-mapper.netlify.app/",
      tech: [
        "reactjs",
        "nodejs",
        "taiwlind",
        "redux",
        "typescript",
        "expressjs",
        "prisma",
      ],
    },
    {
      name: "Distance Mapper",
      description:
        "Distance-Mapper is a tool which helps in calculating distance between two locations. A route between the places is shown on the map.",

      link: "https://crypto-web-gold.vercel.app/",
      glink: "https://github.com/cjreads665/distance-mapper",
      dlink: "https://distance-mapper.netlify.app/",
      tech: ["reactjs", "mapbox api", "tailwind", "axios"],
    },
    {
      name: "TrakTrack",
      description:
        "A web application to track cryptocurrency prices and get their current market value. Clicking on the individual coin will fetch its information along with the price trend of the said coin.",

      link: "https://discord.com/channels/983698728143691807/985581831774687272",
      glink: "https://github.com/ReallyCoolProjects/DiscBot",
      dlink: "https://distance-mapper.netlify.app/",
      tech: ["reactjs", "coingecko api", "tailwind", "axios"],
    },
  ];
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
