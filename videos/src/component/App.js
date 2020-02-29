import React from 'react'
import SearchBar from './SearchBar'
import VideoList from './VideoList'
import VideoDetail from './VideoDetail'
import youtube from '../apis/youtube'

class App extends React.Component {
    state = { videos: [], SelectedVideo: null}
    
    onTermSubmit = async (term) => {
       const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyBAry4aV77tWPhHlgnvtN-KZ-SLp4l_r5U',
                q: term
                
            }
            
        })
        this.setState({ videos: response.data.items, 
            SelectedVideo: response.data.items[0]
        })

       console.log(response.data)
      
    }

    componentDidMount(){
        this.onTermSubmit('sasuke')

    }

    onVideoSelect = (video) => {
       
        this.setState({ SelectedVideo: video });
        
    } 
    render(){
        return (
            <div className="ui container">
                <SearchBar onSearchSubmit={this.onTermSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.SelectedVideo}/>
                        </div>
                        <div className = "four wide column">
                            <VideoList onVideoSelect={this.onVideoSelect} videos = {this.state.videos}/>
                        </div>
                    </div>
                   
                </div>
      
            </div>
        )
    }
}

export default App