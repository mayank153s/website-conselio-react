import React, { Component } from 'react';
import Counter from './Counter';
class Counters extends Component {
    state = { 
        counters: [
            {id: 1, value: 5},
            {id: 2, value: 0},
            {id: 3, value: 4},
            {id: 4, value: 3}
        ]
    }
    render() { 
        return ( 
            <div>
               {this.state.counters.map(counter => 
                <Counter key={counter.id} 
                //  value={counter.value} 
                //  id={counter.id} 
                 counter={counter}    
                 onIncrement={this.handleIncrement}
                 onDecrement={this.handleDecrement}           
                 onDelete={this.handleDelete}/>)}
            </div>
         );
    }
    handleDecrement = counter =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter); 
        counters[index].value--;
        this.setState({counters:counters});
    }

    handleIncrement = counter =>{
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter); 
        counters[index].value++;
        this.setState({counters:counters});

    }
    handleDelete = counterId =>{
        const counters= this.state.counters.filter(c =>c.id !== counterId)
        this.setState({counters: counters});
    }
}
 
export default Counters;