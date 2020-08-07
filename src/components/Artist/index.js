import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AlbumList from './album_list';

const REQ_URL = "http://localhost:3004/artists";
let nextArtist = '';

const Artists = (props) => {


    const [artist, setArtist] = useState('');

    useEffect( () => {
        fetchData();

        async function fetchData () {
            try{
                const response = await axios.get(`${REQ_URL}/${props.match.params.artistId}`);
                setArtist(response.data);
            }
            catch (error) {
                props.history.push('/home');  
            }
        }  

    }, [props]);

    nextArtist = `/artists/${artist.id+1}`;

    return ( 
        <>
            <div className="artist_bio">
                <div className="avatar" style={{background:`url('/images/cover/${artist.cover}.jpg') no-repeat`}}></div>
            </div>
            <div className="bio">
                <h3>{artist.name}</h3>
                <div className="bio_text">{artist.bio}</div>
            </div>

            <AlbumList albumList={artist.albums}/>

            <Link className="next_artist" to={nextArtist}>Next Artist...</Link>

        </>
     );
}
 
export default Artists; 