import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { ClaimsList } from './features/claims/claims-list/claims-list';
import { ClaimForm } from './features/claims/claim-form/claim-form';
import { HandlersList } from './features/handlers/handlers-list/handlers-list';
import { ContractsList } from './features/contracts/contracts-list/contracts-list.component';
export const routes: Routes = [
  { path: '', component: Dashboard },
  { path: 'claims', component: ClaimsList },
  { path: 'claims/new', component: ClaimForm },
  { path: 'contracts', component: ContractsList },
  { path: 'handlers', component: HandlersList }
];