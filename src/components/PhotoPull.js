import React from 'react';

const PhotoPull = props => {
    return(
        <div className='nasa-img'>
            <img className='photo' alt={props.title} src={props.url}></img>
            <p>{props.description}</p>
            <p>Date taken: {props.date}</p>
        </div>
    )
}

export default PhotoPull;