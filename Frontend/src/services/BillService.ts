import axios from 'axios';
import { Bill } from '../types/BillInterface';
import { CapitalCall } from '../types/CapitalCallInterface';

const BASE_URL = 'http://localhost:8000/api/bills/';

export const getBills = async (): Promise<Bill[]> => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const getBill = async (id: number): Promise<Bill> => {
  const response = await axios.get(`${BASE_URL}/${id}`);
  return response.data;
};

export const createBill = async (bill: Bill): Promise<Bill> => {
  const response = await axios.post<Bill>(BASE_URL, bill);
  return response.data;
};

export const updateBill = async (id: number, bill: Bill): Promise<Bill> => {
  const response = await axios.put<Bill>(`${BASE_URL}/${id}`, bill);
  return response.data;
};

export const deleteBill = async (id: number): Promise<void> => {
  await axios.delete(`${BASE_URL}/${id}`);
};

export const getBillsByInvestor = async (id: number): Promise<Bill[]> => {
    const response = await axios.get(`${BASE_URL}?investor=${id}`);
    return response.data;
  };
  
  export const getBillsByCapitalCallId = async (capitalCall: CapitalCall): Promise<Bill[]> => {
    const response = await axios.get(`${BASE_URL}?capital_call=${capitalCall.id}`);
    return response.data;
  };