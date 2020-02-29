import React from 'react'
import ReactDOM from 'react-dom'
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner'


class App extends React.Component {
          
    renderContent(){

        if (this.state.errorMesagge && !this.state.lat){
            console.log(this.state.lat)
            console.log(!this.state.lat) 
            console.log(this.state.errorMesagge)
            console.log(!this.state.errorMesagge)
            return <div>Error: {this.state.errorMesagge}</div>
                                    
       }

       if (!this.state.errorMesagge && this.state.lat){
           return <SeasonDisplay lat={this.state.lat}/>
                                                    
      }               
   
      return <Spinner message="please accept location request" />    
    }
            state = {lat: null, errorMesagge: ''}
            componentDidMount(){
                window.navigator.geolocation.getCurrentPosition(
                    position => {                                              
                      this.setState({ lat: position.coords.latitude })
                      
                    },
                    err => {
                        this.setState({ errorMesagge: err.message })
                    }
                );
            }
            
            render(){
                
                    return (this.renderContent())           
               
            }             
    };

ReactDOM.render(<App />, document.querySelector('#root'))
