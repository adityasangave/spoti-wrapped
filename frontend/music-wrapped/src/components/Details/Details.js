import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';
import './Details.css'

//main development branch

export default function Details() {
  const [trackInfo, setTrackInfo] = useState();
  const [artistInfo, setArtistInfo] = useState();
  const [params, setParams] = useSearchParams();
  const [loading, setLoading] = useState(true);

  const fetchData = async (url) => {
    try {
      const response = await axios.get(url, {
        headers: {
          'access_token': params.get('access_token'),
          'choice': params.get('choice')
        }
      });
      return response.data; 
    } catch (error) {
      console.error('Error:', error.message);
      return null;
    }
  };

  useEffect(() => {
    console.log(params.get('access_token'));

    const fetchDataAndUpdateState = async () => {
      const trackData = await fetchData('info/get-tracks');
      if (trackData) {
        setTrackInfo(trackData);
      }

      const artistData = await fetchData('info/get-artist');
      if (artistData) {
        setArtistInfo(artistData);
      }

      setLoading(false);
    };

    fetchDataAndUpdateState();
  }, []);

  const renderInfo = () => {
    return (
      <div className='container'>
        <div>
          <h1 className='heading tracks'>Your Top Songs</h1>
          {
            loading ? (
              <h1 className='progress-bar'>Loading...</h1>
            ) :
              (
                <div className='trackContainer'>
                  {trackInfo?.items.slice(0, 5).map((item) => (
                    <div key={item.id} className='trackItem card'>
                      <img src={item.album.images[0].url} alt={item.name} className='trackImage' />
                      <div className='trackDetails'>
                        <div className='trackName'>{item.name}</div>
                        <div className='artistName'>{item.artists[0].name}</div>
                      </div>
                    </div>
                  ))}
                </div>
              )
          }
        </div>



        <div className='artistInfo'>
          <h1 className='heading tracks'>Your Top Artists</h1>
          {
            loading ? (
              <h1 className='progress-bar'>Loading...</h1>
            ) :
              (
                <div className='artistContainer'>
                  {artistInfo?.items.slice(0, 5).map((artist) => (
                    <div key={artist.id} className='artistItem'>
                      <img src={artist.images[0].url} alt={artist.name} className='artistImage' />
                      <div className='artistDetails'>
                        <h3 className='artistName1'>{artist.name}</h3>
                        {/* <p className='artistGenres'>Genres: {artist.genres.join(', ')}</p> */}
                      </div>
                    </div>
                  ))}
                </div>
              )
          }
        </div>
      </div>
    );
  }

  const renderError = () => {
    return (
      <div>
        This is Error
      </div>
    );
  }

  return (
    <div>
      {params.get('auth') ? renderInfo() : renderError()} ;
    </div>
  );
}
