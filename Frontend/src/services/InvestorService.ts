import axios from "axios";
import { Investor } from "../types/InvestorInterface";
import { BASE_URL } from "../types/variables";

const API_URL = `${BASE_URL}/api/investors`;

export const getInvestors = async (): Promise<Investor[]> => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const getInvestor = async (id: any): Promise<Investor> => {
  const response = await axios.get(`${API_URL}/${id}/details`);
  return response.data;
};

export const createInvestor = async (Investor: Investor): Promise<Investor> => {
  const response = await axios.post(`${API_URL}/`, Investor);
  return response.data;
};

export const updateInvestor = async (id: number, Investor: Investor): Promise<Investor> => {
  const response = await axios.put(`${API_URL}/${id}/`, Investor);
  return response.data;
};

export const deleteInvestor = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}/`);
};
