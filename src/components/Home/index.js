import React, { Component } from 'react';
import axios from 'axios';
import Banner from './banner';
import ArtistsList from './artistsList';

const URL_ARTISTS = 'http://localhost:3004/artists';

class Home extends Component {
    state = { 
        artists: [],
     }


    async componentDidMount() {
        const response = await axios.get(URL_ARTISTS);
        console.log(response.data);
        this.setState({ artists: response.data });
    }


    render() { 
        return ( 
            <>
                <Banner/>
                <ArtistsList allArtists={this.state.artists}></ArtistsList>
            </>
         );
    }
}
 
export default Home;
