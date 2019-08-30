

import WeatherController from "./controllers/weather-controller.js";
import TodoController from "./controllers/todo-controller.js";
import QuoteController from "./controllers/quote-controller.js";
import ImageContoller from "./controllers/image-controller.js";

//TODO Dont forget to register all your controllers
class App {
  constructor() {
    this.controllers = {
      weatherController: new WeatherController(),
      todoController: new TodoController(),
      quoteController: new QuoteController(),
      imageContoller: new ImageContoller()
    }
  }
}

window['app'] = new App()  