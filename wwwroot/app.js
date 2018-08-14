/*
import {sayHello} from 'greeter';

sayHello();*/

// replace the above with a viewmodel aurelia expects

export class App {
   constructor() {
       this.message = '';
   }

   activate() {
       this.message = 'Hello World from Aurelia!';
   }

    changeMessage() {
       this.message = 'Goodbye ES5!';
   }
}