// Snack.js
import { AppState } from "../AppState.js";

export class Snack {
    constructor(data) {
       this.name = data.name || "Soylent Green"; // Default name to "Soylent Green" if not provided
       this.price = data.price || 1.00; // Default price to 1.00 if not provided
       this.imgUrl = data.imgUrl;
       this.code = data.code || this.generateCode(); // Generate a code if not provided??????
       this.stock = data.stock || 10; // Default stock to 5 if not provided
    }

    // get snackHTMLTemplate() {
    //     return /*html*/`
    //     <div class="col-md-4 my-2">
    //       <div class="bg-black text-light rounded-3">
    //         <img class="rounded" src="${this.imgUrl}" alt="${this.name}">
    //         <div class="d-flex justify-content-between align-items-center">
    //           <div>
    //             <p>${this.name}</p>
    //             <p>${this.price}</p>
    //           </div>
    //           <div>
    //             <button class="btn btn-primary" onclick="app.SnacksController.buySnack('${this.name}')">Add to Cart</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     `;
    // }

    get snackHTMLTemplate() {
      const isDisabled = AppState.money < this.price ? 'disabled' : '';
      return /*html*/`
      <div class="col-md-4 my-2">
        <div class="bg-black text-light rounded-3">
          <img class="rounded" src="${this.imgUrl}" alt="${this.name}">
          <div class="d-flex justify-content-between align-items-center">
            <div>
              <p>${this.name}</p>
              <p>${this.price}</p>
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