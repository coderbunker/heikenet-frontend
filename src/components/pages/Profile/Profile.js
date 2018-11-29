/* global gapi */
import React, { Component } from 'react';
import {Image} from 'react-bootstrap';
import './Profile.scss';

class Profile extends Component {
    constructor() {
        super();

        this.state = {
            email: null,
            profile:  null,
            profiles: null
        }
    }

    
    loadProfiles(response) {
        var jsonDoc = JSON.parse(response.result.response.result)
        this.setState({profiles: jsonDoc});
        var profile = jsonDoc.find((p)=> {
            if(p.email === this.state.email) {
                return true;
            }
            return false;
        })
        this.setState({profile: profile});
    }

    getProfiles() {
        gapi.client.script.scripts.run({
            'scriptId':  '16BTJrEFzzQoVRGdyAZzu0h1cf5bT6FxFb9wXwHJ-1nbFiTjLeIYek_hw', 
            resource: {
                function: 'getJsonDoc'
            }
        }).then(this.loadProfiles.bind(this));
    }
    
    componentDidMount() {
        this.setState({email: gapi.auth2.getAuthInstance().currentUser.get().profileObj.email})
        gapi.client
            .load('https://www.googleapis.com/discovery/v1/apis/script/v1/rest')
            .then(this.getProfiles.bind(this));
    }

    render() {
        return (
            <div className="Background">
                <div className="App__Aside">
                <h1><Image src="assets/logo2.svg" />HeikeNet</h1>
                </div>
                <pre>
                    {this.state.profile && JSON.stringify(this.state.profile, 0, 4)}
                    {!this.state.profile && JSON.stringify(this.state.profiles, 0, 4)}
                </pre>
            </div>
            
        );
    }
}

export default Profile;