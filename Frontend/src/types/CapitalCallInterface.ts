import { Bill } from './BillInterface'
import { Investor } from './InvestorInterface'

export enum CapitalCallStatus {
    VALIDATED = 'validated',
    SENT = 'sent',
    PAID = 'paid',
    OVERDUE = 'overdue',
  }
  
  export interface CapitalCall {
    id: number;
    investor: Investor;
    due_date: Date | string;
    created_at: Date;
    total_amount: number;
    status: CapitalCallStatus;
    bills: Bill[];
  }


