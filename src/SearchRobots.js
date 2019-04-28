import React from "react";

const SearchRobots = ({filterRobots}) => {
  return (
    <div className="pa2">
      <input
        onChange={filterRobots}
        type="search" 
        className="mt2 mb3 pa3 ba b--green bg-lightest-blue"
        placeholder="Search Robot" 
      />
    </div>
  );
};

export default SearchRobots;
