import {inject} from "aurelia-framework";
import {MovieData} from "./movieData";

@inject(MovieData)
export class App {

    constructor(movieData) {        
        this.movieData = movieData;
    }
   
    activate() {
        
        return this.movieData
                   .getAll()
                   .then(movies => this.movies = movies)
       // in English: when the requested movies are returned for my request,
       // set this.movies property equal to those requested movies
    }

}
