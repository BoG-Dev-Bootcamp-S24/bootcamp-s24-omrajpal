
import React from 'react';

function ImageName(json) {
    const name = json.name;
    const image = json.sprites.front_default;

    return (
        <div>
            <img src={image} alt={name} className='border'/>
            <p className='container bg-gray-400 rounded-md'>{name}</p>
        </div>
    );
}

export default ImageName;