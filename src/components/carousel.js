import React, { useEffect, useState } from 'react';
import { UncontrolledCarousel } from 'reactstrap';
import axios from 'axios';
import CarouselPull from './carouselPull'




function CarouselDisplay() {
    const [photoHolder, setPhotoHolder] = useState([]);

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=5X7CnHM2wQQVdMqeUkhuTf1UBRnj5oJzV7qRORxH&count=10`)
            .then(response => {
                const data = response.data;
                console.log('This is the Carousel data:', data)
                setPhotoHolder(data);
            })
            .catch(error => {
                console.log('Can not load', error);
            });
    }, []);


    return (
        <div>
            {photoHolder.map((e, i) =>{ 
                   return <CarouselPull 
                   altText={e.date}
                    key={i}
                    src={e.url}
                    caption={e.explanation}
                    header={e.title}
                    />
               })}
        </div>
    )
}

export default CarouselDisplay;
