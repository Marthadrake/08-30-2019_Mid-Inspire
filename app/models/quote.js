

export default class Quote {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.author = data.author
    this.body = data.body


    console.log("from quote");

  }

  get Template() {
    return `

              <div id="quote" class="card">${this.id}
                <div  class="card-body">
                    <img src="${this.url}" class="card-img-top">
                    <h5 class="card-title">${this.author}</h5>
                    <p class="card-text">${this.body}</p>
                </div> 
    			 </div>

    `
  }

}
