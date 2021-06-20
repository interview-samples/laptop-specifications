export interface ComputerPartsCategory {
  name: string;
  options: ComputerPartsOption[];
}

export interface ComputerPartsOption {
  name: string;
  amount: number;
  default: boolean;
}

export interface ComputerPartsData {
  categories: ComputerPartsCategory[];
}
