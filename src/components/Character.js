import React from "react";

const Character = props => {
  return <li className="character">{props.character.name}</li>;
};

export default Character;
