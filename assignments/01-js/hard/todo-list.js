/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.todos = [];
  }
  add(todo) {
    this.todos.push(todo);
  }
  remove(index) {
    let n = this.todos.length;
    if (index < n) {
      if (index < n - 1) {
        for (let i = index; i < n; i++) {
          this.todos[i] = this.todos[i + 1];
        }
      }
      this.todos.pop();
    }
  }
  update(index, updated) {
    let n = this.todos.length;
    if (index < n) {
      this.todos[index] = updated;
    }
  }
  getAll() {
    return this.todos;
  }
  get(index) {
    let n = this.todos.length;
    if (index >= n) return null;
    return this.todos[index];
  }
  clear() {
    this.todos = [];
  }
}

module.exports = Todo;
