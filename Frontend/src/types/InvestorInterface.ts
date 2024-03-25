import { Bill } from './BillInterface'

export interface Investor {
    id: number;
    name: string;
    iban: string;
    email: string;
    date_of_first_investment: Date;
    bills: Bill[];
  }