import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { RandomComponent } from './pages/random/random.component';

const routes: Routes = [{
  path: '',
  component: RandomComponent,
  title: "Cocktail chooser"
},
{
  path: 'about',
  component: AboutComponent,
  title: "Cocktail chooser"
},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
