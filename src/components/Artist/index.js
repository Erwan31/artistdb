import React, { useState, useEffect } from 'react';
import axios from 'axios';

const REQ_URL = "http://localhost:3004/artists";

const Artists = (props) => {


    const [artist, setArtist] = useState('');

    useEffect( () => {
        async function fetchData () {
            try{
                const response = await axios.get(`${REQ_URL}/${props.match.params.artistId}`)
                setArtist(response.data);
            }
            catch (error) {
                props.history.push('/home');  
            }
        } 

        console.log('useeffect');
        fetchData();
        console.log('useeffect1');

    }, []);

    return ( 
        <>
            <div className="artist_bio">
                <div className="avatar">
                    <span style={{background:`url('/images/cover/${artist.cover}.jpg') no-repeat`}}>

                    </span>
                </div>
            </div>
        </>
     );
}
 
export default Artists; 