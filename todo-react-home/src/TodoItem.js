import React from 'react'

const TodoItem = ({item,deleteTodo,doneTodo}) =>{
    return(
        <div className={item.done ? 'TodoItem done' : 'TodoItem'}>
              <input type='checkbox' checked={item.done} onChange={()=>doneTodo(item.id) } />    
        <span> {item.title}</span>
        <i className='fa-solid fa-trash' onClick={ () => deleteTodo(item.id) }></i>
        </div>
    )
}

export default TodoItem;