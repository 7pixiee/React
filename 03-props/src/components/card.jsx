import React from "react";

const Card = (props) => {   // {props} and (props) are different coz (props) is and object and {props} can hold single value. 

  return (
    <div className="card">
      <img
        src={props.img}
      />
      <h1>{props.user}</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <button>View</button>
    </div>
  );
};

export default Card;
