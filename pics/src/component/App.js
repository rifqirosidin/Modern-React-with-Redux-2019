import React from 'react'
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar'
import ImageList from './ImageList'
class App extends React.Component {

    state = {
        image: []
    }
   onSearchSubmit = async (term) =>{
       const response = await unsplash.get('/search/photos', {
            
            params: {query: term}
        })

        this.setState({image: response.data.results})
        
    }
    render(){
        return (
            <div className="ui container" style={{ marginTop: '30px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList image={this.state.image}/>
            </div>
        )
    }
    
}

export default App