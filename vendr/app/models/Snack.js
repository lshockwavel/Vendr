// Snack.js
import { AppState } from "../AppState.js";

export class Snack {
    constructor(data) {
       this.name = data.name || "Soylent Green"; // Default name to "Soylent Green" if not provided
       this.price = data.price || 1.00; // Default price to 1.00 if not provided
       this.imgUrl = data.imgUrl;
       this.stock = data.stock || 10; // Default stock to 5 if not provided
    }

    get snackHTMLTemplate() {
      // Check if there's enough money to buy the snack
      const isDisabled = AppState.money < this.price && this.stock < 0 ? 'disabled' : ''; /* Future planning on adding stock items */
      
      return /*html*/`
      <div class="col-md-4 my-2">
        <div class="bg-black text-light rounded-3">
          <img class="rounded" src="${this.imgUrl}" alt="${this.name}">
          <div class="d-flex justify-content-between align-items-center p-2">
            <div class="text-start">
              <h5 class="mb-1">${this.name}</h5>
              <p class="mb-1 text-success fw-bold">$${this.price.toFixed(2)}</p>
              <p class="mb-0 text-gray">Stock: ${this.stock}</p>
            </div>
            <div>
              <button class="btn btn-primary" onclick="app.SnacksController.buySnack('${this.name}')" ${isDisabled}>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      `;
    }
 }