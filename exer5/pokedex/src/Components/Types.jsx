import React from 'react';
import './Types.css';

function Types(json) {
    const types = json.types.map(type => {
        return <p className={type.type.name}>{type.type.name}</p>;
    });

    return (
        <div>
            <h2>Types:</h2>
            <div className='flex flex-row flex-wrap'>
                {types}
             </div>
        </div>
    );
}

export default Types;