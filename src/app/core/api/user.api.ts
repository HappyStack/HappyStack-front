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

}
