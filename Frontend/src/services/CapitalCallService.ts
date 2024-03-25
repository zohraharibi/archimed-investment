import axios from "axios";
import { CapitalCall } from "../types/CapitalCallInterface";
import { Investor } from "../types/InvestorInterface";
import { BASE_URL } from "../types/variables";

const API_URL = `${BASE_URL}/api/capital-calls`;


export const getCapitalCalls = async (): Promise<CapitalCall[]> => {
  const response = await axios.get(`${API_URL}`);
  return response.data;
};

export const getCapitalCall = async (id: any): Promise<CapitalCall> => {
  const response = await axios.get(`${API_URL}/${id}/`);
  return response.data;
};

export const createCapitalCall = async (capitalCall: CapitalCall): Promise<CapitalCall> => {
  const response = await axios.post(`${API_URL}/`, capitalCall);
  return response.data;
};

export const updateCapitalCall = async (id: any, capitalCall: CapitalCall): Promise<CapitalCall> => {
  const response = await axios.put(`${API_URL}/${id}/`, capitalCall);
  return response.data;
};

export const deleteCapitalCall = async (id: number): Promise<void> => {
  await axios.delete(`${API_URL}/${id}/`);
};

export const getInvestorByCapitalCall = async (id: number): Promise<Investor> => {
  const response = await axios.get(`${API_URL}/${id}/investor`);
  return response.data;
};


