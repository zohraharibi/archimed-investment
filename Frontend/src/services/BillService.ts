import axios from 'axios';
import { Bill, BillAmountResponse } from '../types/BillInterface';
import { CapitalCall } from '../types/CapitalCallInterface';
import { BASE_URL } from '../types/variables';


const API_URL = `${BASE_URL}/api/bills/`;

export const getBills = async (): Promise<Bill[]> => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getBill = async (id: number): Promise<Bill> => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const createBill = async (bill: Bill): Promise<Bill> => {
  const response = await axios.post<Bill>(API_URL, bill);
  return response.data;
};

export const updateBill = async (id: number, bill: Bill): Promise<Bill> => {
  const response = await axios.put<Bill>(`${API_URL}/${id}`, bill);
  return response.data;
};

export const deleteBill = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};

export const getBillsByInvestor = async (id: number): Promise<Bill[]> => {
    const response = await axios.get(`${API_URL}?investor=${id}`);
    return response.data;
  };
  
  export const getBillsByCapitalCallId = async (capitalCall: CapitalCall): Promise<Bill[]> => {
    const response = await axios.get(`${API_URL}?capital_call=${capitalCall.id}`);
    return response.data;
  };

  export const calculateBill = async (bill: Bill): Promise<BillAmountResponse> => {
    const response = await axios.post<BillAmountResponse>(`${API_URL}calculate-bill/`, bill);
    return response.data;
  };

  export const calculateTotalAmountPerCapitalCall = async (capital_call_id: any): Promise<any> => {
    //This service allows you to sum up all the bill amounts associated with a capital call and returns the total_amount
    const response = await axios.get(`${API_URL}calculate-bill/${capital_call_id}`);
    return response.data;
  };



