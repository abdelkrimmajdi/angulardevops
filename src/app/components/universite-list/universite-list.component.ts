import { Component, OnInit } from '@angular/core';
import { UniversiteService } from '../../services/universite.service';
import { Universite } from 'src/model/universite.model';

@Component({
  selector: 'app-universite-list',
  templateUrl: './universite-list.component.html',
  styleUrls: ['./universite-list.component.css'],
})
export class UniversiteListComponent implements OnInit {
  universites: Universite[] = [];
  displayedColumns: string[] = ['nomUniversite', 'adresse'];

  constructor(private universiteService: UniversiteService) {}

  ngOnInit(): void {
    this.universiteService.getUniversites().subscribe(
      (data) => {
        this.universites = data;
      },
      (error) => {
        console.error('Error retrieving universities:', error);
      }
    );
  }
}
