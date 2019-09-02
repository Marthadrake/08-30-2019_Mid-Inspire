import Todo from "../models/todo.js";

// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/jake/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {},
}
let _subscribers = {
	todos: [],
	error: []
}

function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}

export default class TodoService {

	get TodoError() {
		return _state.error
	}

	get TodoApi() {
		return _state.todoApi
	}

	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getTodoApi() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				//TODO Handle this response from the server
				let todosData = res.data.data.map(t => new Todo(t))
				_setState('todos', todosData)
			})

			.catch(err => _setState('error', err.response.data))
	}

	addTodo(todo) {
		todoApi.post('', todo)
			.then(res => {
				_state.todos.push(res.data.data)
				_setState('todo', _state.todos)
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
			})
			.catch(err => _setState('error', err.response.data))
	}

	toggleTodoStatus(newToggleTodo, todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		if (todo) {
			alert('todo already listed')
			return
		}
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)

		todoApi.put(todoId, todo)
			.then(res => {
				_state.todos[todoId].toggleTodos.push(newToggleTodo)
				_setState('todoId', res.data.data)
				//TODO do you care about this data? or should you go get something else?
			})
			.catch(err => _setState('error', err.response.data))


	}
	removeTodo(todoId) {
		todoApi.remove(_state.todoId._id)
			.then(res => {
				let index = _state.todos.findIndex(todo => todo._id == todoId)
				_state.todos.splice(index, 1)
				_setState('todoId', res.data.data)
			})
			.catch(err => _setState('error', err.response.data))

		//TODO Work through this one on your own
		//		what is the request type
		//		once the response comes back, what do you need to insure happens?
	}
}



