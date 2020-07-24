import React, { Component } from 'react';

let serverURL = process.env.serverURL || 'http://localhost:3003'
const api_book_key = process.env.api_book_key

export default class componentName extends Component {


  constructor(props) {
    super(props)
    this.state = {
      baseURL: 'https://www.googleapis.com/books/v1/volumes?q=',
      apiKey: api_book_key,
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