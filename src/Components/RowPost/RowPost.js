import React, { useState, useEffect } from 'react'
import './RowPost.css'
import { API_KEY,imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
import YouTube from 'react-youtube'

function RowPost(props) {

    const [movies, setmovies] = useState([])
  const [urlId, seturlId] = useState('')
    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data, "qqqqqqqqqqq");
            setmovies(response.data.results)
        }).catch(err => {
            alert('netWork Error')
        })
    }, [])

    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const handleMovie=(id)=>{

axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then(response=>{
    if(response.data.results.length!=0){
        seturlId(response.data.results[0])
    }
    console.log("ArrayEmpty"); })
      }
    return (
        <div className='row'>
            <h2  >{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img onClick={()=>handleMovie(obj.id)} className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            </div>
            {urlId && <YouTube opts={opts} videoId={urlId.key}/>}
        </div>
    )
}

export default RowPost