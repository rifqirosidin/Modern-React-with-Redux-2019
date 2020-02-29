import { useState, useEffect } from 'react';
import axios from 'axios'

const UseResource = resource => {
  const [resources, setResource] = useState([]) 

  // const fetchResources = async () => {
  //    const response = await axios.get(
  //        `https://jsonplaceholder.typicode.com/${resource}`
  //      )
     
  //    setResource(response.data)
  //  }
   useEffect(
     () => {
      (async resource => {
        const response = await axios.get(
          `https://jsonplaceholder.typicode.com/${resource}`
        )
        setResource(response.data)
      })(resource)
      
   }, 
    [resource]
   );

   return resources
}

export default UseResource