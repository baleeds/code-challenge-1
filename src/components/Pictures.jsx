import React from 'react';
import Picture from './Picture';

const Pictures = ({ pictures }) => pictures.map(picture => <Picture key={picture.id} picture={picture} />)

export default Pictures;