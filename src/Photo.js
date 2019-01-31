import React from 'react';

const Photo = props => {
  return(
    <div className="picture">
      <div className="picture-details">
        <span className="picture-name">{props.name}</span>
      </div>
      <div className="picture-thumbnail">
        <img src={props.url} alt={props.name} />
      </div>
    </div>
  );
}

export default Photo;