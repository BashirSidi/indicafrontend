import { api } from "../../lib/api";

import { 
  type CompanyDataType,
  type DetailsType,
  type MeasuresKpisType,
  type ControlType,
 } from "../../types/campus";

export const homeData = async (): Promise<CompanyDataType> => {
  const { data } = await api.get<CompanyDataType>(`/index`);
  return data;
};

export const detailsData = async (): Promise<DetailsType[]> => {
  const { data } = await api.get<DetailsType[]>(`/api/details/`);
  return data;
};

export const measuresData = async (): Promise<MeasuresKpisType[]> => {
  const { data } = await api.get<MeasuresKpisType[]>(`/index`);
  return data;
};

export const kpisData = async (): Promise<MeasuresKpisType[]> => {
  const { data } = await api.get<MeasuresKpisType[]>(`/index`);
  return data;
};

export const controlData = async (): Promise<ControlType[]> => {
  const { data } = await api.get<ControlType[]>(`/index`);
  return data;
};