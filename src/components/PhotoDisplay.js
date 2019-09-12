import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PhotoPull from './PhotoPull';


export default function PhotoDisplay() {
    const [photoHolder, setPhotoHolder] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=5X7CnHM2wQQVdMqeUkhuTf1UBRnj5oJzV7qRORxH`)
            .then(response => {
                const data = response.data;
                console.log(data)
                setPhotoHolder(data);
            })
            .catch(error => {
                console.log('Can not load', error);
            });
    }, []);

    return (
        <div className='photo-container'>
            <div className='description-container'>
                   return <PhotoPull 
                   title={photoHolder.title}
                    key={photoHolder.date}
                    description={photoHolder.explanation}
                    url={photoHolder.url}
                    date={photoHolder.date}
                    />;
               )} 
            </div>
        </div>
    )
}
