import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../interfaces/Todo'

const TodoList = (props: any) => {
    const todoListData = props.data?props.data:[]
    console.log("todoListData")
    console.log(todoListData)
    
    
    const sampleTodo: Todo = {
        title: 'Simple todo sample',
        description: 'description for sample',
        completed: false,
    }
  return (
    <div className='justify-center flex flex-row flex-wrap gap-x-6 gap-y-5'>
        {
            Array(6).fill('x').map((item, indx)=>{
                return (
                    <TodoItem key={indx} data={sampleTodo} />
                )
            })
        }
    </div>
  )
}

export default TodoList