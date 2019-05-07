import React from 'react';
import TrackRow from './TrackRow.js';
import $ from 'jquery';

class SongRow extends React.Component{
  constructor(props) {
    super(props)
    this.state = {rowsii: ''};
    
  }

  viewSong(){
    
    console.log(this.props.song.strAlbum)
    const urlString = "https://theaudiodb.com/api/v1/json/1/track.php?m=" + this.props.song.idAlbum
  
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        // console.log(searchResults)
        const results = searchResults.track
        var trackRows = []
        results.forEach((track) => {
          // console.log(track.strTrack)
          const trackRow = <TrackRow key={track.idTrack} track ={track}/>
          trackRows.push(trackRow)
        })
        
        this.setState({rowsii: trackRows})

      },
      error: (xhr, status, err) => {
        console.log("i failed")
      }
    })
    
  }


    render() {
        return <table key={this.props.song.id} style={{maxWidth: '800px', margin: '0px auto', display: 'block', }}>
          <tbody>
            <tr>
              <td>
             <img src={this.props.song.strAlbumThumb} alt="cover" style={{maxWidth:'100px', marginRight: '20px'}} />
              </td>
              <td>
                <p><strong>{this.props.song.strAlbum}</strong></p>
                <p>{this.props.song.intYearReleased}</p>
                <input type="button" onClick={this.viewSong.bind(this)} value="View Me" />
                {this.state.rowsii}
              </td>
            </tr>
          </tbody>
        </table>
    }
}

export default SongRow;
