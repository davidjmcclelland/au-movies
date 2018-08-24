import {inject} from "aurelia-framework";
import {HttpClient} from "aurelia-http-client";

let baseUrl = "./movies/movies.json";

@inject(HttpClient)
export class MovieData {

    constructor(httpClient) {
        this.http = httpClient;
    }

    getById(id) {
        /*return this.http.get(`${baseUrl}/${id}`)
                        .then(response => response.content);*/

        // not using api? use json directly:
        // to truly get my id and not position, change to non-consecutive ids
        // and do a lookup for the id of the response.content members until you find a match
        return this.http.get(baseUrl)
            .then(response => {
                return response.content[id];
            });
    }

    getAll() {
        return this.http.get(baseUrl)
            .then(response => {
                return response.content;
            });
    }

    save(movie){
        return this.http.put(baseUrl, movie);
    }
}