import React from 'react';
import { connect } from 'react-redux'
import { fetchStream, editStream } from '../../actions'
import StreamForm from './StreamForm';
import _ from 'lodash'
class StreamEdit extends React.Component {
    
    componentDidMount() {        
        this.props.fetchStream(this.props.match.params.id)
        console.log(this.props.stream)
    }

    onSubmit = (FormData) => {
        
        this.props.editStream(this.props.match.params.id, FormData)
    }
    
    render() {
        if(!this.props.stream){
            return <div>Loading...</div>
        }
        return (
            <div>
                <StreamForm initialValues={ _.pick(this.props.stream, 'title', 'description')} onSubmit={this.onSubmit} />
            </div>
        )
    }

};

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.match.params.id)
    return {
        stream: state.streams[ownProps.match.params.id]
        
    }
}

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);