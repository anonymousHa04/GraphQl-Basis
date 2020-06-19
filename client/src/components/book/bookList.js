import React, { useState } from 'react';
// import {gql} from 'apollo-boost';
import {useQuery} from '@apollo/react-hooks';
import {getBooksQuery} from "../../queries/queries";
import BookDetails from "../book/bookDetails";

const BookList = (props) => {
   const { loading, error, data } = useQuery(getBooksQuery);
   const [bookId, setBookId] = useState(null)
 
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
 
    const { books } = data;
 
    const bookListItems = books.map( ({ id, name }) => {
       return <li key={id} onClick={() => {
         setBookId(id)
       }}>{name}</li>;
    });
 
    return (
       <div>
          <ul id="book-list">
              {bookListItems}
          </ul>
          <BookDetails bookId={bookId} />
       </div>
    );
 };

export default BookList;