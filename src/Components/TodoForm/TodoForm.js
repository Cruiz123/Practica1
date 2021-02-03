import React, { useState, useEffect, useRef } from 'react';

const TodoForm = ({ onSubmit }) => {
    const [input, setInput] = useState('')
    const [count, setCount] = useState(0)
    const inputRef = useRef(null)

    const heandleSubmit = (value) => {
        value.preventDefault();

        const numberAcount = count + 1
        setCount(numberAcount)
        onSubmit({
            id: numberAcount,
            text: input
        });

        setInput('')

    }

    const handleChange = (value) => {
        setInput(value.target.value);
    }

    useEffect(() => {
        inputRef.current.focus()
    })


    return (
        <form className="todo-form" onSubmit={heandleSubmit}>
            <input
                type="text"
                placeholder="Title"
                value={input}
                name='text'
                className='todo-input'
                onChange={handleChange}
                ref={inputRef}
            />

            <button className='todo-button'>Add</button>
        </form>
    )
}

export default TodoForm;