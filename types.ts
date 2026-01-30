
export interface LibraryItem {
  id: string;
  title: string;
  author?: string;
  category: string;
  subType: string;
  description: string;
  year?: number;
  type: string;
  url: string;
  cover?: string;
}

export interface ResourceCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  subTypes: string[];
  items: LibraryItem[];
}

export interface ProposalLink {
  label: string;
  url: string;
}

export interface Proposal {
  id: number;
  title: string;
  description: string;
  details?: string[];
  notice?: string;
  links?: ProposalLink[];
}

export interface Petition {
  id: string;
  title: string;
  objective: string;
  description: string;
  formUrl: string;
  fullTextView: AppView;
}

export type Language = 'pt' | 'en' | 'es';

export type AppView = 
  | 'inicio' 
  | 'quem-somos' 
  | 'propostas' 
  | 'biblioteca' 
  | 'denuncias' 
  | 'abaixo-assinado' 
  | 'contato' 
  | 'carta-reclamacao' 
  | 'reivindicacao-odio' 
  | 'reivindicacao-acesso';
