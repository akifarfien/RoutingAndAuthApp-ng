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

  getNext(nextUrl){
    const dataValue = this.http.get(nextUrl);
    return dataValue;
  }

  getPrev(previousUrl){
    const dataValue = this.http.get(previousUrl);
    return dataValue;
  }
}
