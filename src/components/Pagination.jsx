import React from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const Pagination = (props) => {
    const { itemCount, pageSize, currentPage, onPageChange} = props;//object destructuring
    const pageCount = Math.ceil(itemCount / pageSize);
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1);
    return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
       {pages.map(page =>(
        <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
        <Link className="page-link" onClick={()=>onPageChange(page)} href="#">{page}</Link></li>
       ))}
      
      </ul>
    </nav>
    ); 
}
 
export default Pagination;