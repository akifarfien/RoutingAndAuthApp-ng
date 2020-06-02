import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
   respData = [];
  constructor(private apiservice:ApiServiceService) { }

  ngOnInit(): void {
    this.getDataFromApi();
  }

   getDataFromApi(){
    this.apiservice.getData().subscribe( (response : any) => {
     this.respData = [...response.results];
     console.log(this.respData);
    })
  
  }

  

}
