import { AppState } from "../AppState.js";

export class HomesController {
  constructor() {
    console.log('HomesController has been loaded');
    AppState.on('homes', this.drawHomes)

    this.drawHomes()
  }

  drawHomes() {
    console.log("Drawing Homes");

    const homes = AppState.homes

    let homeHTMLContent = ''

    homes.forEach(home => homeHTMLContent += home.cardHTMLTemplate)
    const homeElm = document.getElementById('home-listings')
    // @ts-ignore
    homeElm.innerHTML = homeHTMLContent
  }
}