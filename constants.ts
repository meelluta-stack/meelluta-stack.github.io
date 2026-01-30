
import { LibraryItem, Proposal, Petition, ResourceCategory } from './types';

export const COLORS = {
  primary: '#5a1f4e', // Roxo
  secondary: '#f2c94c', // Amarelo
};

export const MANIFESTO_TEXT = {
  title: "O Manifesto M.E.E.L",
  location: "Lisboa, 2026",
  sections: [
    {
      title: "1. A TESE",
      content: `A educação é a mais poderosa arma de libertação. Sem ela, não é possível compreender o cotidiano que nos cerca e, assim, nos tornamos sujeitos passivos aos interesses daqueles cujo poder ultrapassa as fronteiras do justo.`
    }
  ]
};

// Seção: Fontes Externas de Pesquisa
export const EXTERNAL_RESEARCH_SOURCES: ResourceCategory[] = [
  {
    id: 'artigos-revistas',
    title: 'Artigos Académicos e Revistas',
    description: 'Pesquisa e leitura de artigos científicos, periódicos e revistas em várias áreas do conhecimento.',
    icon: 'fa-newspaper',
    subTypes: ['Motores de busca acadêmicos', 'Revistas científicas open access', 'Periódicos de ciências sociais e humanas', 'Revistas de história, arqueologia e historiografia'],
    items: [
      { id: 'm1-1', title: 'Google Scholar', category: 'Busca', subType: 'Motores de busca acadêmicos', description: 'Motor de busca académico multidisciplinar.', type: 'Link', url: 'https://scholar.google.com/' },
      { id: 'm1-2', title: 'JURN', category: 'Busca', subType: 'Motores de busca acadêmicos', description: 'Buscador de artigos académicos gratuitos.', type: 'Link', url: 'https://www.jurn.link/' },
      { id: 'm1-3', title: 'JSTOR (Open Access)', category: 'Revista', subType: 'Revistas científicas open access', description: 'Artigos e livros académicos de acesso livre.', type: 'Link', url: 'https://about.jstor.org/oa-and-free/' },
      { id: 'm1-4', title: 'Oxford Academic Journals', category: 'Revista', subType: 'Revistas científicas open access', description: 'Periódicos académicos em acesso aberto parcial.', type: 'Link', url: 'https://academic.oup.com/journals' },
      { id: 'm1-5', title: 'SciELO', category: 'Revista', subType: 'Revistas científicas open access', description: 'Biblioteca científica em acesso aberto.', type: 'Link', url: 'https://scielo.org/' },
      { id: 'm1-6', title: 'Redalyc', category: 'Revista', subType: 'Revistas científicas open access', description: 'Rede de revistas científicas open access.', type: 'Link', url: 'https://www.redalyc.org/' },
      { id: 'm1-7', title: 'DOAJ', category: 'Revista', subType: 'Revistas científicas open access', description: 'Directory of Open Access Journals.', type: 'Link', url: 'https://doaj.org/' },
      { id: 'm1-8', title: 'Análise Social', category: 'Revista', subType: 'Periódicos de ciências sociais e humanas', description: 'Revista de ciências sociais (ICS).', type: 'Link', url: 'http://analisesocial.ics.ul.pt/' },
      { id: 'm1-9', title: 'Portuguese Journal of Social Science', category: 'Revista', subType: 'Periódicos de ciências sociais e humanas', description: 'Revista de ciências sociais (ISCTE).', type: 'Link', url: 'http://pjss.iscte-iul.pt/' },
      { id: 'm1-10', title: 'American Historical Review', category: 'Revista', subType: 'Revistas de história, arqueologia e historiografia', description: 'Revista académica de história.', type: 'Link', url: 'https://academic.oup.com/ahr' },
      { id: 'm1-11', title: 'Ayer', category: 'Revista', subType: 'Revistas de história, arqueologia e historiografia', description: 'Revista de História Contemporânea.', type: 'Link', url: 'https://www.ahistcon.org/revistaayer.html' },
      { id: 'm1-12', title: 'Cuadernos de Historia Contemporánea', category: 'Revista', subType: 'Revistas de história, arqueologia e historiografia', description: 'Revista de história (UCM).', type: 'Link', url: 'https://revistas.ucm.es/index.php/CHCO' },
      { id: 'm1-13', title: 'e-Journal of Portuguese History', category: 'Revista', subType: 'Revistas de história, arqueologia e historiografia', description: 'Revista digital de história portuguesa.', type: 'Link', url: 'https://ejph.org/' },
      { id: 'm1-14', title: 'Fragmenta Historica', category: 'Revista', subType: 'Revistas de história, arqueologia e historiografia', description: 'Revista de história contemporânea.', type: 'Link', url: 'https://journals.openedition.org/fragmenta/' },
      { id: 'm1-15', title: 'Internet Archaeology', category: 'Revista', subType: 'Revistas de história, arqueologia e historiografia', description: 'Revista digital de arqueologia.', type: 'Link', url: 'https://intarch.ac.uk/' },
      { id: 'm1-16', title: 'Ler História', category: 'Revista', subType: 'Revistas de história, arqueologia e historiografia', description: 'Revista de história e ciências sociais.', type: 'Link', url: 'https://journals.openedition.org/lerhistoria/' },
      { id: 'm1-17', title: 'Medievalista', category: 'Revista', subType: 'Revistas de história, arqueologia e historiografia', description: 'Revista sobre estudos medievais.', type: 'Link', url: 'https://medievalista.fcsh.unl.pt/' },
      { id: 'm1-18', title: 'Past and Present', category: 'Revista', subType: 'Revistas de história, arqueologia e historiografia', description: 'História social e cultural.', type: 'Link', url: 'https://academic.oup.com/past' },
      { id: 'm1-19', title: 'Práticas da História', category: 'Revista', subType: 'Revistas de história, arqueologia e historiografia', description: 'Revista de teoria e historiografia.', type: 'Link', url: 'http://www.praticasdahistoria.pt/pt/' }
    ]
  },
  {
    id: 'repositorios-teses',
    title: 'Repositórios e Teses',
    description: 'Acesso a dissertações, teses, artigos completos e preprints.',
    icon: 'fa-graduation-cap',
    subTypes: ['Repositórios científicos institucionais', 'Teses e dissertações', 'Preprints e literatura científica aberta', 'Bases internacionais de pesquisa acadêmica'],
    items: [
      { id: 'm2-1', title: 'RCAAP', category: 'Repositório', subType: 'Repositórios científicos institucionais', description: 'Repositório Científico de Acesso Aberto de Portugal.', type: 'Link', url: 'https://www.rcaap.pt/' },
      { id: 'm2-2', title: 'Repositório ULisboa', category: 'Repositório', subType: 'Repositórios científicos institucionais', description: 'Repositório institucional da Universidade de Lisboa.', type: 'Link', url: 'https://repositorio.ul.pt/' },
      { id: 'm2-3', title: 'Repositório Aberto UP', category: 'Repositório', subType: 'Repositórios científicos institucionais', description: 'Repositório da Universidade do Porto.', type: 'Link', url: 'https://repositorio-aberto.up.pt/' },
      { id: 'm2-4', title: 'RUN - UNL', category: 'Repositório', subType: 'Repositórios científicos institucionais', description: 'Repositório da Universidade Nova de Lisboa.', type: 'Link', url: 'https://run.unl.pt/' },
      { id: 'm2-5', title: 'Estudo Geral - UC', category: 'Repositório', subType: 'Repositórios científicos institucionais', description: 'Repositório da Universidade de Coimbra.', type: 'Link', url: 'https://estudogeral.sib.uc.pt/' },
      { id: 'm2-6', title: 'USP - Teses e Dissertações', category: 'Teses', subType: 'Teses e dissertações', description: 'Biblioteca Digital de Teses e Dissertações da USP.', type: 'Link', url: 'https://www.teses.usp.br/' },
      { id: 'm2-7', title: 'Pantheon - UFRJ', category: 'Teses', subType: 'Teses e dissertações', description: 'Repositório Institucional da UFRJ.', type: 'Link', url: 'https://pantheon.ufrj.br/' },
      { id: 'm2-8', title: 'Repositório UFMG', category: 'Teses', subType: 'Teses e dissertações', description: 'Repositório Institucional da UFMG.', type: 'Link', url: 'https://repositorio.ufmg.br/' },
      { id: 'm2-9', title: 'Repositório UNICAMP', category: 'Teses', subType: 'Teses e dissertações', description: 'Repositório Institucional da UNICAMP.', type: 'Link', url: 'https://www.repositorio.unicamp.br/' },
      { id: 'm2-10', title: 'Repositório UFBA', category: 'Teses', subType: 'Teses e dissertações', description: 'Repositório Institucional da UFBA.', type: 'Link', url: 'https://repositorio.ufba.br/' },
      { id: 'm2-11', title: 'OATD', category: 'Teses', subType: 'Bases internacionais de pesquisa acadêmica', description: 'Open Access Theses and Dissertations.', type: 'Link', url: 'https://oatd.org/' },
      { id: 'm2-12', title: 'OpenAlex', category: 'Pesquisa', subType: 'Bases internacionais de pesquisa acadêmica', description: 'Índice aberto de publicações científicas.', type: 'Link', url: 'https://openalex.org/' },
      { id: 'm2-13', title: 'AfricArXiv', category: 'Preprints', subType: 'Preprints e literatura científica aberta', description: 'Preprints africanos em acesso aberto.', type: 'Link', url: 'https://www.africarxiv.org/' }
    ]
  },
  {
    id: 'livros-literatura',
    title: 'Livros e Literatura Digital',
    description: 'Livros completos, literatura clássica e textos acadêmicos digitais.',
    icon: 'fa-book',
    subTypes: ['Literatura clássica em domínio público', 'Livros acadêmicos em acesso aberto', 'Bibliotecas digitais nacionais', 'Acervos digitais universitários', 'Literatura em língua portuguesa'],
    items: [
      { id: 'm3-1', title: 'Project Gutenberg', category: 'Livros', subType: 'Literatura clássica em domínio público', description: 'Milhares de livros gratuitos em domínio público.', type: 'Link', url: 'https://www.gutenberg.org/' },
      { id: 'm3-2', title: 'Internet Archive', category: 'Livros', subType: 'Acervos digitais universitários', description: 'Biblioteca digital sem fins lucrativos.', type: 'Link', url: 'https://archive.org/' },
      { id: 'm3-3', title: 'Open Library', category: 'Livros', subType: 'Acervos digitais universitários', description: 'Catálogo de livros abertos e emprestáveis.', type: 'Link', url: 'https://openlibrary.org/' },
      { id: 'm3-4', title: 'Projecto Adamastor', category: 'Livros', subType: 'Literatura em língua portuguesa', description: 'Livros digitais gratuitos em português.', type: 'Link', url: 'https://projectoadamastor.org/base-de-dados-de-livros-digitais/' },
      { id: 'm3-5', title: 'Biblioteca Digital Camões', category: 'Livros', subType: 'Literatura em língua portuguesa', description: 'Acervo digital do Instituto Camões.', type: 'Link', url: 'https://cvc.instituto-camoes.pt/conhecer/biblioteca-digital-camoes.html' },
      { id: 'm3-6', title: 'Biblioteca Nacional Digital (PT)', category: 'Livros', subType: 'Bibliotecas digitais nacionais', description: 'Acervo digital da BNP.', type: 'Link', url: 'https://purl.pt/' },
      { id: 'm3-7', title: 'Biblioteca Nacional Digital (BR)', category: 'Livros', subType: 'Bibliotecas digitais nacionais', description: 'Acervo digital da BN Brasil.', type: 'Link', url: 'https://bndigital.bn.br/' },
      { id: 'm3-8', title: 'Portal Domínio Público', category: 'Livros', subType: 'Literatura clássica em domínio público', description: 'Biblioteca digital do Governo do Brasil.', type: 'Link', url: 'http://www.dominiopublico.gov.br/' },
      { id: 'm3-9', title: 'UniCV - Biblioteca Digital', category: 'Livros', subType: 'Acervos digitais universitários', description: 'Repositório da Universidade de Cabo Verde.', type: 'Link', url: 'http://rdigital.unicv.edu.cv/' },
      { id: 'm3-10', title: 'UAN - Biblioteca Digital', category: 'Livros', subType: 'Acervos digitais universitários', description: 'Biblioteca digital da Universidade Agostinho Neto.', type: 'Link', url: 'https://www.uan.ao/' },
      { id: 'm3-11', title: 'Jean Piaget GB - Virtual', category: 'Livros', subType: 'Acervos digitais universitários', description: 'Biblioteca virtual UniPiaget Guiné-Bissau.', type: 'Link', url: 'http://guine-bissau.unipiaget.org/index.html' }
    ]
  },
  {
    id: 'formacao-politica',
    title: 'Arquivos e Textos de Formação Política',
    description: 'Textos, jornais, arquivos e organizações de esquerda, marxismo, anarquismo e movimentos sociais.',
    icon: 'fa-hand-fist',
    subTypes: ['Arquivos clássicos do marxismo', 'Textos anarquistas e libertários', 'Arquivos históricos de movimentos sociais', 'Jornais e mídias de esquerda', 'Organizações, movimentos e coletivos militantes', 'Bibliotecas digitais políticas e sociais'],
    items: [
      { id: 'm4-1', title: 'Marxists Internet Archive (MIA)', category: 'Arquivos', subType: 'Arquivos clássicos do marxismo', description: 'Principal arquivo clássico do marxismo online.', type: 'Link', url: 'https://www.marxists.org/' },
      { id: 'm4-2', title: 'The Anarchist Library', category: 'Arquivos', subType: 'Textos anarquistas e libertários', description: 'Arquivo clássico do anarquismo e libertarismo.', type: 'Link', url: 'https://theanarchistlibrary.org/' },
      { id: 'm4-3', title: 'IISH - Social History', category: 'Arquivos', subType: 'Arquivos históricos de movimentos sociais', description: 'International Institute of Social History.', type: 'Link', url: 'https://socialhistory.org/' },
      { id: 'm4-4', title: 'Jornal A Verdade', category: 'Mídias', subType: 'Jornal e mídias de esquerda', description: 'Órgão de luta proletária.', type: 'Link', url: 'https://averdade.org/' },
      { id: 'm4-5', title: 'Brasil de Fato', category: 'Mídias', subType: 'Jornal e mídias de esquerda', description: 'Notícias sob uma visão popular.', type: 'Link', url: 'https://www.brasildefato.com.br/' },
      { id: 'm4-6', title: 'Jacobin Magazine', category: 'Mídias', subType: 'Jornal e mídias de esquerda', description: 'Revista política socialista.', type: 'Link', url: 'https://jacobin.com/' },
      { id: 'm4-7', title: 'CounterPunch', category: 'Mídias', subType: 'Jornal e mídias de esquerda', description: 'Jornalismo radical e independente.', type: 'Link', url: 'https://www.counterpunch.org/' },
      { id: 'm4-8', title: 'Morning Star', category: 'Mídias', subType: 'Jornal e mídias de esquerda', description: 'Daily paper of the left.', type: 'Link', url: 'https://morningstaronline.co.uk/' },
      { id: 'm4-9', title: 'Le Monde Diplomatique', category: 'Mídias', subType: 'Jornal e mídias de esquerda', description: 'Análise internacional crítica.', type: 'Link', url: 'https://mondediplo.com/' },
      { id: 'm4-10', title: 'MST', category: 'Movimento', subType: 'Organizações, movimentos e coletivos militantes', description: 'Movimento dos Trabalhadores Rurais Sem Terra.', type: 'Link', url: 'https://mst.org.br/' },
      { id: 'm4-11', title: 'Via Campesina', category: 'Movimento', subType: 'Organizações, movimentos e coletivos militantes', description: 'Movimento internacional de camponeses.', type: 'Link', url: 'https://viacampesina.org/en/' },
      { id: 'm4-12', title: 'CUT', category: 'Organização', subType: 'Organizações, movimentos e coletivos militantes', description: 'Central Única dos Trabalhadores.', type: 'Link', url: 'https://cut.org.br/' },
      { id: 'm4-13', title: 'ATTAC', category: 'Organização', subType: 'Organizações, movimentos e coletivos militantes', description: 'Movimento por uma globalização justa.', type: 'Link', url: 'https://www.attac.org/' },
      { id: 'm4-14', title: 'PAME', category: 'Movimento', subType: 'Organizações, movimentos e coletivos militantes', description: 'Frente Militante de Trabalhadores (Grécia).', type: 'Link', url: 'https://pamehellas.gr/' },
      { id: 'm4-15', title: 'Libcom.org', category: 'Arquivos', subType: 'Bibliotecas digitais políticas e sociais', description: 'Resource for libertarian communism.', type: 'Link', url: 'https://libcom.org/' },
      { id: 'm4-16', title: 'Left Archive', category: 'Arquivos', subType: 'Bibliotecas digitais políticas e sociais', description: 'Irish Left Archive e outros recursos.', type: 'Link', url: 'https://www.leftarchive.org/' },
      { id: 'm4-17', title: 'Solidarity Federation', category: 'Organização', subType: 'Organizações, movimentos e coletivos militantes', description: 'Anarcho-syndicalist organization.', type: 'Link', url: 'https://www.solfed.org.uk/' }
    ]
  },
  {
    id: 'museus-patrimonio',
    title: 'Museus e Patrimônio Cultural',
    description: 'Acervos digitais, arquivos históricos e cultura geral.',
    icon: 'fa-landmark',
    subTypes: ['Museus internacionais e nacionais', 'Acervos históricos e artísticos digitais', 'Instituições de preservação cultural', 'Arquivos e coleções museológicas'],
    items: [
      { id: 'm5-1', title: 'British Library', category: 'Museu', subType: 'Museus internacionais e nacionais', description: 'Catálogo e acervos da British Library.', type: 'Link', url: 'https://explore.bl.uk/' },
      { id: 'm5-2', title: 'Library of Congress', category: 'Museu', subType: 'Museus internacionais e nacionais', description: 'Biblioteca do Congresso dos EUA.', type: 'Link', url: 'https://catalog.loc.gov/' },
      { id: 'm5-3', title: 'Museu do Louvre', category: 'Museu', subType: 'Museus internacionais e nacionais', description: 'Acervos digitais do Louvre.', type: 'Link', url: 'https://www.louvre.fr/' },
      { id: 'm5-4', title: 'British Museum', category: 'Museu', subType: 'Museus internacionais e nacionais', description: 'Coleções digitais do British Museum.', type: 'Link', url: 'https://www.britishmuseum.org/' },
      { id: 'm5-5', title: 'The MET', category: 'Museu', subType: 'Museus internacionais e nacionais', description: 'Metropolitan Museum of Art.', type: 'Link', url: 'https://www.metmuseum.org/' },
      { id: 'm5-6', title: 'Victoria and Albert Museum', category: 'Museu', subType: 'Museus internacionais e nacionais', description: 'V&A Museum online collection.', type: 'Link', url: 'https://www.vam.ac.uk/' },
      { id: 'm5-7', title: 'ICOM', category: 'Instituição', subType: 'Instituições de preservação cultural', description: 'International Council of Museums.', type: 'Link', url: 'https://icom.museum/' },
      { id: 'm5-8', title: 'Património Cultural (PT)', category: 'Instituição', subType: 'Instituições de preservação cultural', description: 'Direção-Geral do Património Cultural.', type: 'Link', url: 'https://www.patrimoniocultural.pt/' }
    ]
  },
  {
    id: 'universidades-institutos',
    title: 'Portais de Universidades e Institutos',
    description: 'Departamentos, bibliotecas e centros de pesquisa com acesso a acervos digitais.',
    icon: 'fa-university',
    subTypes: ['Universidades públicas', 'Faculdades de ciências sociais e humanas', 'Institutos de pesquisa e centros acadêmicos', 'Bibliotecas universitárias digitais'],
    items: [
      { id: 'm6-1', title: 'FCSH - Nova', category: 'Universidade', subType: 'Faculdades de ciências sociais e humanas', description: 'Faculdade de Ciências Sociais e Humanas.', type: 'Link', url: 'https://www.fcsh.unl.pt/' },
      { id: 'm6-2', title: 'ISCTE', category: 'Universidade', subType: 'Universidades públicas', description: 'Instituto Universitário de Lisboa.', type: 'Link', url: 'https://www.iscte.pt/' },
      { id: 'm6-3', title: 'FLUC - Coimbra', category: 'Universidade', subType: 'Faculdades de ciências sociais e humanas', description: 'Faculdade de Letras da UC.', type: 'Link', url: 'https://www.uc.pt/fluc/' },
      { id: 'm6-4', title: 'FLUL - Lisboa', category: 'Universidade', subType: 'Faculdades de ciências sociais e humanas', description: 'Faculdade de Letras da ULisboa.', type: 'Link', url: 'https://www.letras.ulisboa.pt/pt/' },
      { id: 'm6-5', title: 'FLUP - Porto', category: 'Universidade', subType: 'Faculdades de ciências sociais e humanas', description: 'Faculdade de Letras da UPorto.', type: 'Link', url: 'https://sigarra.up.pt/flup/web_page.inicial' },
      { id: 'm6-6', title: 'IHC', category: 'Instituto', subType: 'Institutos de pesquisa e centros acadêmicos', description: 'Instituto de História Contemporânea.', type: 'Link', url: 'https://ihc.fcsh.unl.pt/' },
      { id: 'm6-7', title: 'CHAM', category: 'Instituto', subType: 'Institutos de pesquisa e centros acadêmicos', description: 'Centro de História de Além-Mar.', type: 'Link', url: 'https://cham.fcsh.unl.pt/' },
      { id: 'm6-8', title: 'ICS - ULisboa', category: 'Instituto', subType: 'Institutos de pesquisa e centros acadêmicos', description: 'Instituto de Ciências Sociais.', type: 'Link', url: 'https://www.ics.ul.pt/' },
      { id: 'm6-9', title: 'USP', category: 'Universidade', subType: 'Universidades públicas', description: 'Universidade de São Paulo.', type: 'Link', url: 'https://www5.usp.br/' },
      { id: 'm6-10', title: 'UFRJ', category: 'Universidade', subType: 'Universidades públicas', description: 'Universidade Federal do Rio de Janeiro.', type: 'Link', url: 'https://ufrj.br/' },
      { id: 'm6-11', title: 'UFRGS', category: 'Universidade', subType: 'Universidades públicas', description: 'Univ. Fed. do Rio Grande do Sul.', type: 'Link', url: 'https://www.ufrgs.br/' },
      { id: 'm6-12', title: 'UAN (Angola)', category: 'Universidade', subType: 'Universidades públicas', description: 'Universidade Agostinho Neto.', type: 'Link', url: 'https://www.uan.ao/' },
      { id: 'm6-13', title: 'UniCV (Cabo Verde)', category: 'Universidade', subType: 'Universidades públicas', description: 'Universidade de Cabo Verde.', type: 'Link', url: 'https://www.unicv.edu.cv/' },
      { id: 'm6-14', title: 'UEM (Moçambique)', category: 'Universidade', subType: 'Universidades públicas', description: 'Universidade Eduardo Mondlane.', type: 'Link', url: 'https://www.uem.mz/' }
    ]
  }
];

// Seção: Acervo Interno (Materiais Próprios)
export const INTERNAL_COLLECTION: ResourceCategory[] = [
  {
    id: 'materiais-meel',
    title: 'Materiais do Movimento',
    description: 'Documentos, guias e materiais produzidos pelo M.E.E.L.',
    icon: 'fa-folder-open',
    subTypes: ['Guias e Manuais', 'Manifestos', 'Relatórios', 'Zines'],
    items: [
      { id: 'i1-1', title: 'Guia de Autodefesa Académica', category: 'Manual', subType: 'Guias e Manuais', description: 'Como proceder perante abusos de autoridade na universidade.', type: 'PDF', url: '#' },
      { id: 'i1-2', title: 'Manifesto M.E.E.L 2026', category: 'Documento', subType: 'Manifestos', description: 'A tese central e os objetivos do movimento.', type: 'PDF', url: '#' },
      { id: 'i1-3', title: 'Aulão: História da Luta Estudantil', category: 'Vídeo', subType: 'Vídeos', description: 'Gravação da aula pública realizada no Polo da Ajuda.', type: 'YouTube', url: 'https://www.youtube.com/' }
    ]
  },
  {
    id: 'multimidia-meel',
    title: 'Multimédia e Redes',
    description: 'Vídeos, podcasts e conteúdos de formação em formato digital.',
    icon: 'fa-play-circle',
    subTypes: ['Vídeos', 'Podcasts', 'Instagram', 'Lives'],
    items: [
      { id: 'i2-1', title: 'M.E.E.L no Instagram', category: 'Social', subType: 'Instagram', description: 'Acompanhe as nossas ações diárias.', type: 'Link', url: 'https://www.instagram.com/meel.luta/' },
      { id: 'i2-2', title: 'Podcast: Educação e Libertação', category: 'Áudio', subType: 'Podcasts', description: 'Episódio 01: O impacto das propinas na vida do estudante.', type: 'Spotify', url: '#' }
    ]
  }
];

export const LIBRARY_CATEGORIES: ResourceCategory[] = [...INTERNAL_COLLECTION, ...EXTERNAL_RESEARCH_SOURCES];

export const MOCK_PROPOSALS: Proposal[] = [
  { 
    id: 1, 
    title: 'Pressão Direta Contra as Propinas', 
    description: 'Ações contínuas de reivindicação pela extinção das taxas de ensino superior.', 
    details: [
      'Reclamações formais mensais à Reitoria, exigindo redução e extinção das propinas.',
      'Protocolos coletivos assinados pelos estudantes.',
      'Divulgação pública das respostas ou da ausência delas.'
    ],
    links: [
      { label: 'Assinar carta de reclamação', url: 'abaixo-assinado' }
    ]
  },
  { 
    id: 2, 
    title: 'Fiscalização e Denúncia', 
    description: 'Mecanismos de controle e exposição de abusos institucionais.', 
    details: [
      'Canal permanente de denúncias anónimas.',
      'Recolha de relatos sobre abusos académicos e administrativos.',
      'Denúncias formais ao Conselho Pedagógico e à Direção.',
      'Notas públicas sobre situações graves, sem expor os denunciantes.',
      'Acompanhamento dos casos até a resposta institucional.'
    ],
    notice: 'As denúncias enviadas ao M.E.E.L não têm efeito legal e não são encaminhadas à polícia ou à justiça. O objetivo é denunciar descaso ou negligência das instituições, gerar pressão política, fortalecer a luta estudantil e promover transparência e responsabilidade dentro da universidade.',
    links: [
      { label: 'Formulário de Denúncias', url: 'denuncias' },
      { label: 'Contacto para Acompanhamento', url: 'mailto:denuncias.meel@protonmail.com' }
    ]
  },
  { 
    id: 3, 
    title: 'Formação Política e Aulas Públicas', 
    description: 'Espaços de partilha de conhecimento e consciência crítica.', 
    details: [
      'Aulas e atividades periódicas em espaços comuns da universidade ou em outros locais.',
      'Seminários abertos, acessíveis a todos os cursos e trabalhadores da universidade.',
      'Espaços de debate e partilha de experiências estudantis e laborais.',
      'Biblioteca solidária: física a cada 15 dias no Polo Universitário da Ajuda e digital neste site, incluindo bases de dados e pesquisas científicas.'
    ],
    links: [
      { label: 'Aceder ao Catálogo M.E.E.L', url: 'biblioteca' }
    ]
  }
];

export const MOCK_PETITIONS: Petition[] = [
  {
    id: 'p1',
    title: 'Reclamação Formal contra Propinas',
    objective: 'Extinção das propinas no ensino superior público e medidas urgentes de redução.',
    description: 'Educação pública é um direito social fundamental; propinas aprofundam desigualdades. Exigimos redução imediata e compromisso com a extinção total.',
    formUrl: 'https://cryptpad.fr/form/#/2/form/view/h1u-A+8HAX2QGJ2jSXFXs-kdNngUbbcOfY2Uhf0SfGk/',
    fullTextView: 'carta-reclamacao'
  },
  {
    id: 'p2',
    title: 'Compromisso da instituição contra o ódio e discriminação',
    objective: 'Garantir tolerância zero contra ódio, discriminação, assédio e silenciamento no espaço universitário.',
    description: 'Instituição deve assumir compromisso público de combate a comportamentos discriminatórios e garantir canais seguros de denúncia.',
    formUrl: 'https://cryptpad.fr/form/#/2/form/view/+kvMIwNIbNebcrhP87nJ86Wpi+0+nD2tn2YoqmWKP2A/',
    fullTextView: 'reivindicacao-odio'
  },
  {
    id: 'p3',
    title: 'Acesso pleno aos espaços académicos na Universidade de Lisboa',
    objective: 'Garantir acesso efetivo e não discriminatório aos espaços e serviços universitários.',
    description: 'Inclusão de horários alargados em bibliotecas, laboratórios e salas de estudo, inclusive fins de semana.',
    formUrl: 'https://cryptpad.fr/form/#/2/form/view/egaWT34uo5lmIPejCOp-wf-FtifBU2E1pyTRF8Bzls4/',
    fullTextView: 'reivindicacao-acesso'
  }
];
