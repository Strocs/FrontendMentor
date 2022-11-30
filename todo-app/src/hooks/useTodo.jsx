import { useLocalStorage } from './'

export function useTodo () {
  const [todos, setTodos] = useLocalStorage('todos', [])
  const tagSet = new Set(todos.map(todo => todo.tags).flat())
  const tagArray = [...tagSet]

  const reorderTodos = result => {
    const { source, destination } = result
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

  const deleteCompleted = () => {
    setTodos(todos.filter(todo => !todo.completed))
  }

  const toggleCompleted = id => {
    setTodos(
      todos.map(todo => {
        if (todo.created !== id) return todo
        todo.completed = !todo.completed
        return todo
      })
    )
  }

  const addTag = (id, tagId) => {
    setTodos(
      todos.map(todo => {
        if (todo.created !== id) return todo
        if (todo.tags.includes(tagId.toLowerCase())) return todo
        todo.tags = [...todo.tags, tagId.toLowerCase()]
        return todo
      })
    )
  }

  const removeTag = (id, tagId) => {
    setTodos(
      todos.map(todo => {
        if (todo.created !== id) return todo
        todo.tags = todo.tags.filter(tag => tag !== tagId.toLowerCase())
        return todo
      })
    )
  }

  return {
    todos,
    setTodos,
    createTodo,
    deleteTodo,
    toggleCompleted,
    deleteCompleted,
    addTag,
    removeTag,
    tagArray,
    reorderTodos
  }
}
