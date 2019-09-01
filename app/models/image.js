

export default class Image {
  constructor(data) {
    this.url = data.Url

  }
  get Template() {
    return `
    <img src="${this.url}"/>
    `
  }

}