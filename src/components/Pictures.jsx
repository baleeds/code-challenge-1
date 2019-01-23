import React, { Fragment } from 'react';
import Picture from './Picture';

const Pictures = ({ pictures }) => (
  <Fragment>
    <h1>Pictures</h1>
    <div className="pictures-container">
      {pictures.map(picture => <Picture key={picture.id} picture={picture} />)}
    </div>
  </Fragment>
);

export default Pictures;