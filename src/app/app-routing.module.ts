import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { RandomComponent } from './pages/random/random.component';
import { SearchComponent } from './pages/search/search.component';
import { CocktailComponent } from './pages/cocktail/cocktail.component';

const routes: Routes = [{
  path: '',
  component: RandomComponent,
  title: "Cocktail chooser - Random"
},
{
  path: 'about',
  component: AboutComponent,
  title: "Cocktail chooser - About"
},
{
  path: 'search',
  component: SearchComponent,
  title: "Cocktail chooser - Search"
},
{
  path: 'cocktail',
  component: CocktailComponent,
  title: "Cocktail chooser - cocktail"
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
