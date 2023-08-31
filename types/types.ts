export interface ComponentApiProps {
  id: number;
  propsName: string;
  propsDescription: string;
  default?: string;
  propsType: string | string[];
}

export interface Sections {
  id: number;
  idName: string;
}
