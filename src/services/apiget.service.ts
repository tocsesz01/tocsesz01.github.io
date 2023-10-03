import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApigetService {
  loadedId: string;
  constructor(private http: HttpClient) { 
    
  }
  
  getDataRandom(){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  }

  getDataSearch(search: string){
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + search);
  }

  getDataId(id: string){
    console.log(this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id))
    return this.http.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id);
  }


}
