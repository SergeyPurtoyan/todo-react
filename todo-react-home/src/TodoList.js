import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({todos,deleteTodo,doneTodo}) =>{
    return(
        <div className='TodoList'>
            {
                todos.map(el => <TodoItem item = {el} deleteTodo={deleteTodo} doneTodo={doneTodo}/>)
            }
        </div>
    )
}

export default TodoList