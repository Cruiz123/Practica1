import React, { useState } from 'react';

// Import Components
import TodoForm from '../TodoForm/TodoForm'
import Todo from '../Todo/Todo'

const TodoList = () => {
    const [todos, setTodos] = useState([])

    const allData = (value) => {
        if (!value.text || /^\s*$/.test(value.text)) {
            return
        }

        const newData = [...todos, value]

        setTodos(newData)
        console.table(newData)
    }

    const removeTodo = (id) => {
        const removeArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removeArr);
    }

    const UpdateInfo = (id, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return
        }

        setTodos(prev => prev.map((item) => (item.id === id ? newValue : item)))
    }

    const completeTodo = (id) => {
        let updatedTodos = todos.map((todo) => {
            if (todo.id === id) {
                todo.isCompleted = !todo.isCompleted;
            }
            return todo;
        })
        setTodos(updatedTodos)
    }

    return (
        <div>
            <h1>My to do list</h1>
            <TodoForm onSubmit={allData} />
            <Todo
                data={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                UpdateInfo={UpdateInfo}
            />
        </div>
    )
}

export default TodoList;