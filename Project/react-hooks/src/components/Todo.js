import React,{useState} from 'react'
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";


const Todo = () => {
    const listTodo = [
        {id:uuidv4(),title:'Viec lam 1',complete:false},
        {id:uuidv4(),title:'Viec lam 2',complete:false},
        {id:uuidv4(),title:'Viec lam 3',complete:false},
        {id:uuidv4(),title:'Viec lam 4',complete:false},
        {id:uuidv4(),title:'Viec lam 5',complete:false}
    ];
    const [todos,setTodos] =useState(listTodo);
    const addTodo = todo =>{
        setTodos([...todos,todo])
    }
    const deleteTodoItem = (id)=>{
        setTodos(todos.filter((todo)=>todo.id !== id))
    }
    return (
        <div className="todo-list">
            <TodoForm addTodoFunc={addTodo}/>
            <ul>
                {                
                    todos.map((todo)=>
                    <TodoItem todoProps={todo} key={todo.id} deleteTodoItem={deleteTodoItem}/>
                    )
                }
            </ul>
        </div>
    )
}

export default Todo
