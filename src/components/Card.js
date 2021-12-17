import React from "react";

const Card = (props) => {
  const { name, email, id } = props;
  return (
    <div className="tc bg-light-green dib br3 pa1 grow bw2 shadow-3 ma3 ">
      <img alt="robot" src={`https://robohash.org/${id}?set=set2`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
