import axios from 'axios' ;

const KEY = 'AIzaSyBAry4aV77tWPhHlgnvtN-KZ-SLp4l_r5U';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
       part: 'snippet',
       maxResults: 5,
       key: KEY
    },
});

