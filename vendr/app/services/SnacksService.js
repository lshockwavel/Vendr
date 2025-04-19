import { AppState } from "../AppState.js";


class SnacksService {
    constructor() {
        console.log('👋Hello from SnacksService')
    }

    addQuarter(){
        /* modifies AppState */
        AppState.money += 0.25;
        console.log('Money:', AppState.money);
    }

    addFranklin(){
        /* modifies AppState */
        AppState.money += 100.00;
        console.log('Money:', AppState.money);
    }

    // Method to buy a snack
    // This method is called when the button is clicked in the HTML template
    buySnack(snack) {

        // It checks if the user has enough money to buy the snack
        if (AppState.money >= snack.price) 
        {
            AppState.money -= snack.price;
            console.log('Snack bought:', snack.name);
        }
        else
        {
            console.error('Not enough money to buy snack:', snack.name);
        }
    }

    
}

export const snackService = new SnacksService();