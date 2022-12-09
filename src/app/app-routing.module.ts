import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Compage1Component } from './compage1/Compage1.component';
import { Compage2Component } from './compage2/Compage2.component';
import { Compage3Component } from './compage3/Compage3.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'page1',component:Compage1Component},
  {path:'page2',component:Compage2Component},
  {path:'page3',component:Compage3Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
