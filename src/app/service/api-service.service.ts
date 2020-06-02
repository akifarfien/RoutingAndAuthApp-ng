import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http : HttpClient) { }

  getData(){
    const dataValue = this.http.get(`https://rickandmortyapi.com/api/character`);
    return dataValue;
  }

  getOneId(id:number){
    const dataValue = this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
    return dataValue;
  }
}
