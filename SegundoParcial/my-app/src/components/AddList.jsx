import '../Styles/style.css';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import axios from 'axios';

const AddList = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const dispatch = useDispatch();

  const handleTitleChange = (event) => {
    setTitle(event.target.value);

  }

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const newPost = {title: title, body: body};
    axios.post('https://jsonplaceholder.typicode.com/posts' , newPost )
      .then(response => {
        dispatch({type: 'ADD_POST', payload: response.data});
      })
      .catch(error =>{
        console.log(error);
      });

    setTitle('');
    setBody('');

  }



  return (
    <form onSubmit={handleSubmit}>
        <div className='textUno'>
            <input type="text" value={title} onChange={handleTitleChange} /> 
        </div>

        <div className='textDos'>
            <input type="text" value={body} onChange={handleBodyChange} />
        </div>

      <button className='ButtonAnadir' type="submit">Añadir postt</button>
    
    </form>
  );
};

export default AddList;