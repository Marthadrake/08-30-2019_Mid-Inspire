
export default class Todo {
  constructor(data) {
    console.log("list from models list")
    this.name = data.name
    this.todoId = data.todoId || []
    this.toggleTodo = this.toggleTodo || []

  }

  getTemplate(index) {
    let template =
      `
       <div class="col-4">
            <h1>${this.name}</h1>
            <ul>`
    template += this.drawToggleTodo(index)
    template += `    </ul>
      <form >
				<input type="text"  class="form-control" name="newTodo">
				<button type="submit" onsubmit="app.controllers.todocontroller.drawTodos">Add todo</button>
      </form>
				<button type="submit" onsubmit="app.controllers.todocontroller.removeTodo">Add todo</button>
		</div>
    `
    return template

  }
  drawToggleTodo(todoId) {
    let toggleTodoTemplate = ""
    this.toggleTodo.forEach((t, toggleTodo) => {
      toggleTodoTemplate += `<li>${t}<span onclick="app.controllers.todoController.removeTodo(${this.todoId}, ${this.toggleTodo})">X</span></li>`
    });
    return toggleTodoTemplate
  }
}
