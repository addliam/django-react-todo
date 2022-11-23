import React, {useState, useEffect} from 'react'
import TodoList from './TodoList'
import { Todo } from '../interfaces/Todo'
import ButtonAddTodo from './ButtonAddTodo'
import axios from "axios"

const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const TodoApp = () => {
  const [todoList, setTodoList] = useState<Todo[]>([])

  useEffect(() => {
    axios.get(`${VITE_API_BASE_URL}/api/todos`)
      .then((res)=> {
        setTodoList(res.data)
      })
      .catch((err)=>console.error(err))
    
    return () => {
    }
  }, [])
  
  return (
    <div className='bg-lightGray '>
      <section className='py-[2em]'>
        <TodoList data={todoList} />
      </section>
      <div className='w-full flex justify-end px-[5em]'>
         <ButtonAddTodo action={()=>console.log("Action from prop")} />
      </div>
    </div>
  )
}

export default TodoApp