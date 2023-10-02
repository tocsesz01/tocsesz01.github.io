import { Component } from '@angular/core';
import { ApigetService } from 'src/services/apiget.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  public mydata: any;
  public searchresult: any;

  constructor(private apiget: ApigetService){}

  ngOnInit(): void{

  }

  getValue(value: string){
    this.searchresult = value;
  }

  getSearchResults(): void{
    this.apiget.getDataSearch(this.searchresult).subscribe((data) =>{
      this.mydata = data;
    });
  }

}
