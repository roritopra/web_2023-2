import { useEffect, useState } from 'react'
import { Form, List, Filters, Footer } from './components'
import { filters } from './const/filter'

const newState = JSON.parse(window.localStorage.getItem('todos')) ?? []
const newFilter = window.localStorage.getItem('filters') || 'all'

export default function App () {
  const [todos, setTodos] = useState(newState)
  const [filter, setFilter] = useState(newFilter)

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const createTodo = (title) => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    setTodos(prevState =>
      [...prevState, newTodo])
  }

  const handleToggle = (todo) => {
    const { id, completed } = todo
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        const newTodo = {
          ...todo,
          completed
        }
        return newTodo
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((item) => item.id !== id)
    setTodos(newTodos)
  }

  const handleFilterChange = (filterValue) => {
    setFilter(filterValue)
    window.localStorage.setItem('filters', filterValue)
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') {
      return todo.completed
    }
    if (filter === 'pending') {
      return !todo.completed
    }
    return todo
  })

  const hasTodos = todos.length > 0

  const completedTodosCount = todos.filter((item) => item.completed).length

  const clearAllCompleteTask = () => {
    const newTasks = todos.filter((item) => !item.completed)
    setTodos(newTasks)
  }

  return (
    <>
      <div className='container'>
        <h1>Todo List App</h1>
        <header className='header'>
          <Form onSubmit={createTodo} />
        </header>
        <Filters
          filters={filters}
          onChange={handleFilterChange}
          currentValue={filter}
        />
        <main>
          <List
            showList={hasTodos}
            list={filteredTodos}
            onToggle={handleToggle}
            onDelete={handleDelete}
          />
        </main>
        <Footer
          totalTodos={todos.length}
          completedTodosCount={completedTodosCount}
          onDelete={clearAllCompleteTask}
        />
      </div>
    </>
  )
}
