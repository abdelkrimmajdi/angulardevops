// etudiant.model.ts
export interface Etudiant {
  idEtudiant: number;
  nomEtudiant: string;
  prenomEtudiant: string;
  cinEtudiant: number;
  dateNaissance: Date;
  reservations?: Reservation[];
}

// reservation.model.ts
export interface Reservation {
  idReservation: number;
  
}
