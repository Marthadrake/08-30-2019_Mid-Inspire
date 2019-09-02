import Todo from "../models/todo.js";
//NOTE your service is all set up for the observer pattern but there is still work to be done


// @ts-ignore
let todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/jake/todos/',
	timeout: 3000
});

let _state = {
	todos: [],
	error: {}

}
let _subscribers = {
	todos: [],
	error: []

}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn())

}

export default class TodoService {

	get TodoError() {
		return _state.error
	}


	get Todos() {
		return _state.todos.map(t => todoApi(t))
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getTodos() {
		console.log("Getting the Todo List")
		todoApi.get()
			.then(res => {
				console.log(res.data.data);

				//TODO Handle this response from the server
				_setState('todos', res.data.data)
			})
			.catch(err => _setState('error', err))
	}


	addTodo(newTodo) {
		todoApi.post('', newTodo)
			.then(res => {
				//TODO Handle this response from the server (hint: what data comes back, do you want this?)
				console.log("todo", res.data.data)

			})

			.catch(err => _setState('error', err))
	}


	addListTodo(newListTodo, todoIndex) {
		_state.todos[todoIndex].listTodo.push(newListTodo)

	}

	toggleTodoStatus(todoId) {
		let todo = _state.todos.find(todo => todo._id == todoId)
		todo.completed = !todo.completed
		//TODO Make sure that you found a todo, 
		//		and if you did find one
		//		change its completed status to whatever it is not (ex: false => true or true => false)
		if (todo) {
			alert('Todo already listed')
			return
		}

		todoApi.put(todoId, todo)
			.then(res => {
				//TODO do you care about this data? or should you go get something else?
				console.log("todo", res.data.data)
			})
			.catch(err => _setState('error', err))
	}

	//TODO Work through this one on your own
	//		what is the request type
	//		once the response comes back, what do you need to insure happens?
	removeTodo(todoId) {
		todoApi.delete(todoId)
			.then(res => {
				let index = _state.todos.findIndex(t => todoApi._id == todoId)
				_state.todos.splice(index, 1)
				console.log(res.data.data)
				this.getTodos()
			})

			.catch(err => _setState('error', err))
	}
}


