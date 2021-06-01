import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox'
import Scroll from './Scroll'

class App extends Component {
    constructor() {
        super() // when extending a class, super() must always come before this.state
        //state lives in the parent component
        this.state = {
            robots: [],
            searchfield: ""
        } //state is the thing that will affect our input (robots in this case) based on sth else (searchfield in this case)
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users => this.setState({robots:users}));
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
                <Scroll>
                    <CardList robots={filteredRobots}/> 
                </Scroll>
            </div>
        )
    }
}

export default App;