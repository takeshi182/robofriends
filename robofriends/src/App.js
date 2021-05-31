import React, { Component } from 'react';
import CardList from './CardList';
import {robots} from './robots';
import SearchBox from './SearchBox'

class App extends Component {
    constructor() {
        super() // when extending a class, super() must always come before this.state
        //state lives in the parent component
        this.state = {
            robots: robots,
            searchfield: ""
        } //state is the thing that will affect our input (robots in this case) based on sth else (searchfield in this case)
    }

    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value})
    }

    render() {
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return ( 
            <div className="tc">
                <h1>Robofriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots={filteredRobots}/> 
            </div>
        )
    }
}

export default App;