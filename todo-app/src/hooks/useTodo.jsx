import { useState } from 'react'

export function useTodo () {
  const [todoFilter, setTodoFilter] = useState('')
  const [openModal, setOpenModal] = useState(false)
  const [todos, setTodos] = useState([])

  const createTodo = newTodo => {
    setTodos([
      {
        todo: newTodo,
        completed: false,
        description: '',
        created: new Date(),
        deadline: 0
      },
      ...todos
    ])
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.created !== id))
  }

  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const markAsComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.created === id) {
          todo.completed = !todo.completed
          return todo
        }
        return todo
      })
    )
  }

  const toggleModal = () => {
    setOpenModal(!openModal)
  }

  const todosList = todos.filter(todo => {
    if (todoFilter === 'Completed') {
      return todo.completed
    } else if (todoFilter === 'Active') {
      return !todo.completed
    }
    return todo
  })

  return {
    todos,
    createTodo,
    deleteTodo,
    markAsComplete,
    deleteCompletedTodos,
    todosList,
    setTodoFilter,
    openModal,
    toggleModal
  }
}
