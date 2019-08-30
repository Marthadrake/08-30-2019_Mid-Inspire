

export default class Image {
  constructor(data) {
    this.id = data.id
    this.imgUrl = data.large_Url || data.Url

  }

}