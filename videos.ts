export interface Video {
  id: number;
  title: string;
  description: string;
  link: string;
  embed: boolean; // true = reproduz internamente, false = redireciona
}

export const videos: Video[] = [
  {
    id: 1,
    title: "Educação Crítica: Alternativas Pedagógicas",
    description: "Diretor: Germán Doin, Produtora: Verónica Guzzo e equipe, Ano: 2012, Temática: Educação crítica / Alternativas pedagógicas / Liberdade de aprendizagem",
    link: "https://www.youtube.com/embed/BCVkRA69THI",
    embed: true
  },
  {
    id: 2,
    title: "Meu Amigo Nietzsche",
    description: "Curta-metragem (Drama/Comédia) - Direção: Fáuston da Silva - Ano: 2012",
    link: "https://www.youtube.com/embed/DN0qoSCJYlI",
    embed: true
  }
];
