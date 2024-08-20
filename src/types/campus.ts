interface DataItem {
  key: string;
  label: string;
  icon: string;
  url: string;
}

export interface CompanyDataType {
  company_name: string;
  logo: string;
  plane: string;
  description: string;
  features: string[];
  data: DataItem[];
}

export interface DetailsType {
  id: number;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface MeasuresKpisType {
  id: number;
  name: string;
  value: number;
  created_at: string;
  updated_at: string;
}

export interface ControlType {
  id: number;
  name: string;
  status: string;
  created_at: string;
  updated_at: string;
}
