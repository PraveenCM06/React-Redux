import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todo/todoSlice';

function Addtodo() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();
    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim() !== '') { // Check if input is not empty or only spaces
            dispatch(addTodo(input));
            setInput('');
        }
    };

    return (<div>
            <h2 className='text-center text-2xl mt-8'>This is Very simple and practice Example of</h2>
            <h1 className='text-center text-3xl font-extrabold'>React Redux Toolkit</h1>
        <form onSubmit={addTodoHandler} className='space-x-3 mt-12 mb-8'>
            <label htmlFor="todoInput" className="sr-only">
                Enter a Todo
            </label>
            <input
                type="text"
                id="todoInput"
                className='bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out'
                placeholder='Enter a todo'
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type='submit'
                disabled={input.trim() === ''} // Disable button if input is empty or only spaces
                className={ input.trim()===''?  `text-white bg-gray-600 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg`
                    :
                    `text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg`
            }>
                Add Todo
            </button>
        </form>
        </div>
    );
}

export default Addtodo;
