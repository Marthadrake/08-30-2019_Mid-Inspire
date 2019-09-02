
export default class Todo {
  constructor(data) {
    console.log("list from models list")
    this.name = data.name
    this.todoId = data.todoId || [];
    this.listTodo = this.listTodo || []

  }

  getTemplate(index) {
    let template =
      `
       <div class="col-4">
            <h1>${this.name}</h1>
            <ul>`
    template += this.drawListTodo(index)
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
  drawListTodo(todoIndex) {
    let listTodoTemplate = ""
    this.listTodo.forEach((t, listTodo) => {
      listTodoTemplate += `<li>${t}<span onclick="app.controllers.todoController.removeTodo(${todoIndex}, ${listTodo})">X</span></li>`
    });
    return listTodoTemplate
  }
}
