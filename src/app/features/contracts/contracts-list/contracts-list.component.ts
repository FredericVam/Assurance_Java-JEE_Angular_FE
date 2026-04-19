import { Component, OnInit, inject, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { finalize } from 'rxjs';
import { ContractsService } from '../../../core/services/contracts.service';
import { Contract } from '../../../core/models/contract.model';

@Component({
  selector: 'app-contracts-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h2>Liste des contrats</h2>

    <p>loading = {{ loading }}</p>
    <p>nombre de contrats = {{ contracts.length }}</p>
    <p>error = {{ errorMessage }}</p>

    <p *ngIf="loading">Chargement des contrats...</p>

    <table *ngIf="contracts.length > 0"
           border="1"
           cellpadding="8"
           cellspacing="0"
           style="width: 100%; margin-top: 10px;">
      <thead>
        <tr>
          <th>ID</th>
          <th>Numéro</th>
          <th>Souscripteur</th>
          <th>Type</th>
          <th>Statut</th>
          <th>Date de début</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let contract of contracts">
          <td>{{ contract.id }}</td>
          <td>{{ contract.contractNumber }}</td>
          <td>{{ contract.subscriberName }}</td>
          <td>{{ contract.contractType }}</td>
          <td>{{ contract.status }}</td>
          <td>{{ contract.startDate }}</td>
        </tr>
      </tbody>
    </table>

    <p *ngIf="!loading && contracts.length === 0 && !errorMessage">
      Aucun contrat trouvé.
    </p>

    <p *ngIf="errorMessage">{{ errorMessage }}</p>
  `
})
export class ContractsList implements OnInit {
  private contractsService = inject(ContractsService);
  private cdr = inject(ChangeDetectorRef);

  contracts: Contract[] = [];
  errorMessage = '';
  loading = true;

  ngOnInit(): void {
    console.log('ngOnInit ContractsList');

    this.contractsService.getAll()
      .pipe(
        finalize(() => {
          this.loading = false;
          console.log('finalize appelé, loading =', this.loading);
          this.cdr.detectChanges();
        })
      )
      .subscribe({
        next: (data: Contract[]) => {
          console.log('CONTRACTS FROM BACKEND:', data);
          this.contracts = [...data];
          this.errorMessage = '';
          this.cdr.detectChanges();
        },
        error: (error) => {
          console.error('Erreur lors du chargement des contrats :', error);
          this.errorMessage = 'Impossible de charger les contrats.';
          this.cdr.detectChanges();
        }
      });
  }
}