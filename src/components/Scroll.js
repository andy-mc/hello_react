import React from "react";

const Scroll = ({children}) => {
  return (
    <div style={{ overflowY: 'scroll', border: '5px solid #9beccf', height: '475px' }}>
      { children }
    </div>
  );
};

export default Scroll;
