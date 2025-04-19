import { SnacksController } from "./controllers/SnacksController.js"

class App {

    SnacksController = new SnacksController()

}

window['app'] = new App()


