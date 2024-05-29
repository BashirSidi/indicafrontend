import { useQuery } from "@tanstack/react-query";

import { homeData, detailsData, measuresData, kpisData, controlData } from "../api/campus.service";

export const useHomeDataQuery = () => {
  return useQuery({
    queryFn: () => homeData(),
    queryKey: ["homeData"],
    staleTime: 300000,
    refetchInterval: 300000,
  });
};

export const useDetailsDataQuery = () => {
  return useQuery({
    queryFn: () => detailsData(),
    queryKey: ["detailsData"],
    staleTime: 300000,
    refetchInterval: 300000,
  });
};

export const useMeasuresDataQuery = () => {
  return useQuery({
    queryFn: () => measuresData(),
    queryKey: ["measuresData"],
    staleTime: 300000,
    refetchInterval: 300000,
  });
};

export const useKpisDataQuery = () => {
  return useQuery({
    queryFn: () => kpisData(),
    queryKey: ["kpisData"],
    staleTime: 300000,
    refetchInterval: 300000,
  });
};

export const useControlDataQuery = () => {
  return useQuery({
    queryFn: () => controlData(),
    queryKey: ["controlData"],
    staleTime: 300000,
    refetchInterval: 300000,
  });
};
