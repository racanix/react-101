import React, { Component } from 'react';
import './App.css';
import Table from './components/Table';
import Form from './components/Form';


export default class App extends Component {

  state = {
    characters: [],
  }

  componentDidMount() {
    const url = "https://jsonplaceholder.typicode.com/users"

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        const users = result.map((user, index) => {
          return {
            name: user.name, job:user.email
          } 
        });

        this.setState({
          characters: users,
        });
      })
  }

  removeCharacter = (index) => {
    const {characters} = this.state;
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })

  }

  handleSubmit = (character) => {
    this.setState({characters: [...this.state.characters, character]})
  }

  render() {    
    const {characters} = this.state;
    return (
      <div className="App">        
        <Form handleSubmit={this.handleSubmit} />
        <hr />
        <Table
          charactersData={characters} 
          removeCharacter={this.removeCharacter}
          handleSubmit={this.handleSubmit} 
        />
      </div>    
    );
  }
}