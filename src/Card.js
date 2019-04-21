import React from "react";

const Card = () => {
  return (
    <div className="br2 ba dark-gray bg-light-blue hover-bg-light-purple b--black-10 mv4 w-100 w-50-m w-25-l mw5 center">
      <img
        src="https://robohash.org/test?200x200"
        className="db w-100 br2 br--top"
        alt="Robot"
      />
      <div className="pa2 ph3-ns pb3-ns">
        <div className="tc w-100 mt1">
          <div className="tc">
            <h1 className="f5 f4-ns mv0">Cat</h1>
          </div>
        </div>
        <p className="tc f6 lh-copy measure mt2 mid-gray">email@email.com</p>
      </div>
    </div>
  );
};

export default Card;
