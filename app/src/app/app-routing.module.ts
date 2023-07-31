import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Template1Component } from './components/pages/template1/template1.component';
import { Template2Component } from './components/pages/template2/template2.component';
import { Template3Component } from './components/pages/template3/template3.component';
import { Template4Component } from './components/pages/template4/template4.component';
import { Template5Component } from './components/pages/template5/template5.component';

const routes: Routes = [
{path:'template1', component: Template1Component},
{path:'template2', component: Template2Component},
{path:'template3', component: Template3Component},
{path:'template4', component: Template4Component},
{path:'template5', component: Template5Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
