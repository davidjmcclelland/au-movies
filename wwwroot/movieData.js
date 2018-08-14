import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

let baseUrl = './movies.json';

@inject(HttpClient)
export class MovieData {

    constructor(httpClient) {
        this.http = httpClient;
    }

    getAll() {
        // this needs to be an async promise arrow function
        return this.http.get(baseUrl)
            .then(response => {
                return response.content;
            });
    }
}