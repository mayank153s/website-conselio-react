import React, { Component } from 'react';
import { getMovies } from './moviesItem';


class Movies extends Component {
    state = {  
        movies: getMovies()
    }
    handleDelete = movie =>{
        const movies = this.state.movies.filter(m => m.id !== movie.id);
        this.setState({movies: movies});
    }
    render() { 
        const count = this.state.movies.length;
        if(count===0) return <p>No movies in the database</p>
        return ( 
            <React.Fragment>
            <p>there are {count} movies in the database</p>
                <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                
                </tr>
            </thead>
            <tbody>
            {this.state.movies.map(movie =>
            (<tr key={movie.id}>
              
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.stock}</td>
              <td>{movie.rate}</td>
              <td><button className="btn btn-danger" onClick={()=>this.handleDelete(movie)}>Delete</button></td>
          </tr>))}
                
            </tbody>
            </table>
            </React.Fragment>
            
         );
    }
}
 
export default Movies;