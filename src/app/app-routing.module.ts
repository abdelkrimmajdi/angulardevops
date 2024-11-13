import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UniversiteAddComponent } from './components/universite-add/universite-add.component';
import { UniversiteListComponent } from './components/universite-list/universite-list.component';
import { EtudiantListComponent } from './components/etudiant-list/etudiant-list.component';
import { EtudiantAddComponent } from './components/etudiant-add/etudiant-add.component';


const routes: Routes = [
  { path: '', redirectTo: '/universites', pathMatch: 'full' },
  { path: 'universites', component: UniversiteListComponent },
  { path: 'add-universite', component: UniversiteAddComponent },
  { path: 'etudiants', component: EtudiantListComponent },
  { path: 'add-etudiants', component: EtudiantAddComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
