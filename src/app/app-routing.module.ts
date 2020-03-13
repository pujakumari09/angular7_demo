import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';


const routes: Routes = [
  {path : "home", component : HomeComponent},
  {path : "contactus", component : ContactusComponent},
  {path : "new-cmp", component : NewCmpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } export const
RoutingComponent = [HomeComponent, ContactusComponent, NewCmpComponent]; 
