import React from 'react'
import { Todo } from '../interfaces/Todo'
import CloseIcon from '../assets/icons/CloseBgWhite.svg'
import CheckIcon from '../assets/icons/CheckBgWhite.svg'

const TodoItem = (props: any) => {
  let todo: Todo = props.data
  return (
    <div className='py-3 bg-white px-2 border-[1px] border-[#e9e9e9] w-[30em] h-[7em]'>
      <div className='flex flex-row justify-between'>
        <h5 className='text-[1.25em] font-medium'>
        {todo.title}      
        </h5>
        {
          (todo.completed)?(
            <img src={CheckIcon} alt="check icon" width="32px" height="32px" />
          ):(              
            <img src={CloseIcon} alt="close icon" width="32px" height="32px" />
          )
        }
      </div>
      <p className='text-[1em] font-normal'>
        {todo.description}
      </p>
    </div>
  )
}

export default TodoItem