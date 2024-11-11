import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteAddComponent } from './components/universite-add/universite-add.component';
import { UniversiteListComponent } from './components/universite-list/universite-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/universites', pathMatch: 'full' },
  { path: 'universites', component: UniversiteListComponent },
  { path: 'add-universite', component: UniversiteAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
