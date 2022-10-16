import React, { useState, useEffect } from 'react'
import './RowPost.css'
import { imageUrl} from '../../Constants/Constants'
import axios from '../../axios'
// import YouTube from 'react-youtube'

function RowPost(props) {

    const [movies, setmovies] = useState([])
    useEffect(() => {
        axios.get(props.url).then(response => {
            console.log(response.data, "qqqqqqqqqqq");
            setmovies(response.data.results)
        }).catch(err => {
            alert('netWork Error')
        })
    }, [])

    // const opts = {
    //     height: '390',
    //     width: '640',
    //     playerVars: {
    //       // https://developers.google.com/youtube/player_parameters
    //       autoplay: 0,
    //     },
    //   };
    return (
        <div className='row'>
            <h2  >{props.title}</h2>
            <div className="posters">
                {movies.map((obj) =>
                    <img className={props.isSmall?'smallposter':'poster'} src={`${imageUrl+obj.backdrop_path}`} alt="poster" />
                )}
            </div>
            {/* <YouTube opts={opts} videoId="2g811Eo7K8U"/> */}
        </div>
    )
}

export default RowPost