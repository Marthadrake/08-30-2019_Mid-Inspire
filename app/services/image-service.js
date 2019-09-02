import Images from "../models/image.js";


// @ts-ignore
let _imageApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
})


let _state = {
	images: []
}

let _subscribers = {
	images: []
}


function _setState(prop, value) {
	_state[prop] = value
	_subscribers[prop].forEach(fn => fn())
}



//TODO create methods to retrieve data trigger the update window when it is complete
export default class ImageService {
	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	get Images() {
		return _state.images
	}

	getApiImages() {
		_imageApi.get()
			.then(res => {
				let img = new Images(res.data)
				_setState("images", img)
			})
	}
}
