export interface Card {
  title: string;
  description: string;
  image: string;
}

export interface SubService {
  id: number;
  title: string;
  description?: string;
  image?: string;
  youtubeUrl?: string; 
}

export interface Service {
  id: number;
  title: string;
  description: string;
  image?: string;
  subServices?: SubService[];
  cards?: Card[]; 
}

export interface ContactInfo {
  country: string;
  address: string;
}