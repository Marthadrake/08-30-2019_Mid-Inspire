import ImageService from "../services/image-service.js";

const _imageService = new ImageService()

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)



function _draw() {
  let images = _imageService.Images
  let template = ''
  images.forEach(i => template += i.Template)
  document.getElementById('bg-image').innerHTML = template

}


export default class ImageController {
  constructor() {
    _imageService.addSubscriber('images', _draw);
    _imageService.getApiImages()
  }


  addImage(e) {
    e.prevemtDefault();
    let form = e.target
    let data = {
      id: form.id.value,
      imgUrl: form.imgUrl,
    }

    imageService(data)
    form.reset()
  }


}

