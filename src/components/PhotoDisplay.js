import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PhotoPull from './PhotoPull';


export default function PhotoDisplay() {
    const [photoHolder, setPhotoHolder] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=5X7CnHM2wQQVdMqeUkhuTf1UBRnj5oJzV7qRORxH&count=6`)
            .then(response => {
                const data = response.data;
                console.log(data)
                setPhotoHolder(data);
            })
            .catch(error => {
                console.log('Borked', error);
            });
    }, []);

    return (
        <div className='photo-container'>
            <div className='description-container'>
               {photoHolder.map(e => {
                   return <PhotoPull 
                    key={e.date}
                    description={e.explanation}
                    url={e.url}
                    date={e.date}
                    />;
               })} 
            </div>
        </div>
    )
}
