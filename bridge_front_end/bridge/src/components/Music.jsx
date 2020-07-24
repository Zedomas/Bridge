import React, { Component } from 'react';

let rapidapihost = "x-rapidapi-host"
let rapidapikey = "x-rapidapi-key"
let baseURL = 'http://localhost:3003'

export default class componentName extends Component {
    state = {
        songTitle: '',
        songs: [],
        results: null
    }
    
    handleChange(evt) {
        this.setState({
        songTitle: evt.target.value,
        });
    }

    addSong(event, song) {
        event.preventDefault();
        fetch(baseURL + '/music/add', {
          method: 'POST',
          body: JSON.stringify({
              artist: song.artist.name,
              track: song.title,
              preview: song.preview,
              albumCover: song.album.cover,
              album: song.album.title,
          }),
          headers: {
              'Content-Type': 'application/json',
          },
          }).then(res => {
          return res.json();
          }).then(data => {
            this.setState({
            });
            this.updateSongs(data)
    
        });
      }


    updateSongs = (newSong) => {
    const copySongs = [...this.state.songs];
    copySongs.push(newSong);
    this.setState({
        songs: copySongs,
    });
    }

    clear(evt) {
        evt.preventDefault();
        this.setState({
            results: null,
            songTitle: ""
        })
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + this.state.songTitle, {
        method: "GET",
        headers: {
            [rapidapihost]: "deezerdevs-deezer.p.rapidapi.com",
            [rapidapikey]: "d65ab70a36mshc05a91c79bb1e24p1b72d0jsna55f54e3789c"
        }
        })
        .then(res => {
            return res.json();
            }).then(data => {
            this.setState({
                results: data.data
            })         
        }).catch(err => {
            console.log(err);
        });
    }
    
    render() {
        return (
        <>
            <form onSubmit={ (evt) => this.handleSubmit(evt) }>
                <label htmlFor="songTitle">Music Title: </label>
                <input type="text" id="songTitle"
                value={ this.state.songTitle}
                onChange={ (evt) => this.handleChange(evt) }/>
                <input type="submit" value="Search"/>
            </form>
            {
                this.state.results ? 
                <div>
                <ul>
                {
                    this.state.results.map(song => {
                        return (
                        <li>{song.title} by {song.artist.name} 
                        <a href="#" onClick={(event) => this.addSong(event, song)}> Add Song</a> </li>
                        )
                    })
                }   
                </ul>
                <button onClick={(event) => this.clear(event)}>Clear Results</button>
                </div> 
                : ''
            }

            <div>
            {
                this.state.songs.map(song => {
                return (
                    <div>
                    <h2>{song.artist}</h2>
                    <img src={song.albumCover} />
                    <h3>Song: {song.track}</h3>
                    <h3>Album: {song.album}</h3>
                    <h4>Preview: {song.preview}</h4> 
                    </div>
                )
                })
            }
            </div>

        </>
        )
        }
    }