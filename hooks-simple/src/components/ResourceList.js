import React from 'react';
import UseResource from './UseResource'


const ResourceList = ({ resource }) => {
    const resources = UseResource(resource)
      return (
            <div>
              <ul>
              {resources.map(result => (
                  <li key={result.id}>{result.title}</li>
                ))}
              </ul>
               
            </div>
        );
  
}

export default ResourceList;