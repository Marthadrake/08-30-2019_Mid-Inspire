







export default class Todo {
  constructor(data) {
    console.log("list from models list")
    this.name = data.name
    this.completed = data.completed
    this.user = data.user
    this.description = data.description
    this.todoId = data.todoId || []

  }

  getTemplate(index) {
    let template = `
      <div class="row mt-4">
        <div class="offset-2 col-5">
        A Todo List
        </div>
        <h6>${this.name}</h6>
        <ul>`

    template += this.drawTodos(index)
    template += `</ul>
        <form class="form-group" onsubmit="categoryList(event, ${index})">
          <div class="form-group>
          	<button class="btn btn-sucess form-control" type="submit"><input type="text" name="newTodo">Add Todo</button>
            <div>
            </form>
            <button class="btn btn-danger" type="submit" onclick="app.controllers.todoController.removeTodo()">Delete Todo</button>
        </div>    
    `
    return template
  }
  drawTodos(listIndex) {
    let todoTemplate = ``
    this.todoId.forEach((t, todosIndex) => {
      todoTemplate += `<li>${t}<span onclick="app.controller.todoController.addTodos((${listIndex}, ${todosIndex})">New List</span</li>`
    });
    return todoTemplate
  }
}