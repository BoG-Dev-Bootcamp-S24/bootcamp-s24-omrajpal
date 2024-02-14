import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');
  // One for the list of todos and another for the current task input.

  function addTodo() {
    if (task) {
      setTodos([...todos, { task, completed: false }]);
      setTask('');
    }
  }
  // Hint 3: Define the addTodo function which will be called on button click.
  // - Check if 'task' is not empty. If not, proceed to add the task.
  // - Use setTodos to add the new task to the todos array.
  // - The new task should be an object of the form: { task: string, completed: boolean }
  // - Reset the task input field after adding the task.
  function toggleComplete(selectedTask) {
    const updatedTodos = todos.map(todo =>
      todo.task === selectedTask ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  }
  // Hint 4: Define the toggleComplete function to toggle the completion status of a todo item.
  // - Use setTodos with the map function to create a new array.
  // - In the map function, check if the current todo item's task matches the one received in the function's argument.
  // - If it matches, toggle its 'completed' property.
  // - Otherwise, return the todo item as is.
  function removeTodo(selectedTask) {
    const updatedTodos = todos.filter(todo => todo.task !== selectedTask);
    setTodos(updatedTodos);
  }
  // Hint 5: Define the removeTodo function to remove a todo item.
  // - Use setTodos with the filter function to create a new array.
  // - In the filter function, return only those todo items whose task doesn't match the one received in the function's argument.

  return (
    <div className="todo-list">
      <input
        type="text"
        value={todo}
        onChange={e => setTask(e.target.value)}
        placeholder="Add new task"
      />
      <button type="submit" onClick={addTodo}>Add</button>
      
      <div className="todos">
        {todos.map(todo => (
          <div
            className={`todo-item ${todo.completed ? 'complete' : ''}`}
            key={todo.task}
          >
            <span onClick={() => toggleComplete(todo.task)}>{todo.task}</span>
            <button onClick={() => removeTodo(todo.task)}>Remove</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;

