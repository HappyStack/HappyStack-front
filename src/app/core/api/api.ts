import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { URLS } from '../constant';

export class Api {

    readonly domain: string = URLS.api;
    constructor() {}
}