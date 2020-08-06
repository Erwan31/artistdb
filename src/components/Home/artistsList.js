import React from 'react';
import { Link } from 'react-router-dom';
import Artists from './artistsList';

const ArtistsList = ({allArtists}) => {

    const list = (values) => (
        values ? values.map( item => (
            <Link
                key={item.id}
                to={`/artists/${item.id}`}
                className="artist_item"
                style={{
                    background: `url('/images/covers/${item.cover}.jpg')` 
                }}>
                <div>{item.name}</div> 
            </Link>
        )) 
        : null
    );

    return ( 
        <div className="artists_list">
            <h4>Browse the Artists</h4>
            <div className="artists_container">
                {list(allArtists)}
            </div>

        </div>
     );
}
 
export default ArtistsList;