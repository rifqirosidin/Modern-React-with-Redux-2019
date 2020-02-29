import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('shown of comment box', () => {
    const div = React.createElement('div');

    ReactDOM.render(<App/>, div)

    expect(div.innnerHTML).toContain('Comment Box');
    ReactDOM.unmountComponentAtNode(div);
});