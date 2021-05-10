import React, { Component } from 'react';
class Counter extends Component {
    state = { 
        count: 0
     }
    render() { 
        return ( 
            <div>
                <span className={this.getBadgeClass()}>{this.showCount()}</span>
                <button className="btn btn-primary" onClick={this.handleIncrement}>Increment</button>
            </div>
         );
    }
    getBadgeClass(){
        let classes = "badge m-2 bg-";
        classes += this.state.count === 0 ? "warning" : "secondary";
        return classes;
    }
    showCount() {
        return this.state.count === 0 ? "Zero" : this.state.count;
    }
    handleIncrement = () => {
        this.setState({ count : this.state.count + 1});
    }

}
 
export default Counter;
