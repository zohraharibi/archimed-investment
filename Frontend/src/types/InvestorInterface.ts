import { CapitalCall } from './CapitalCallInterface'
import { Bill } from './BillInterface'

export interface Investor {
    id: number;
    name: string;
    iban: string;
    email: string;
    date_of_first_investment: Date;
    capital_calls: CapitalCall[];
    bills: Bill[];
  }