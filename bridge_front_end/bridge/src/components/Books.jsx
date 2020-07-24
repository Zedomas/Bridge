import React, { Component } from 'react';

// server variables setup and clearly laid out for heroku and local use
let serverURL = process.env.serverURL || 'http://localhost:3003'
// set variable to the .env hidden key
const api_book_key = process.env.api_book_key

export default class componentName extends Component {

  constructor(props) {
    super(props)
    // default state for this component set
    this.state = {
      baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
      apiKey: api_book_key,
      searchURL: '',
      bookTitle: '',
      book: null
    }
  }

  // setup function for handling text entry box
  handleChange(evt) {
    this.setState({
      bookTitle: evt.target.value,
    });
  }

  // // find books function
  // findBooks =() => {
  //   fetch(serverURL + '/books').then((res) => {
  //     return res.json()
  //   }).then(data => {
  //     this.setState({books: data})
  //   })
  // }

  // function to add book to the server database
  addBook(event) {
    // prevent default refresh
    event.preventDefault()
    // fetch to the grab info from book books api via the book controller route
    fetch(serverURL + '/books/add', {
      method: 'POST',
      // pulling json data from the api call and assigning it to objects in objects
      body: JSON.stringify({
          title: this.state.books.items[0].volumeInfo.title,
          author: this.state.books.items[0].volumeInfo.authors[0],
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

  // function for the submit button to pull data from the books api
  handleSubmit(evt) {
    // prevent refresh on default
    evt.preventDefault();
    // set the state for searchURL which is a combo of base api / search box / apik key insert from the .env folders
    this.setState({
      searchURL: this.state.baseURL + this.state.bookTitle + this.state.apiKey
    }, () => {
      // fetch response from api to grab json data
      fetch(this.state.searchURL).then(response => {
        return response.json();
      }).then(data => {
        // send data to console log and to the current state object books
        console.log(data)
        this.setState({
          books: data,
        })
        // send erros to console log
      }).catch(err => {
        console.log('error:', err);
      });
    });
  }

  render() {
    return (
      <>
        {/* form for looking up books from the google books api */}
        <form onSubmit={ (evt) => this.handleSubmit(evt) }>
          <label htmlFor="bookTitle"> Book Title: </label>
          <input type="text" id="bookTitle"
            value={ this.state.bookTitle}
            onChange={ (evt) => this.handleChange(evt) }/>
          <input type="submit" value="Search"/>
        </form>
        {/* setting if statemetn for if the state is blank then it'll show the pull from the api and if not it'll show nothing */}
        {
          this.state.books
            ? <div>

            <h1>Title: {this.state.books.items[0].volumeInfo.title}</h1>
            <img className='bookPic' src={this.state.books.items[0].volumeInfo.imageLinks.thumbnail} alt={this.state.books.items[0].volumeInfo.title}/>
            <h2>Author: {this.state.books.items[0].volumeInfo.authors[0]}</h2>
            <h3>Description: {this.state.books.items[0].volumeInfo.description}</h3>
            <h3>Published Date: {this.state.books.items[0].volumeInfo.publishedDate}</h3>
            <h3>Average Rating: {this.state.books.items[0].volumeInfo.averageRating}</h3>
            <a href={this.state.books.items[0].volumeInfo.previewLink}>Preview Here</a>
            <button onClick={(event) => this.addBook(event)}>Add Book to Feed</button>
          </div> 
            : ''
        }

        </>
    )
  }
}