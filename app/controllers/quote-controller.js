import QuoteService from "../services/quote-service.js";

let _quoteService = new QuoteService()


function draw() {
  let quotes = _quoteService.Quotes
  let template = ''
  quotes.forEach(q => template += q.Template)
  document.getElementById('#quote').innerHTML = quotes.template
}

//TODO Create methods for constructor, and rendering the quote to the page 
//      (be sure to review the HTML as an element already was put there for you)
export default class QuoteController {
  constructor() {
    _quoteService.addSubscriber("quote", draw)
    _quoteService.getQuotes()

  }

  addQuote(e) {
    e.preventDefault();
    let form = e.target
    let data = {
      id: form.id.value,
      url: form.url.value,
      author: form.author.value,
      body: form.body.value,
    }
    _quoteService.addQuote(data)
    form.reset
  }
}
