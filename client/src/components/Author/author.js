import React, {useState} from 'react';
import { useMutation } from '@apollo/react-hooks';
import { getAuthorsQuery } from '../../queries/queries';

function AddAuthor() {
    //const [addAuthorMut, {newData}] = useMutation(addAuthorMutation);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    // const submitHandeler = event => {
    //     event.preventDefault();
    //     addBookMut({
    //         variables:{
    //             name: name,
    //             age: age
    //         },
    //         refetchQueries:[{ query: getAuthorsQuery }]
    //     });
    //     setName('');
    //     setAge('');
    //   };

    return(
        <div>
            <form id= "add-author" >
                <div className= "field">
                    <label>Author Name</label>
                    <input type="text" 
                        value={name}
                        onChange={(e) => {
                        setName(e.target.value)
                    }} />
                </div>

                <div className= "field">
                    <label>Genre</label>
                    <input type="number"
                    value={age}
                    onChange={(e) => {
                    setAge(e.target.value)
                }} />
                </div>

                <button type="submit">+</button>

            </form>
        </div>
    )
}

export default AddAuthor;