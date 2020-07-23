import React, { Component } from 'react';

export default class componentName extends Component {
  state = {
    baseURL: 'http://www.omdbapi.com/?apikey=b764ea59&t=',
    movieTitle: '',
    searchURL: '',
  }

  handleChange(evt) {
    this.setState({
      movieTitle: evt.target.value,
    });
  }

  handleSubmit(evt) {
    evt.preventDefault();
    this.setState({
      searchURL: this.state.baseURL + this.state.movieTitle,
    }, () => {
      fetch(this.state.searchURL).then(response => {
        return response.json();
      }).then(data => {
        this.setState({
          movie: data,
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
          <label htmlFor="movieTitle"> Movie Title: </label>
          <input type="text" id="movieTitle"
            value={ this.state.movieTitle}
            onChange={ (evt) => this.handleChange(evt) }/>
          <input type="submit" value="Add Movie"/>
        </form>
        {
          this.state.movie
            ? <div className='movie'>

          <h1>Title: {this.state.movie.Title}</h1>
            <h2>Year: {this.state.movie.Year}</h2>
            <img className='moviePic' src={this.state.movie.Poster} alt={this.state.movie.Title}/>
            <h3>Genre: {this.state.movie.Genre}</h3>
            <h4>Plot: {this.state.movie.Plot}</h4> 
            <h5>posted by: {this.props.username}</h5>
            <button>Like</button>
            Comment: <textarea></textarea>
            </div> 
            : ''
        }
      </>
    )
  }
}