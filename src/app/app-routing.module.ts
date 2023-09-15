import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { StationsComponent } from './stations/stations.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { TestimonialPageComponent } from './testimonial-page/testimonial-page.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent
  },
  {
    path:'contact',
    component:ContactUsComponent
  }
  ,
  {
    path:'testimonial',
    component:TestimonialPageComponent
  }
  ,
  {
    path:'about',
    component:AboutUsComponent
  }
  ,
  {
    path:'stations',
    component:StationsComponent
  }
  ,
  {

    path:'security',
    loadChildren:()=>import('./authentication/authentication.module').then(m=>m.AuthenticationModule)

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
