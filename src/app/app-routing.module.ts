import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  
{
  path:'about',
  loadChildren : () => import('./ui/about/about.module').then(m => m.AboutModule)
},
{
  path:'blog',
  loadChildren : () => import('./ui/blog/blog.module').then(m => m.BlogModule)
},
{
  path: 'contact',
  loadChildren : () => import('./ui/contact/contact.module').then(m => m.ContactModule)
},
{
  path: 'resume',
  loadChildren : () => import('./ui/resume/resume.module').then(m => m.ResumeModule)
},
{
  path:'works',
  loadChildren : () => import('./ui/works/works.module').then(m => m.WorksModule)
},
{path:'', pathMatch:'full', redirectTo: '/about'},
{path: '**', redirectTo: '/about'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
