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
    investor: Investor | undefined;
    bill_type: BillType | undefined;
    amount: number | undefined;
    fee_percentage: number | undefined;
  }

export interface BillAmountResponse {
    bill_amount: string;
  }
    