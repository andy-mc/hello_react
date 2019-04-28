import React from "react";

const SearchRobots = ({filterRobots}) => {
  return (
    <div className="tc bg-green ma4">
      <input
        onChange={filterRobots}
        type="text" 
        className="bg-light-gray br4 pa2 w-50"
        placeholder="Search Robot" 
      />
    </div>
  );
};

export default SearchRobots;
