import React from 'react'
import TodoItem from './TodoItem'
import { Todo } from '../interfaces/Todo'

const TodoList = (props: any) => {
    let todoListData: Todo[] = props.data?props.data:[]    
    
    // const sampleTodo: Todo = {
    //     title: 'Simple todo sample',
    //     description: 'description for sample',
    //     completed: false,
    // }
  return (
    <div className='justify-center flex flex-row flex-wrap gap-x-6 gap-y-5'>
        {
            todoListData.map((item, indx)=>{
                return (
                    <TodoItem key={indx} data={item} />
                )
            })
        }
    </div>
  )
}

export default TodoList