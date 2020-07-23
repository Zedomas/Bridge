import React, { Component } from 'react';

export default class componentName extends Component {
    state = {
        baseURL: '',
        songTitle: '',
        searchURL: '',
    }
    
    handleChange(evt) {
        this.setState({
        songTitle: evt.target.value,
        });
    }
    
    handleSubmit(evt) {
        evt.preventDefault();
        this.setState({
        searchURL: this.state.baseURL + this.state.songTitle,
        }, () => {
            fetch(this.state.searchURL).then(response => {
            return response.json();
        }).then(data => {
            this.setState({
                song: data,
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
                <label htmlFor="songTitle">Music Title: </label>
                <input type="text" id="songTitle"
                value={ this.state.songTitle}
                onChange={ (evt) => this.handleChange(evt) }/>
                <input type="submit" value="Search"/>
            </form>
            {
            this.state.movie
                ? <div>
                </div> 
                : ''
            }
        </>
        )
        }
    }