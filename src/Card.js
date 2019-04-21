import React from "react";

const Card = ({id, name, email}) => {
  return (
    <div className="bg-light-green dib br4 pa3 ma2 grow tc bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`}
           className="" alt="Robot"/>
      <div className="">
        <h1 className="">{name}</h1>
        <p className="">{email}</p>
      </div>
    </div>
  );
};

export default Card;
