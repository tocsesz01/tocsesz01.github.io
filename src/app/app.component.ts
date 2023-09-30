import { Component } from '@angular/core';
import { ApigetService } from 'src/services/apiget.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public mydata: any;
  

  constructor(private apiget: ApigetService) { }

  
ngOnInit(): void{
    this.getData();
}
  
getData(): void{
  this.apiget.getData().subscribe((data) =>{
    this.mydata = data;
  })
}
}

