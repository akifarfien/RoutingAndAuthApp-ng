import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   respData = [];
   hasNext = '';
   hasPrevious = '';

  constructor(private apiservice:ApiServiceService) { }

  ngOnInit(): void {
    this.getDataFromApi();
  }

   getDataFromApi(){
    this.apiservice.getData().subscribe( (response : any) => {
      this.hasNext = response.info.next;
      this.hasPrevious = response.info.prev;
     this.respData = [...response.results];
    })
  }

  next(){
    if(!(this.hasNext === null)){
    this.apiservice.getNext(this.hasNext).subscribe( (response : any) => {
      console.log(response);
      this.hasNext = response.info.next;
      this.hasPrevious = response.info.prev;
     this.respData = [...response.results];
    })
    }
  }
  
  previous(){
    if(!(this.hasPrevious === null)){
      this.apiservice.getPrev(this.hasPrevious).subscribe( (response : any) => {
        console.log(response);
        this.hasNext = response.info.next;
        this.hasPrevious = response.info.prev;
        this.respData = [...response.results];
      })
      }
  }

}
