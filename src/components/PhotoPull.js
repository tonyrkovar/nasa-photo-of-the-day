import React from 'react';
import styled from 'styled-components';

const NasaImg = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    margin: 20px;
`;

const Photo = styled.img`
    height: 65vmin;
    width: 65vmin;
`;

const TextContent = styled.p`
    width: 600px;
  background: gray;
  padding: 10px 80px 40px 80px;
  border-radius: 15%/30%; 
  border: 4px solid white;
`;

export const PhotoPull = props => {
    if(!props.description && !props.url){
        return <h1>Loading... please wait</h1>;
            }
    return(
        <NasaImg>
            <Photo alt={props.title} src={props.url}></Photo>
            <TextContent>
                {props.title}
                <br></br>
                <br></br>
                <br></br>
                
                {props.description}
                <br></br>
                <br></br>
                <br></br>
                Date taken: {props.date}
            </TextContent>
        </NasaImg>
        
    )
}

export default PhotoPull;