import { useState } from 'react'

export function useTodo () {
  const [todos, setTodos] = useState([
    {
      text: 'Terminar este Challenge',
      completed: false,
      tags: ['Work'],
      created: new Date()
    }
  ])

  const [todoFilter, setTodoFilter] = useState('')

  const createTodo = (newTodo) => {
    setTodos([
      {
        text: newTodo,
        completed: false,
        tags: [],
        created: new Date()
      },
      ...todos
    ])
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.created !== id))
  }

  const deleteCompletedTodos = () => {
    setTodos(todos.filter((todo) => !todo.completed))
  }

  const markAsComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.created !== id) return todo
        todo.completed = !todo.completed
        return todo
      })
    )
  }

  const addTag = (id, tag) => {
    setTodos(
      todos.map((todo) => {
        if (todo.created !== id) return todo
        if (todo.tags.includes(tag)) return todo
        todo.tags = [...todo.tags, tag]
        return todo
      })
    )
  }
  const removeTag = (id, tagText) => {
    setTodos(
      todos.map((todo) => {
        if (todo.created !== id) return todo
        todo.tags = todo.tags.filter(tag => tag !== tagText)
        return todo
      })
    )
  }

  const todosList = todos.filter((todo) => {
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
    addTag,
    removeTag
  }
}
