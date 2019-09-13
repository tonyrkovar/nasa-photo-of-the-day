import React from 'react';
import { UncontrolledCarousel } from 'reactstrap';

const CarouselPull = props => {   
        
      return (
      <div>
        <UncontrolledCarousel items={[props]} />;
      </div>
      )
    };

export default CarouselPull