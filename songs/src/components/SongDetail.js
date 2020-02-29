import React from 'react';
import {connect} from 'react-redux'

const SongDetail = ({song}) => {

    if(!song) {
     
        return <div>Song Detail</div>
    }
    
    return <div>
                <h3>Detail For</h3>
                <p>Title: {song.title} 
                <br/>                
                Duration: {song.duration}
                </p>
                
                           
            </div>
}

const MapStateToProps = (state) => {

    return {song: state.selectedSong}
}

export default connect(MapStateToProps)(SongDetail)