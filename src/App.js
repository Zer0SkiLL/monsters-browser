import React, {Component} from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      this.setState({ monsters: users });
    });
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(f => 
        f.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
      <div className="App">
        <h1>Monster Searcher</h1>
        <SearchBox placeholder='search monster...' handleChange={this.handleChange}></SearchBox>
        <p>result for: {this.state.searchField}</p>
        <CardList monsters={filteredMonsters}></CardList>
      </div>

    );
  }
}

export default App;
