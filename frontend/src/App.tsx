import React from 'react'
import Header from './components/Header'
import TodoApp from './components/TodoApp'

const App = () => {
  return (
    <main className='min-h-screen'>
      <Header />
      <TodoApp />    
    </main>
  )
}

export default App