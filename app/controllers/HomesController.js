import { AppState } from "../AppState.js";

export class HomesController {
  constructor() {
    console.log('HomesController has been loaded');
    AppState.on('homes', this.drawHomes)

  }

  drawHomes() {
    console.log("Drawing Homes");

  }
}