import { Component } from '@angular/core';
import { ApigetService } from 'src/services/apiget.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public drinks?: Drinks[];
  public mydata: any;
  public mydata$: any = [];
  

  constructor(private apiget: ApigetService) { }

  
ngOnInit(): void{
    this.apiget.getData().subscribe((data) =>{
      this.mydata = data;
    })
}
  

}

interface Drinks {
  strDrink: string;
}
