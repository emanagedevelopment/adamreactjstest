import React, { Component} from 'react';
import './App.css';
import SongRow from './SongRow.js';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {rowsii: ''};
    this.state = {rows: ''};
    
    this.state = {value: ''};
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.performSearch("bassnectar");
  }

  performSearch(searchTerm){
    const urlString = "https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=" + searchTerm
    // const urlString = "https://www.theaudiodb.com/api/v1/json/1/discography.php?s=bassnectar"
    // const urlString = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=bassnectar"

    $.ajax({
      url: urlString,
      success: (searchResults) => {
        
        // console.log(searchResults)

        const results = searchResults.album
        var songRows = []
        results.forEach((album) => {
          // console.log(album.strAlbum)
          const songRow = <SongRow key={album.idAlbum} song ={album}/>
          songRows.push(songRow)
        })

        this.setState({rows: songRows})
      },
      error: (xhr, status, err) => {
        console.log("i failed")
      }
    })
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const searchTerm = this.state.value
    this.performSearch(searchTerm)
    event.preventDefault();
  }

  


  render() {
    return (
      <div className="App">
        <section className="s-hero">
        <div className="cSearch">
          <h1>Search</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
        </div>
          {this.state.rows}
        </section>  
        
      </div>
    );
  }
}
export default App;
