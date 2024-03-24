import { CapitalCall } from './CapitalCallInterface'
import { Investor } from './InvestorInterface'

export enum BillType {
    MEMBERSHIP = 'membership',
    UPFRONT = 'upfront',
    YEARLY = 'yearly',
  }
  

export interface Bill {
    id: number;
    capital_call: CapitalCall | null;
    investor: Investor;
    bill_type: BillType;
    amount: number;
    fee_percentage: number;
  }