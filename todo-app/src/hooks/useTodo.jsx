import { useLocalStorage } from './useLocalStorage'

export function useTodo () {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const tagSet = new Set(todos.map(todo => todo.tags).flat())
  const tagArray = [...tagSet]

  const reorderTodos = result => {
    const { source, destination } = result
    console.log(result)
    if (!destination) return
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableId
    ) {
      return
    }
    const copyTodos = [...todos]
    const [removed] = copyTodos.splice(source.index, 1)
    copyTodos.splice(destination.index, 0, removed)
    setTodos(copyTodos)
  }

  const createTodo = newTodo => {
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

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.created !== id))
  }

  const deleteCompletedTodos = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const markAsComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.created !== id) return todo
        todo.completed = !todo.completed
        return todo
      })
    )
  }

  const addTag = (id, tag) => {
    setTodos(
      todos.map(todo => {
        if (todo.created !== id) return todo
        if (todo.tags.includes(tag.toLowerCase())) return todo
        todo.tags = [...todo.tags, tag.toLowerCase()]
        return todo
      })
    )
  }

  const removeTag = (id, tagText) => {
    setTodos(
      todos.map(todo => {
        if (todo.created !== id) return todo
        todo.tags = todo.tags.filter(tag => tag !== tagText.toLowerCase())
        return todo
      })
    )
  }

  return {
    todos,
    setTodos,
    createTodo,
    deleteTodo,
    markAsComplete,
    deleteCompletedTodos,
    addTag,
    removeTag,
    tagArray,
    reorderTodos
  }
}
