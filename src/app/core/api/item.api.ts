import { Injectable } from "@angular/core";
import { Api } from "./api";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Item, IItem } from "../models";

@Injectable({
    providedIn: 'root',
})
export class ItemApiService extends Api {

    private path = 'users' // Waiting for Api

    constructor(private http: HttpClient) {
        super()
    }

    addItem(userId: number, item: IItem) {
        return this.http.post(`${this.domain}/${this.path}/${userId}`, item)
    }

    editItems(userId: number, item: IItem) {
        return this.http.put(`${this.domain}/${this.path}/${userId}`, item)
    }

    fetchById(id: number): Observable<any> {

        //return this.http.get<any>(`${this.domain}/item/${id}`)
        return of({
            "id": 7,
            "name": "Vitamine k",
            "dosage": "",
            "takenToday": false,
            "servingSize": 1,
            "servingType": "pill",
            "timing": "0001-01-01T00:00:00Z"
        })
    }
    
}