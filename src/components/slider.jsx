import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const items = [

    {
        src: require('./../assets/image1.jpeg'),
        altText: 'Slide 1',
      },
      {
        src: require('./../assets/image2.jpeg'),        
        altText: 'Slide 2',
      },
      {
        src: require('./../assets/image3.jpeg'),        
        altText: 'Slide 3',
      },
      {
        src: require('./../assets/image4.jpeg'),        
        altText: 'Slide 4',
      }
    
];

const Slider = () => <UncontrolledCarousel items={items} />;

export default Slider;