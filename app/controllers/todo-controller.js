import TodoService from "../services/todo-service.js";

let _todoService = new TodoService()

//TODO Create the render function
function _drawTodos() {
	let template = ``
	let todos = _todoService.Todos
	todos.forEach((todo, index) => {
		template += todo.getTemplate(index)
	})

	document.querySelector('#sp-todos').innerHTML = template

}

//NOTE Keep an eye on your console for any of these errors



export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('todos', _drawTodos),
			_todoService.getTodos()
	}

	addTodo(e) {
		e.preventDefault()
		let form = e.target
		let todo = {
			name: form.name.value,
			completed: form.completed.value,
			user: form.user.value,
			description: form.description.value
			//TODO build the todo object from the data that comes into this method
		}
		_todoService.addTodo(todo)
		form.reset()
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(todoId) {
		todoId.preventDefault();
		let form = todoId.target
		let update = {
			todoId: form.todoId.value
		}
		_todoService.toggleTodoStatus(update)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
		document.getElementById('sp-todo').innerHTML = ''
	}
}
