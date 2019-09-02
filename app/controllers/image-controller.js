import ImageService from "../services/image-service.js";

let _imageService = new ImageService()

//TODO Create methods for constructor, and rendering the image to the page 
//      (you may wish to set it as a background image)



function _draw() {
  let img = _imageService.Images
  document.getElementById("#bg-image").innerHTML = img.Template

}


export default class ImageController {
  constructor() {
    _imageService.addSubscriber('images', _draw);
    _imageService.getApiImages
  }

}

