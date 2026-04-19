export interface Claim {
  id: number;
  claimNumber: string;
  incidentDate: string;
  declarationDate: string;
  description: string;
  estimatedAmount: number;
  status: 'DECLARED' | 'IN_PROGRESS' | 'UNDER_REVIEW' | 'APPROVED' | 'REJECTED' | 'CLOSED';
  contractId: number;
  handlerId?: number;
}