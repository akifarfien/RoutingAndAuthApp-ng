import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from 'src/app/service/api-service.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  urlId : number;
  image;
  name;
  gender;
  origin;
  species;
  status;
  location;

  constructor(private apiservice : ApiServiceService, private http : HttpClient, 
                private activatedRoute : ActivatedRoute) { 

                  this.activatedRoute.paramMap.subscribe( (param) =>{
                    this.urlId = +param.get('id');
                  })

                }

  ngOnInit(): void {
    this.getDataById(this.urlId)
  }

getDataById(Id){
  this.apiservice.getOneId(Id).subscribe((respn : any) => {
    this.image = respn.image;
    this.name = respn.name;
    this.gender = respn.gender;
    this.location = respn.location.name;
    this.species = respn.species;
    this.origin = respn.origin.name;
    this.status = respn.status;
    console.log();
  })
}
}
