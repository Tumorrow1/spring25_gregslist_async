import { AppState } from "../AppState.js";
import { housesService } from "../services/HousesService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";

export class HousesController {
  constructor() {
    AppState.on(`houses`, this.drawHouses)
    console.log(`houses son`);
    this.getHouses()
  }

  async getHouses() {
    try {
      await housesService.getHouses()
    } catch (error) {
      console.error(`couldnt get houses`, error);
      Pop.error(error, `couldnt get house`)
    }
  }

  drawHouses() {
    const houses = AppState.houses
    let content = ``
    houses.forEach(house => content += house.houseCard)
    const housesElm = document.getElementById(`houseListings`)
    housesElm.innerHTML = content
  }
  async createHouseListing() {
    try {
      event.preventDefault()
      const houseFormElm = event.target
      const rawHouseData = getFormData(houseFormElm)
    } catch (error) {

    }
  }
}