import { Injectable } from "@angular/core";
import { Item } from "../models";
import { HttpClient } from "@angular/common/http";
import { Api } from "./api";
import { of } from "rxjs";

@Injectable({
    providedIn: 'root',
})
export class UserApiService extends Api {

    private path = 'users'

    constructor(
        private http: HttpClient
    ) {
        super() 
    }   
    
    addItem(userId: number, item: Item) {
        return this.http.post(`${this.domain}/${this.path}/${userId}`, item)
    }
    
    fetchItems(userId: number) { //: Request<Item[]>

        //return this.http.get(`${this.domain}/${this.path}/${userId}`)

        return of([
            {
                "id": 1,
                "name": "Magnesium",
                "dosage": "some",
                "takenToday": false,
                "servingSize": 1,
                "servingType": "pill",
                "timing": "0001-01-01T00:00:00Z"
            },
            {
                "id": 7,
                "name": "Vitamine k",
                "dosage": "",
                "takenToday": false,
                "servingSize": 1,
                "servingType": "pill",
                "timing": "0001-01-01T00:00:00Z"
            },
            {
                "id": 9,
                "name": "D3",
                "dosage": "1000 UI",
                "takenToday": false,
                "servingSize": 1,
                "servingType": "pill",
                "timing": "0001-01-01T00:00:00Z"
            },
        ])
    }
}