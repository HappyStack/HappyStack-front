import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { Api } from "./api";
import { HttpClient } from "@angular/common/http";
import { Item } from "../models";

@Injectable({
    providedIn: 'root',
})
export class StackApiService extends Api {

    constructor(
        private http: HttpClient
    ) {
        super()
    }

    addItem(item: Item) {
        return this.http.post(`${this.domain}/`, item)
    }
    
    fetchById(id: number) { //: Request<Item[]>
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
