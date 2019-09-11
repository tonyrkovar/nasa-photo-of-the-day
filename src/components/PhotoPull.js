import React from 'react';

const PhotoPull = props => {
    if(!props.description && !props.url){
        return <h1>Loading... please wait</h1>;
            }
    return(
        <div className='nasa-img'>
            <img className='photo' alt={props.title} src={props.url}></img>
            <p>
                {props.title}
                <br></br>
                <br></br>
                <br></br>
                
                {props.description}
                <br></br>
                <br></br>
                <br></br>
                Date taken: {props.date}
            </p>
        </div>
    )
}

export default PhotoPull;