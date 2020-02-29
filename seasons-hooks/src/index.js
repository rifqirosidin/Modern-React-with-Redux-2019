import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'
import UseLocation from './UseLocation';


const App = () => {
    const [lat, errorMesagge] = UseLocation();

    let content;
    if(errorMesagge){
        content = <div>Error: {errorMesagge}</div>
    } else if(lat){
        content = <SeasonDisplay lat={lat}/>
    } else {
        content = <Spinner message="please accept location request" />   
    }

    return <div className = "border red">{content}</div>
 
}


ReactDOM.render(<App />, document.querySelector('#root'))
