import React from 'react';

class TrackRow extends React.Component{
    render() {
        return <p key={this.props.track.idTrack} style={{width: '100%',padding: '5px', color: '#fff', background: '#000'}}>
        {this.props.track.strTrack} | 
        </p>
          
    }
}

export default TrackRow;