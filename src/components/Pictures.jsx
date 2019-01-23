import React, { Component } from 'react';

const DATABASE_PICTURES = [{
  id: 1,
  name: 'Meat',
  url: '/img/1.jpg',
}, {
  id: 2,
  name: 'Vegetables',
  url: '/img/2.jpg',
}, {
  id: 3,
  name: 'Bread',
  url: '/img/3.jpg',
}, {
  id: 4,
  name: 'Sweets',
  url: '/img/4.jpg',
}, {
  id: 5,
  name: 'Fruit',
  url: '/img/5.jpg',
}]

class Pictures extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentPictures: [],
    }
  }
  render() { 
    return null;
  }
}


export default Pictures;

