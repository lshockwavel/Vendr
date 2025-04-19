import { Snack } from './models/Snack.js'
import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'

class ObservableAppState extends EventEmitter {

// AppState.js
snacks = [
  new Snack({
    name: 'Lasagna', 
    price: 3.50, 
    imgUrl: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }),
  new Snack({
    name: 'Pizza',
    price: 2.50,
    imgUrl: 'https://images.unsplash.com/photo-1593504049359-74330189a345?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }),
  new Snack({
    name: 'SpaPeggy And Meatballs',
    price: 4.00,
    imgUrl: 'https://images.unsplash.com/photo-1635264685671-739e75e73e0f?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }),
  new Snack({
    name: 'Tacos',
    price: 2.00,
    imgUrl: 'https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=2094&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }),
  new Snack({
    name: 'Burrito',
    price: 3.00,
    imgUrl: 'https://images.unsplash.com/photo-1585238342107-49a3cdace47f?q=80&w=1967&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }),
  new Snack({
    name: 'Nachos',
    price: 2.50,
    imgUrl: 'https://images.unsplash.com/photo-1582169296194-e4d644c48063?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }),
  new Snack({
    name: 'Cheeseburger',
    price: 3.50,
    imgUrl: 'https://images.unsplash.com/photo-1552718752-c682d315b136?q=80&w=2132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  }),
  new Snack({
    name: 'Hotdog',
    price: 2.50,
    imgUrl: 'https://images.unsplash.com/photo-1496905583330-eb54c7e5915a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  })
 ]
 
 money = 0

}


export const AppState = createObservableProxy(new ObservableAppState());

console.log("AppState", AppState);