import { Component } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/model/etudiant.model';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css']
})
export class EtudiantAddComponent {
  etudiant: Etudiant = {
    idEtudiant: 0,
    nomEtudiant: '',
    prenomEtudiant: '',
    cinEtudiant: 0,
    dateNaissance: new Date(),
    reservations: []
  };

  constructor(private etudiantService: EtudiantService) {}

  addEtudiant(): void {
    this.etudiantService.addEtudiants([this.etudiant]).subscribe(
      (response) => {
        console.log('Étudiant ajouté:', response);
      },
      (error) => {
        console.error("Erreur lors de l'ajout de l'étudiant:", error);
      }
    );
  }
}
