import React from 'react'

const ButtonAddTodo = ({action}: any) => {
    const handleAddTodoClick = (): void => {
        console.log("Add todo clicked")
        action()
    }
  return (
    <button onClick={()=>handleAddTodoClick()} className='py-2 px-8 bg-orange hover:bg-orangeContrast text-white font-medium rounded-[5em]'>
        Add todo
    </button>
  )
}

export default ButtonAddTodo