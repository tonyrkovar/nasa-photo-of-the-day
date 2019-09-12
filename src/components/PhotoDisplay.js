import React, { useState, useEffect} from 'react';
import axios from 'axios';
import PhotoPull from './PhotoPull';
import styled from 'styled-components'

const Container = styled.div`
display: flex;
flex-wrap: wrap;
`;


export default function PhotoDisplay() {
    const [photoHolder, setPhotoHolder] = useState([])

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=5X7CnHM2wQQVdMqeUkhuTf1UBRnj5oJzV7qRORxH&count=10`)
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
             <Container>
                {photoHolder.map(e =>{ 
                   return <PhotoPull 
                   title={e.title}
                    key={e.date}
                    description={e.explanation}
                    url={e.url}
                    date={e.date}
                    />
               })} 
            </Container>
        </div>
    )
}
