import { Component } from '@angular/core';
import { ApigetService } from 'src/services/apiget.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent implements OnInit {
  public mydata: any;
  

  constructor(private apiget: ApigetService) { }

  
ngOnInit(): void{
    this.getDataRandom();
}
  
getDataRandom(): void{
  this.apiget.getDataRandom().subscribe((data) =>{
    this.mydata = data;
  })
}

}
