import React from "react";

const Card = ({id, name, email}) => {
  return (
    <div className="bg-light-green dib br4 pa3 ma2 grow tc bw2
     shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="Robot"/>
      <div>
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
