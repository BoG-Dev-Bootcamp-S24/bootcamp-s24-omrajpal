import React from 'react';

function StatsPanel(json, stats) {
    
    if (stats) {
        return (
            <div className='flex'>
                <h2 className='justify-center py-3'>Info</h2>
                <ul className='container bg-gray-200 justify-center'>
                    <li>Height: {json.height}m</li>
                    <li>Weight: {json.weight}kg</li>
                    <li>HP: {json.stats[0].base_stat}</li>
                    <li>Attack: {json.stats[1].base_stat}</li>
                    <li>Defense: {json.stats[2].base_stat}</li>
                    <li>Special Attack: {json.stats[3].base_stat}</li>
                    <li>Special Defense: {json.stats[4].base_stat}</li>
                    <li>Speed: {json.stats[5].base_stat}</li>
                </ul>
            </div>
        );
    } else {
        return (
            <div className='flex'>
                <h2 className='justify-center py-3'>Moves</h2>
                <ul className='container bg-gray-200 justify-center'>
                    {json.moves.map((move, i) => {
                        return <li key={i}>{move.move.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default StatsPanel;