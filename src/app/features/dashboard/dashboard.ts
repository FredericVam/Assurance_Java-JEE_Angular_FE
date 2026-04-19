import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Api } from '../../core/services/api';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

  private api = inject(Api);

  message = 'ok';

  testerBackend() {
    this.api.getHello().subscribe({
      next: (res: string) => this.message = res,
      error: () => this.message = 'Erreur backend'
    });
  }
}