
export default class Todo {
  constructor(data) {
    console.log("list from models list")
    this.name = data.name
    this.chores = data.chores || []

  }

  getTemplate(index) {
    let template =
      `            
        <div class="row justify-content border border-info p-3">
        <div class="offset-3 col-6 mt-3 border border-danger">
            <div>
                <h1>${this.name}></h1>
                <ul>`
    template += this.drawTodo(index)
    template += ` </ul>
            <form onsubmit="app.controllers.listController.addTodos(event, ${index}">
                <div class="form-group">
                    <label font-weight-bold mt-3" for="todos">chores</label>
                    <input type="text" class="form-control font-italic font-weight-bold name="chores" placeholder="list chores" required>
                    </div>
                    </form>
                    <button class="btn btn-outline-success btn-sm" type="submit" onclick="app.controllers.listContoller.addListTodos(event)">+++</button>
                <button class="btn btn-outline-danger btn-sm" type="submit" onclick="app.controllers.listController.deleteList(${index})">Delete Chores</button>
            </div>
            </div>
            </div>
            `
    return template
  }
  drawTodo(ListTodoIndex) {
    let todoTemplate = ""
    this.todos.forEach((c, todoIndex) => {
      todoTemplate += `<li>${c}<span
                onclick="app.controllers.listController.addTodos(${todoIndex}, ${todosIndex})">Add Todo</span></li>`
    });
    return todoTemplate
  }

}