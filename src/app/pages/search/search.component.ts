import { Component } from '@angular/core';
import { ApigetService } from 'src/services/apiget.service';
import { OnInit } from '@angular/core';
import { createInjectableType } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  public mydata: any;
  public searchresult: any;
  public chosenId: string;

  constructor(private apiget: ApigetService){}

  ngOnInit(): void{}

  getValue(value: string){
    this.searchresult = value;
  }

  getSearchResults(): void{
    console.log(this.mydata)
    this.apiget.getDataSearch(this.searchresult).subscribe((data) =>{
      this.mydata = data;
    });
  }

  getChosenId(chosen :string): void{
    console.log('got ID:', chosen)
    this.apiget.loadedId = chosen;
  }

  getId(id: string){
    return this.chosenId;
  }

}
