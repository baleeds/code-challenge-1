import React from 'react';

const Picture = ({ picture }) => (
  <div className="pictureTile">
    <div className="details">
      <span className="pictureName">{picture.name}</span>
      <button
        type="button"
        onClick={console.log}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
      </button>
    </div>
    <div className="thumbnail">
      <img src={picture.url} alt={picture.name} />
    </div>
  </div>
);

export default Picture;