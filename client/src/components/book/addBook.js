import React, { useState } from 'react';
// import {gql} from 'apollo-boost';
import {useQuery, useMutation} from '@apollo/react-hooks';
import {getAuthorsQuery, addBookMutation, getBooksQuery} from "../../queries/queries";

export default function AddBooks() {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    const [addBookMut, {newData}] = useMutation(addBookMutation);

    const [name, setName] = useState('');
    const [genre, setGenre] = useState('');
    const [authorId, setAuthorId] = useState('');

    const displayAuthors = () =>{
        if (loading) return <option disabled>Loading...</option>;
        if (error) return <option disabled>Error Loading authors</option>;
        if(data){
            const {authors} = data;
            return authors.map((author, index) => {
                return (<option key={index} value={author.id}> {author.name} </option>);
            })
        }
    }

    const submitHandeler = event => {
        event.preventDefault();
        addBookMut({
            variables:{
                name: name,
                genre: genre,
                authorId: authorId
            },
            refetchQueries:[{ query: getBooksQuery }]
        });
        setName('');
        setGenre('');
        // console.log(name, genre, authorId);
        // props.onAddIngredient({title:enteredTitle, amount:enteredAmount })
      };

    return (
        <div>
            {/* <ul id="book-list">
                {displayBooks()}
            </ul> */}
            <form id= "add-book" onSubmit={submitHandeler}>
                <div className= "field">
                    <label>Book Name</label>
                    <input type="text" 
                        value={name}
                        onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>

                <div className= "field">
                    <label>Genre</label>
                    <input type="text"
                    value={genre}
                    onChange={(e) => {
                    setGenre(e.target.value)
                }} />
                </div>

                <div className= "field">
                    <label>Author</label>
                    <select onChange={(e)=>{
                        setAuthorId(e.target.value)
                    }}>
                        <option>Select author</option>
                        {displayAuthors()}
                    </select>
                </div>

                <button type="submit">+</button>

            </form>
        </div>
    )
}