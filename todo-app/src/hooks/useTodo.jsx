import { useState } from 'react'
import { useLocalStorage } from './useLocalStorage'

export function useTodo () {
  const [todos, setTodos] = useLocalStorage('todos', [
    {
      text: 'Terminar este Challenge',
      completed: false,
      tags: ['Work'],
      created: Date.now()
    }
  ])
  const [todoFilter, setTodoFilter] = useState('')

  // ToDo: crear el drag and drop

  const tagSet = new Set(todos.map((todo) => todo.tags).flat())
  const tagArray = []
  tagSet.forEach((tag) => tagArray.push(tag))

  // Filtered Array that is rendered
  const todosList = todos.filter((todo) => {
    if (todoFilter === 'Completed') {
      return todo.completed
    } else if (todoFilter === 'Active') {
      return !todo.completed
    } else if (tagArray.includes(todoFilter)) {
      return todo.tags.includes(todoFilter)
    }
    return todo
  })

  const changeTodoOrder = (active, over, callback) => {
    setTodos((todos) => {
      const activeIndex = todos.findIndex((todo) => todo.created === active)
      const overIndex = todos.findIndex((todo) => todo.created === over)

      return callback(todos, activeIndex, overIndex)
    })
  }

  const createTodo = (newTodo) => {
    setTodos([
      {
        text: newTodo,
        completed: false,
        tags: [],
        created: Date.now()
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
        todo.tags = todo.tags.filter((tag) => tag !== tagText)
        return todo
      })
    )
  }

  return {
    todos,
    createTodo,
    deleteTodo,
    markAsComplete,
    deleteCompletedTodos,
    todosList,
    setTodoFilter,
    addTag,
    removeTag,
    tagArray,
    changeTodoOrder
  }
}
