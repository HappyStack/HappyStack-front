import { Injectable } from "@angular/core";
import { Api } from "./api";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { Item } from "../models";

@Injectable({
    providedIn: 'root',
})
export class ItemApiService extends Api {

    constructor(private http: HttpClient) {
        super()
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