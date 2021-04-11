import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { ISwagger } from './swagger';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _url : string = "/assets/data/employees.json";
  private _url2 : string = "/assets/data/swaggerAPI.json";
  private _url3 : string = "/assets/data/menu";
  constructor(private http:HttpClient) { }

  getEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this._url);
  }

  getMenuList(): Observable<ISwagger[]>{
    return this.http.get<ISwagger[]>(this._url2);
  }

  getSpecificItem(id:string){
    return this.http.get<ISwagger>(this._url3+id+".json");
  }
}
