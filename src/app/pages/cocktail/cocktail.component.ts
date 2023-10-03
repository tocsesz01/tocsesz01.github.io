import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ApigetService } from 'src/services/apiget.service';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.css']
})
export class CocktailComponent implements OnInit{
 
  constructor(private apiget: ApigetService){}
  
  public chosenID = this.apiget.loadedId;
  public cocktail: any;
  ngOnInit(): void {
      console.log(this.cocktail);
      this.apiget.getDataId(this.chosenID).subscribe((cocktail) =>
      {
        this.cocktail = cocktail;
      })
  }
  
  
}
