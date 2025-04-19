import { AppState } from "../AppState.js"
import { snackService } from "../services/SnacksService.js";


export class SnacksController {
    constructor() {
        console.log('👋Hello from SnacksController');
        this.drawSnacks();

        // Redraw snacks to update button states and money when the page loads
        AppState.on('money', () => {
            this.drawMoney();
            this.drawSnacks();
        });
    }

    buySnack(snackName) {
        console.log('Buying snack:', snackName);
        const snack = AppState.snacks.find(s => s.name === snackName);
        if (snack) {
            snackService.buySnack(snack);
        } else {
            console.error('Snack not found:', snackName);
        }
    }

    // Method to draw the snacks in the AppState
    // This method is called when the page loads and when the snacks in AppState change
    drawSnacks() {
        const snacks = AppState.snacks;
        let snacksHTML = '';
        snacks.forEach(snack => snacksHTML += snack.snackHTMLTemplate); /* REVIEW Wait, why don't we need to import models if snackHTMLTemplate is where it's being called from? */
        const snackListElement = document.getElementById('snacks-list');
        console.log(snackListElement);
        snackListElement.innerHTML = snacksHTML;
    }
    
    // Method to add a quarter to the money in AppState
    // This method is called when the button is clicked in the HTML template
    addQuarter(){
        snackService.addQuarter();
    }

    addFranklin(){
        snackService.addFranklin();
    }

    // Method to draw the total money in the AppState
    // This method is called when the money in AppState changes    
    drawMoney() {
        const moneyElement = document.getElementById('money-total');
        moneyElement.innerText = AppState.money.toFixed(2);
    }

}