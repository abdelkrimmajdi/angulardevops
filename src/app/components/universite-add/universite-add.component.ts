import { Component } from '@angular/core';
import { UniversiteService } from '../../services/universite.service';
import { Universite } from 'src/model/universite.model';

@Component({
  selector: 'app-universite-add',
  templateUrl: './universite-add.component.html',
  styleUrls: ['./universite-add.component.css'],
})
export class UniversiteAddComponent {
  universite: Universite = { idUniversite: 0, nomUniversite: '', adresse: '' };

  constructor(private universiteService: UniversiteService) {}

  addUniversite(): void {
    this.universiteService.addUniversite(this.universite).subscribe(
      (response) => {
        console.log('Université ajoutée:', response);
      },
      (error) => {
        console.error("Erreur lors de l'ajout de l'université:", error);
      }
    );
  }
}
