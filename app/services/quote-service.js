import Quote from "../models/quote.js";

// @ts-ignore
let _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
})

let _state = {
	quote: []
}

let _subscribers = {
	quote: []
}

function _setState(propName, value) {
	_state[propName] = value
	_subscribers[propName].forEach(fn => fn())
}

//TODO create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {


	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	addQuote(data) {
		_quoteApi.post('', data)
			.then(res => {
				_state.quote.push(res.data.data)
				_setState('quotes', _state.quotes)
			})


	}

	get Quotes() {
		return _state.quotes
	}

	getQuotes() {
		_quoteApi.get()
			.then(res => {
				_setState('quoteApi', res.data.data)
			})

	}
}
