import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [
    {
        src: require('./../image/image1.jpeg'),
        altText: 'Slide 1',
      },
      {
        src: require('./../image/image2.jpeg'),        
        altText: 'Slide 2',
      },
      {
        src: require('./../image/image3.jpeg'),        
        altText: 'Slide 3',
      },
      {
        src: require('./../image/image4.jpeg'),        
        altText: 'Slide 4',
      }
    
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;