import {useState, useEffect} from 'react'

export default () => {

    const [lat, setLat] = useState(null)
    const [errorMesagge, setErrorMessage] = useState('')

    useEffect(()=> {
        window.navigator.geolocation.getCurrentPosition(
            position => {                                              
            setLat(position.coords.latitude)
            
            },
            err => {
                setErrorMessage(err.message)
            }
        );
    }, [])

    return [lat, errorMesagge]

}