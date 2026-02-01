export interface Book {
  id: number;
  title: string;
  author: string;
  date: string;
  theme: string;
  link: string; // link direto para PDF, Google Drive, etc.
}

export const books: Book[] = [
  {
    id: 1,
    title: "A Conquista do Pão",
    author: "Peter Kropotkin",
    date: "1892",
    theme: "Anarquismo / Política",
    link: "https://drive.proton.me/urls/7120YAVQQR#F8ndHz8rHAji"
  },
  {
    id: 2,
    title: "Dom Casmurro",
    author: "Machado de Assis",
    date: "1899",
    theme: "Romance psicológico / Realismo",
    link: "https://drive.proton.me/urls/WJ9QD7CMYR#ZgEL7VPCsWbD"
  },
  {
    id: 3,
    title: "Iracema",
    author: "José de Alencar",
    date: "1865",
    theme: "Romance indianista / Nacionalismo",
    link: "https://drive.proton.me/urls/GH0RHQZ8EW#T6f8fFItH3mk"
  },
  {
    id: 4,
    title: "Vidas Secas",
    author: "Graciliano Ramos",
    date: "1938",
    theme: "Romance social / Regionalismo",
    link: "https://drive.proton.me/urls/EYM26VSWNM#7cxa6UVq7Rsz"
  },
  {
    id: 5,
    title: "Os Maias",
    author: "Eça de Queirós",
    date: "1888",
    theme: "Romance realista / Crítica social",
    link: "https://drive.proton.me/urls/CGPY0Y4FDG#MQptE8VRfRnd"
  },
  {
    id: 6,
    title: "O Manifesto Comunista",
    author: "Karl Marx & Friedrich Engels",
    date: "1848",
    theme: "Manifesto político / Socialismo",
    link: "https://drive.proton.me/urls/K1N05RMRX8#tnbvmn6fchXH"
  },
  {
    id: 7,
    title: "O Estado e a Revolução",
    author: "Vladimir Lenin",
    date: "1917",
    theme: "Política / Revolução / Marxismo",
    link: "https://drive.proton.me/urls/63NHQ3B8Q4#7lTPDLCbo8R4"
  },
  {
    id: 8,
    title: "A Ideologia Alemã",
    author: "Karl Marx & Friedrich Engels",
    date: "1932* (publicação póstuma)",
    theme: "Filosofia / Materialismo histórico",
    link: "https://drive.proton.me/urls/HGKQKM2XPR#h2cg4tjrGijU"
  },
  {
    id: 9,
    title: "Reforma ou Revolução?",
    author: "Rosa Luxemburgo",
    date: "1900",
    theme: "Política / Socialismo / Crítica a reformas graduais",
    link: "https://drive.proton.me/urls/7FY33FNQ14#1SbJMJOwjisO"
  },
  {
    id: 10,
    title: "Greve de Massas, Partidos e Sindicatos",
    author: "Rosa Luxemburgo",
    date: "1906",
    theme: "Movimento operário / Política sindical",
    link: "https://drive.proton.me/urls/PG8NKM42DM#OTCc8oyo6Bib"
  },
  {
    id: 11,
    title: "A Origem da Família, da Propriedade Privada e do Estado",
    author: "Friedrich Engels",
    date: "1884",
    theme: "Filosofia / Sociologia / Crítica social",
    link: "https://drive.proton.me/urls/EBBBR8VARW#iLU7SIAx3kVH"
  },
  {
    id: 12,
    title: "Poema Pedagógico",
    author: "Anton Makarenko",
    date: "1933",
    theme: "Educação / Pedagogia socialista",
    link: "https://drive.proton.me/urls/K1N05RMRX8#tnbvmn6fchXH"
  },
  {
    id: 13,
    title: "A Chegada de Lampião no Céu",
    author: "Rodolfo Coelho Cavalcante",
    date: "1959",
    theme: "Cordel / Literatura popular / Cultura nordestina",
    link: "https://drive.proton.me/urls/RKD64BYJA0#FDYQ1VgcoFWF"
  },
  {
    id: 14,
    title: "A Terrível História da Perna Cabeluda",
    author: "Folclore / Cordel",
    date: "Desconhecida",
    theme: "Folclore / Literatura popular",
    link: "https://drive.proton.me/urls/EBBBR8VARW#iLU7SIAx3kVH"
  },
  {
    id: 15,
    title: "Crime e Castigo",
    author: "Fiódor Dostoiévski",
    date: "1866",
    theme: "Romance psicológico / Crime / Moralidade",
    link: "https://drive.proton.me/urls/FEQ3E4YVWM#kTUbSWhiKARz"
  },
  {
    id: 16,
    title: "Livro do Desassossego",
    author: "Fernando Pessoa",
    date: "1982* (publicação póstuma)",
    theme: "Literatura modernista / Reflexão subjetiva",
    link: "https://drive.proton.me/urls/SBZQQ1FWZR#ozSKPVkk4oa1"
  },
  {
    id: 17,
    title: "Ilíada",
    author: "Homero",
    date: "séc. VIII a.C.",
    theme: "Épico / Mitologia / Guerra de Troia",
    link: "https://drive.proton.me/urls/D4EB4XYM0W#38LRX92fKn3x"
  }
];
