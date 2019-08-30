import Images from "../models/image.js";



// @ts-ignore
const _imageApi = axios.create({
	baseURL: '//bcw-sandbox.herokuapp.com/api/images',
	timeout: 3000
});

let _state = {
	images: []
}

let _subscribers = {
	images: []
}


function _setState(propName, data) {
	_state[propName] = data
	_subscribers[propName].forEach(fn => fn())
}
//TODO create methods to retrieve data trigger the update window when it is complete
export default class ImageService {
	addSubscriber(propName, fn) {
		_subscribers[propName].push(fn)
	}

	getApiImages() {
		_imageApi.get()
			.then(res => {
				let imagesData = res.data.data.map(i => new Image(i))
				_setState('images', imagesData)
			})
			.catch(err => {
				console.error(err)
			})
	}
	addImage(data) {
		_imageApi.post('', data)
			.then(res => {
				_state.images.push(res.data.data)
				_setState('images', _setState)
			})
			.catch(err => {
				console.error(err)
			})
	}

}

