import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PortofolioComponent } from './portofolio/portofolio.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:"",component:HomeComponent,title:"Home"},
  {path:"about",component:AboutComponent,title:"About"},
  {path:"contact",component:ContactComponent,title:"Contact"},
  {path:"portofolio",component:PortofolioComponent,title:"Portofolio"},
  {path:"**",component:NotFoundComponent,title:"404"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:"enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
