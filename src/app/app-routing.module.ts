import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeRComponent} from "./reactive/memory leaks/resolver/home-r/home-r.component";
import {homeResolver} from "./reactive/memory leaks/resolver/resolvers/home.resolver";

const routes: Routes = [
  {
    path:'',
    component: HomeRComponent,
    resolve: {
      home: homeResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
