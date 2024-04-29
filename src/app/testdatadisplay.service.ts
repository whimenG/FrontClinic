import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TestClass} from "./test-data-display/testclass";

@Injectable({
  providedIn: 'root'
})
export class TestdatadisplayService {

  constructor(private httpClient: HttpClient) { }
    gettest() : Observable<TestClass[]> {
    return this.httpClient.get<TestClass[]>("http://localhost:8080/hardlist");
    }
    gettestdb() : Observable<TestClass[]> {
    return this.httpClient.get<TestClass[]>("http://localhost:8080/dbdata");
    }



}
