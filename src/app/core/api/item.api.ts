import { Injectable } from "@angular/core";
import { Api } from "./api";
import { HttpClient } from "selenium-webdriver/http";

@Injectable({
    providedIn: 'root',
})
export class ItemApiService extends Api {

    constructor(private httpClient: HttpClient) {
        super()
    }

    
}