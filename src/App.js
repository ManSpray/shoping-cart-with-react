import React, { Component } from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters';
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 1 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  constructor() {
    super();
    console.log('App - Constructor');
  }

  componentDidMount() {
    // Ajax Call
    // this.setState({ movies})
    console.log('App - Mounted')
  }

  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    if (counters[index].value > 0) {
    counters[index].value--;
  }
    this.setState({ counters });
  };

  handleDelete = (counterId) => {
    // console.log("Event Handler Called", counterId);
    const counters = this.state.counters.filter((c) => c.id !== counterId); //get all counters except with given id
    this.setState({ counters: counters }); //overrides the initial array. and we dont actually have to write whole counters: counters, simply (counters) would be enough
    // this.deleteState();
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  render() { 
    console.log('App - Rendered')

    return ( 
      <React.Fragment>
      <NavBar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
      <main className="container">
        <Counters 
        counters={this.state.counters}
        onReset={this.handleReset}
        onIncrement={this.handleIncrement}
        onDecrement={this.handleDecrement}
        onDelete={this.handleDelete}
        />
      </main>
      </React.Fragment>
     );
  }
}
 
export default App;