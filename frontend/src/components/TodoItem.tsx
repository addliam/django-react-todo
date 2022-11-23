import React from 'react'
import { Todo } from '../interfaces/Todo'
import CloseIcon from '../assets/icons/CloseBgWhite.svg'
import CheckIcon from '../assets/icons/CheckBgWhite.svg'

const TodoItem = (props: any) => {
  let todo: Todo = props.data
  return (
    <div style={{backgroundColor: `${todo.completed?"#4EE7BD":"#FFFFFF"}`,
    borderColor: `${todo.completed?"#1BC495":"#ADADAD"}`}} className='py-4 px-3 border-[1px] w-[30em] min-h-[7em] relative'>
      <div className='absolute top-2 right-2'>
        {
          (todo.completed)?(
            <img src={CheckIcon} alt="check icon" width="32px" height="32px" />
          ):(              
            <img src={CloseIcon} alt="close icon" width="32px" height="32px" />
          )
        }
      </div>
      <div className='flex flex-row justify-between '>
        <h5 className='text-[#1d1d1d] text-[1.25em] leading-[1.18em] font-medium'>
        {todo.title}      
        </h5>
        <div className='reserved-space w-[32px] h-[32px]' />
      </div>
      <p className='text-[1em] text-[#282828] font-normal'>
        {todo.description}
      </p>
    </div>
  )
}

export default TodoItem