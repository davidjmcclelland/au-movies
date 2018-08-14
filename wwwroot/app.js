import {HttpClient} from 'aurelia-http-client';

export class App {
   constructor() {
       this.message = '';
       // not ideal, but expedient - better to inject
       this.http = new HttpClient();
   }

   activate() {
       this.message = 'Hello World from Aurelia!';
       // this needs to be an async promise arrow function
       return this.http.get('/movies.json')
                       .then(response => {
                           this.movies = response.content;
                       })
   }

    changeMessage() {
       this.message = 'Goodbye ES5!';
   }
}