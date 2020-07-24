import React, { Component } from 'react';

<<<<<<< HEAD
let serverURL = 'http://localhost:3003'


export default class componentName extends Component {


  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
      apiKey: "",
      searchURL: '',
      bookTitle: '',
      book: null
    }
  }


 

  handleChange(evt) {
    this.setState({
      bookTitle: evt.target.value,
    });
  }

  addBook(event) {
    event.preventDefault();
    fetch(serverURL + '/books/add', {
      method: 'POST',
      body: JSON.stringify({
          title: this.state.books.items[0].volumeInfo.title,
          description: this.state.books.items[0].volumeInfo.description,
          publishedDate: this.state.books.items[0].volumeInfo.publishedDate,
          image: this.state.books.items[0].volumeInfo.imageLinks.thumbnail,
          rating: this.state.books.items[0].volumeInfo.averageRating,
          preview: this.state.books.items[0].volumeInfo.previewLink,
      }),
      headers: {
          'Content-Type': 'application/json',
      },
      }).then(res => {
      return res.json();
      }).then(data => {
      // this.props.addUser(data);

    });
  }


  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      searchURL: this.state.baseURL + this.state.bookTitle + this.state.apiKey
    }, () => {
      fetch(this.state.searchURL).then(response => {
        return response.json();
      }).then(data => {
        console.log(data)
        this.setState({
          books: data,
        });
      }).catch(err => {
        console.log('error:', err);
      });
    });
  }

  render() {
    return (
      <>
          <form onSubmit={ (evt) => this.handleSubmit(evt) }>
          <label htmlFor="bookTitle"> Book Title: </label>
          <input type="text" id="bookTitle"
            value={ this.state.bookTitle}
            onChange={ (evt) => this.handleChange(evt) }/>
          <input type="submit" value="Search"/>
        </form>


        {
          this.state.books
            ? <div>

            <h1>Title: {this.state.books.items[0].volumeInfo.title}</h1>
            <img src={this.state.books.items[0].volumeInfo.imageLinks.thumbnail}/>
            <h3>Description: {this.state.books.items[0].volumeInfo.description}</h3>
            <h3>Published Date: {this.state.books.items[0].volumeInfo.publishedDate}</h3>
            <h3>Average Rating: {this.state.books.items[0].volumeInfo.averageRating}</h3>
            <a href={this.state.books.items[0].volumeInfo.previewLink}>Preview Here</a>
          </div> 
            : ''
=======
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
>>>>>>> RobDev
        }

        <button onClick={(event) => this.addBook(event)}>Add Book to Feed</button>
        </>
    )
  }
}