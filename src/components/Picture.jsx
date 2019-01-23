import React from 'react';
import deletePicture from '../mutations/deletePicture';

const Picture = ({ picture }) => (
  <div className="picture">
    <div className="details">
      <span className="picture-name">{picture.name}</span>
      <button
        type="button"
        onClick={() => deletePicture(picture.id)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg>
      </button>
    </div>
    <div className="thumbnail" style={{ backgroundImage: `url('${picture.url}')`}} />
  </div>
);

export default Picture;