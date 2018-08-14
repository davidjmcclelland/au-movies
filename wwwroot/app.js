import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

//es7 decorator
@inject(HttpClient)
export class App {

   constructor(httpClient) {
       this.message = '';
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

}