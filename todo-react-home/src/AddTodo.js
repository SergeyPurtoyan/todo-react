import { useState } from "react"

function AddTodo({addTodo}){

    const [input, setInput] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(input); 
        setInput('');
    }
    return(
        <form onClick={submitHandler}>
            <input type='text' className="inp" value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button>ADD</button>
        </form>
    )
}





export default AddTodo