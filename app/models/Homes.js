import { generateId } from "../utils/GenerateId.js"

export class Home {
  constructor(data) {
    this.id = data.id || generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.img = data.img
  }

  get cardHTMLTemplate() {
    return `
    <div class="col-12 p-0 mb-3">
    <div class="row bg-light shadow">
    <div class="col-4 p-0">
    <img class="img-fluid car-img" src='${this.img}' alt='${this.name}'>
    </div>
    <div class="col-8">
    <div class="p-2">
    <p class="fs-3">${this.name}</p>
    <p class="fs-4">$${this.price}</p>
    <p>${this.description}</p>
    </div>
    </div>
    </div>
    </div>
    </section >
    </div >
    `
  }
}