
import TodoService from "../services/todo-service.js";

const _todoService = new TodoService()

//TODO Create the render function
function _drawTodos() {
	let template = ''
	let todos = _todoService.TodoApi
	todos.forEach((todo, index) => {
		template += todo.getTemplate(index)
	});

	document.getElementById('#todos').innerHTML = template

}

//NOTE Keep an eye on your console for any of these errors
function _drawError() {
	console.error('[TODO ERROR]', _todoService.TodoError)
}


export default class TodoController {
	constructor() {
		//TODO Remember to register your subscribers
		_todoService.addSubscriber('error', _drawError)
		_todoService.getTodoApi()
	}

	addTodo(e) {
		e.preventDefault()
		var form = e.target
		var todo = {
			name: form.name.value
			//TODO build the todo object from the data that comes into this method
		}
		_todoService.addTodo(todo)
		_drawTodos()
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be toggled
	toggleTodoStatus(event, todoId) {
		event.preventDefault()
		let form = event.target
		let newToggleTodo = form.toggleTodo.value
		_todoService.toggleTodoStatus(newToggleTodo, todoId)

		_todoService.toggleTodoStatus(todoId)
	}

	//NOTE This method will pass an Id to your service for the TODO that will need to be deleted
	removeTodo(todoId) {
		_todoService.removeTodo(todoId)
		_drawTodos
	}



}