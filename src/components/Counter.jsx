import React, { Component } from 'react';
class Counter extends Component {
    
    render() { 
        return ( 
            <div className="row">
            <div className="col-1">
            <span className={this.getBadgeClass()}>{this.showCount()}</span>
            </div>
            <div className="col">
            <button className="btn btn-secondary m-2" onClick={()=>this.props.onIncrement(this.props.counter)}>+</button>
            <button className="btn btn-secondary m-2" onClick={()=>this.props.onDecrement(this.props.counter)}
              disabled={this.props.counter.value === 0 ? "disabled" : ""}>-</button>
            <button className="btn btn-danger m-2"  onClick={()=>this.props.onDelete(this.props.counter.id)}>X</button>
           
            </div>

                
                 </div>
         );
    }
    getBadgeClass(){
        let classes = "badge m-2 bg-";
        classes += this.props.counter.value === 0 ? "warning" : "secondary";
        return classes;
    }
    showCount() {
        return this.props.counter.value === 0 ? "Zero" : this.props.counter.value;
    }

}
 
export default Counter;
