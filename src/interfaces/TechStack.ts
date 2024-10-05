export interface TechStackItem {
  name: string;
  info?: string;
}

export interface TechStackSection {
  sectionName: string;
  items: TechStackItem[];
}

