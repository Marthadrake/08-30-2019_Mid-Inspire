import Quote from "../models/quote.js";

// @ts-ignore
let _quoteApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/quotes',
	timeout: 3000
});

let _state = {
	quote: []
}

let _subscriber = {
	quote: [],

}

function _setState(prop, value) {
	_state[prop] = value
	_subscriber[prop].forEach(fn => fn())

}


//TODO create methods to retrieve data trigger the update window when it is complete
export default class QuoteService {
	addSubscriber(prop, fn) {
		_subscriber[prop].push(fn)
	}

	get Quote() {
		return _state.quote
	}

	getQuotes() {
		_quoteApi.get()
			.then(res => {
				let qu = new Quote(res.data)
				_setState("quote", qu)
			})

	}
}
