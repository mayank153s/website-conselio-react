import React, { Component } from 'react';
import { getMovies } from './moviesItem';
import Pagination from './Pagination';
import { paginate } from './utils/paginate';

class Movies extends Component {
    state = {  
        movies: getMovies(),
        pageSize: 4,
        currentPage: 1
    }
    handleDelete = movie =>{
        const movies = this.state.movies.filter(m => m.id !== movie.id);
        this.setState({movies: movies});
    }
    handlePageChange = page =>{
        this.setState({currentPage: page});
    }
    render() { 
        const { movies:allmovies, pageSize, currentPage} =this.state;
        const count = allmovies.length;
        if(count===0) return <p>No movies in the database</p>
        const movies = paginate(allmovies,currentPage,pageSize);
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
            {movies.map(movie =>
            (<tr key={movie.id}>
              
              <td>{movie.title}</td>
              <td>{movie.genre}</td>
              <td>{movie.stock}</td>
              <td>{movie.rate}</td>
              <td><button className="btn btn-danger" onClick={()=>this.handleDelete(movie)}>Delete</button></td>
          </tr>))}
                
            </tbody>
            </table>
            <Pagination 
            itemCount={count} 
            pageSize={this.state.pageSize} 
            onPageChange={this.handlePageChange} 
            currentPage={this.state.currentPage}
            />
            </React.Fragment>
            
         );
    }
}
 
export default Movies;