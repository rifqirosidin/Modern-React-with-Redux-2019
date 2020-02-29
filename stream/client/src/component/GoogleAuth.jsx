import React, { Component } from 'react';
import { connect } from 'react-redux'
import { signIn, signOut } from '../actions'

class GoogleAuth extends Component {
    state = {
        isSignedIn: null
    }
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                client_id: '623610386715-8nikovk1dpsam67mkqph57fot0bq8i8f.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance()
                //no redux
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() })

                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
                
            })
        })
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get())
        } else {
            this.props.signOut(this.auth.currentUser.get())
        }
    }

    onSignInClick = () => {
        this.auth.signIn()
    }

    onSignOutClick = () => {
        this.auth.signOut()
    }

    renderAuthButton(){
        if(this.props.isSignedIn === null){
            return null
        } else if (this.props.isSignedIn){
            return (
                <button onClick={ this.onSignOutClick } className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            )
        } else {
            return (
                <button onClick={ this.onSignInClick } className="ui red google button">
                    <i className="google icon" />
                    Sign In With Google
                </button>
            )
        }
    }

    render() {
        return (
            <div>
               { this.renderAuthButton() }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    // console.log(state)
    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, { signIn, signOut})(GoogleAuth);