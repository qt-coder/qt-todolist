import React from 'react'

import Todo from './Todo'

function TodoList({todos, setTodos, filteredTodos}) {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.map(todo => (
                    <Todo setTodos={setTodos} key={todo.id} text={todo.text} todo={todo} id={todo.id} todos={todos}/>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
