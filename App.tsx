
import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import { AppView, Language } from './types';
import { LIBRARY_CATEGORIES, INTERNAL_COLLECTION, EXTERNAL_RESEARCH_SOURCES, MOCK_PROPOSALS, MOCK_PETITIONS, MANIFESTO_TEXT } from './constants';

const MANIFESTO_LINK = "https://drive.google.com/file/d/1UJ6jKEIoiEb9c68_mGNxf2wwsCv2cN02/view";
const PETITION_FORM_LINK = "https://cryptpad.fr/form/#/2/form/view/wHshzFmQMO5ZfL18BJyDP2oPb7QMZmCXVCVtkGbS4Ac/"; 
const INSTAGRAM_URL = "https://www.instagram.com/meel.luta/";
const CONTACT_EMAIL = "meel.luta@protonmail.com";
const DENUNCIAS_EMAIL = "denuncias.meel@protonmail.com";

const TRANSLATIONS = {
  pt: {
    'site.title': 'M.E.E.L — Movimento dos Estudantes em Luta',
    'site.subtitle': 'Movimento dos Estudantes em Luta',
    'site.motto': 'Educação é libertação!',
    'nav.inicio': 'Início',
    'nav.quemSomos': 'Quem somos',
    'nav.nossaLuta': 'Nossa Luta',
    'nav.biblioteca': 'Biblioteca',
    'nav.denuncias': 'Denúncias',
    'nav.peticoes': 'Petições',
    'nav.contato': 'Contato',
    'hero.badge': 'BEM VIND@ À LUTA',
    'hero.title': 'M.E.E.L: Educação é Libertação.',
    'hero.desc': 'Organização coletiva e independente, ação estudantil pela educação livre e popular.',
    'hero.btnProposals': 'Ver Propostas',
    'hero.btnLibrary': 'Acessar Biblioteca',
    'feature.knowledge.title': 'Conhecimento',
    'feature.knowledge.desc': 'Democratização do acesso a materiais de formação política e acadêmica, livres e gratuitos.',
    'feature.mobilization.title': 'Mobilização',
    'feature.mobilization.desc': 'Construção coletiva de espaços de debate, ação e luta em defesa da educação pública, democrática e acessível.',
    'feature.support.title': 'Apoio',
    'feature.support.desc': 'Canal dedicado à escuta, acolhimento e encaminhamento de denúncias feitas por estudantes e trabalhadores.',
    'about.fullManifesto': 'Manifesto na íntegra (PDF)',
    'about.intro': 'O M.E.E.L – Movimento dos Estudantes em Luta é um espaço autogestionado e independente, onde estudantes se organizam coletivamente para lutar por uma educação livre e democrática.',
    'about.mission': 'Acreditamos que o conhecimento liberta e transforma vidas. Por isso, promovemos ação estudantil e compartilhamento de saberes, envolvendo não só estudantes, mas também trabalhadores da universidade, fortalecendo juntos a nossa voz e participação no Polo da Ajuda.',
    'petitions.header': 'Assinar Petições – M.E.E.L',
    'petitions.desc': 'Participe das reivindicações estudantis e fortaleça a luta por uma educação justa e inclusiva.',
    'petitions.objective': 'Objetivo',
    'petitions.summary': 'Resumo',
    'petitions.readFull': 'Ler Reivindicação Completa',
    'petitions.signBtn': 'Assinar via Cryptpad',
    'petitions.shareBtn': 'Partilhar',
    'petitions.backBtn': 'Voltar às Petições',
    'denuncias.title': 'Canal de Denúncias – M.E.E.L',
    'denuncias.subtitle': 'Canal dedicado à escuta, acolhimento e encaminhamento de denúncias feitas por estudantes e trabalhadores.',
    'denuncias.formHeader': 'Formulário de Denúncias',
    'denuncias.formDesc': 'Preencha de forma segura e anónima:',
    'denuncias.formBtn': 'Aceder ao Cryptpad',
    'denuncias.contactHeader': 'Contacto para Denúncias',
    'denuncias.contactDesc': 'Caso prefira enviar por e-mail:',
    'denuncias.contactBtn': 'Enviar e-mail',
    'denuncias.important': '⚠️ IMPORTANTE',
    'denuncias.importantDesc': 'As denúncias enviadas ao M.E.E.L não têm efeito legal e não são encaminhadas à polícia ou à justiça.',
    'denuncias.objectiveHeader': 'O objetivo é:',
    'denuncias.obj1': 'Denunciar descaso ou negligência;',
    'denuncias.obj2': 'Gerar pressão política;',
    'denuncias.obj3': 'Fortalecer a luta estudantil.',
    'footer.motto': 'Pelo conhecimento que liberta e transforma.',
    'footer.linksHeader': 'Links Rápidos',
    'footer.supportHeader': 'Apoie a Causa',
    'footer.supportDesc': 'Nosso movimento é autogestionado e independente. Não pedimos doações: convidamos você a se juntar à luta e fortalecer nosso trabalho da forma que puder.',
    'footer.copyright': 'Movimento dos Estudantes em Luta M.E.E.L — Educação é libertação!',
    'lib.searchPlaceholder': 'Pesquisar no acervo...',
    'lib.all': 'Todos',
    'lib.accessBtn': 'Aceder',
    'lib.filterAlpha': 'Filtro Alfabético',
    'lib.clearFilter': 'Limpar',
    'lib.internalTitle': 'Acervo Interno',
    'lib.internalDesc': 'Materiais próprios, vídeos e documentos do movimento.',
    'lib.externalTitle': 'Fontes Externas de Pesquisa',
    'lib.externalDesc': 'Repositórios e portais externos de pesquisa académica.',
    'common.back': 'Voltar',
    'common.important': 'Importante'
  },
  en: {
    'site.title': 'M.E.E.L — Student Movement in Struggle',
    'site.subtitle': 'Student Movement in Struggle',
    'site.motto': 'Education is liberation!',
    'nav.inicio': 'Home',
    'nav.quemSomos': 'About Us',
    'nav.nossaLuta': 'Our Struggle',
    'nav.biblioteca': 'Library',
    'nav.denuncias': 'Reports',
    'nav.peticoes': 'Petitions',
    'nav.contato': 'Contact',
    'hero.badge': 'WELCOME TO THE STRUGGLE',
    'hero.title': 'M.E.E.L: Education is Liberation.',
    'hero.desc': 'Collective and independent organization, student action for free and popular education.',
    'hero.btnProposals': 'View Proposals',
    'hero.btnLibrary': 'Access Library',
    'feature.knowledge.title': 'Knowledge',
    'feature.knowledge.desc': 'Democratization of access to political and academic training materials, free and open.',
    'feature.mobilization.title': 'Mobilization',
    'feature.mobilization.desc': 'Collective construction of spaces for debate, action, and struggle in defense of public, democratic, and accessible education.',
    'feature.support.title': 'Support',
    'feature.support.desc': 'Dedicated channel for listening, welcoming, and forwarding reports made by students and workers.',
    'about.fullManifesto': 'Full Manifesto (PDF)',
    'about.intro': 'M.E.E.L – Student Movement in Struggle is a self-managed and independent space where students organize collectively to fight for free and democratic education.',
    'about.mission': 'We believe that knowledge liberates and transforms lives. Therefore, we promote student action and knowledge sharing, involving students and university workers to strengthen our voice in the Polo da Ajuda.',
    'petitions.header': 'Sign Petitions – M.E.E.L',
    'petitions.desc': 'Join the student demands and strengthen the struggle for a fair and inclusive education.',
    'petitions.objective': 'Objective',
    'petitions.summary': 'Summary',
    'petitions.readFull': 'Read Full Claim',
    'petitions.signBtn': 'Sign via Cryptpad',
    'petitions.shareBtn': 'Share',
    'petitions.backBtn': 'Back to Petitions',
    'denuncias.title': 'Reporting Channel – M.E.E.L',
    'denuncias.subtitle': 'Dedicated channel for listening, welcoming, and forwarding reports from students and workers.',
    'denuncias.formHeader': 'Reporting Form',
    'denuncias.formDesc': 'Fill it out safely and anonymously:',
    'denuncias.formBtn': 'Access Cryptpad',
    'denuncias.contactHeader': 'Reporting Contact',
    'denuncias.contactDesc': 'If you prefer to send by email:',
    'denuncias.contactBtn': 'Send Email',
    'denuncias.important': '⚠️ IMPORTANT',
    'denuncias.importantDesc': 'Reports sent to M.E.E.L have no legal effect and are not forwarded to the police or the justice system.',
    'denuncias.objectiveHeader': 'The goal is:',
    'denuncias.obj1': 'Report neglect or negligence;',
    'denuncias.obj2': 'Generate political pressure;',
    'denuncias.obj3': 'Strengthen the student struggle.',
    'footer.motto': 'Through knowledge that liberates and transforms.',
    'footer.linksHeader': 'Quick Links',
    'footer.supportHeader': 'Support the Cause',
    'footer.supportDesc': 'Our movement is self-managed and independent. We do not ask for donations: we invite you to join the struggle and strengthen our work in any way you can.',
    'footer.copyright': 'Student Movement in Struggle M.E.E.L — Education is liberation!',
    'lib.searchPlaceholder': 'Search the collection...',
    'lib.all': 'All',
    'lib.accessBtn': 'Access',
    'lib.filterAlpha': 'Alphabetical Filter',
    'lib.clearFilter': 'Clear',
    'lib.internalTitle': 'Internal Collection',
    'lib.internalDesc': 'Movement\'s own materials, videos, and documents.',
    'lib.externalTitle': 'External Research Sources',
    'lib.externalDesc': 'External repositories and portals for academic research.',
    'common.back': 'Back',
    'common.important': 'Important'
  },
  es: {
    'site.title': 'M.E.E.L — Movimiento de Estudiantes en Lucha',
    'site.subtitle': 'Movimiento de Estudiantes en Lucha',
    'site.motto': '¡La educação es liberación!',
    'nav.inicio': 'Inicio',
    'nav.quemSomos': 'Quiénes somos',
    'nav.nossaLuta': 'Nuestra Lucha',
    'nav.biblioteca': 'Biblioteca',
    'nav.denuncias': 'Denuncias',
    'nav.peticoes': 'Peticiones',
    'nav.contato': 'Contacto',
    'hero.badge': 'BIENVENID@ A LA LUCHA',
    'hero.title': 'M.E.E.L: Educación es Liberación.',
    'hero.desc': 'Organización colectiva e independiente, acción estudiantil por la educación libre y popular.',
    'hero.btnProposals': 'Ver Propuestas',
    'hero.btnLibrary': 'Acceder a Biblioteca',
    'feature.knowledge.title': 'Conocimiento',
    'feature.knowledge.desc': 'Democratización do acesso a materiales de formación política e académica, gratuitos e abiertos.',
    'feature.mobilization.title': 'Movilización',
    'feature.mobilization.desc': 'Construcción colectiva de espacios de debate, acción e lucha en defensa da educación pública, democrática e accesible.',
    'feature.support.title': 'Apoyo',
    'feature.support.desc': 'Canal dedicado a la escucha, acogida y remisión de denuncias realizadas por estudiantes e trabajadores.',
    'about.fullManifesto': 'Manifiesto completo (PDF)',
    'about.intro': 'El M.E.E.L – Movimiento de Estudiantes en Lucha es un espacio autogestionado e independiente donde los estudiantes se organizan para luchar por una educación libre y democrática.',
    'about.mission': 'Creemos que el conocimiento libera y transforma vidas. Promovemos la acción estudiantil y el intercambio de saberes involucrando a estudiantes y trabajadores de la universidad para fortalecer nuestra voz.',
    'petitions.header': 'Firmar Peticiones – M.E.E.L',
    'petitions.desc': 'Participa en las demandas estudiantiles y fortalece la lucha por una educación justa e inclusiva.',
    'petitions.objective': 'Objetivo',
    'petitions.summary': 'Resumen',
    'petitions.readFull': 'Leer Reivindicación Completa',
    'petitions.signBtn': 'Firmar vía Cryptpad',
    'petitions.shareBtn': 'Compartir',
    'petitions.backBtn': 'Volver a Peticiones',
    'denuncias.title': 'Canal de Denuncias – M.E.E.L',
    'denuncias.subtitle': 'Canal dedicado a la escucha, acogida y remisión de denuncias de estudiantes y trabajadores.',
    'denuncias.formHeader': 'Formulario de Denuncias',
    'denuncias.formDesc': 'Rellene de forma segura y anónima:',
    'denuncias.formBtn': 'Acceder a Cryptpad',
    'denuncias.contactHeader': 'Contacto para Denuncias',
    'denuncias.contactDesc': 'Si prefiere enviar por correo electrónico:',
    'denuncias.contactBtn': 'Enviar correo',
    'denuncias.important': '⚠️ IMPORTANTE',
    'denuncias.importantDesc': 'Las denuncias enviadas a M.E.E.L no tienen efecto legal y no se remiten a la policía ni a la justicia.',
    'denuncias.objectiveHeader': 'El objetivo es:',
    'denuncias.obj1': 'Denunciar descuido o negligencia;',
    'denuncias.obj2': 'Generar presión política;',
    'denuncias.obj3': 'Fortalecer la lucha estudiantil.',
    'footer.motto': 'Por el conocimiento que libera y transforma.',
    'footer.linksHeader': 'Enlaces Rápidos',
    'footer.supportHeader': 'Apoya la Causa',
    'footer.supportDesc': 'Nuestro movimiento es autogestionado e independiente. No pedimos donaciones: te invitamos a unirte a la lucha y fortalecer nuestro trabajo.',
    'footer.copyright': 'Movimiento de Estudiantes en Lucha M.E.E.L — ¡La educación es liberación!',
    'lib.searchPlaceholder': 'Buscar en el acervo...',
    'lib.all': 'Todos',
    'lib.accessBtn': 'Acceder',
    'lib.filterAlpha': 'Filtro Alfabético',
    'lib.clearFilter': 'Limpiar',
    'lib.internalTitle': 'Acervo Interno',
    'lib.internalDesc': 'Materiales propios, vídeos y documentos del movimiento.',
    'lib.externalTitle': 'Fontes Externas de Pesquisa',
    'lib.externalDesc': 'Repositorios y portales externos de investigación académica.',
    'common.back': 'Volver',
    'common.important': 'Importante'
  }
};

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('inicio');
  const [language, setLanguage] = useState<Language>(() => {
    return (localStorage.getItem('siteLang') as Language) || 'pt';
  });
  const [searchLibrary, setSearchLibrary] = useState('');
  const [selectedLetter, setSelectedLetter] = useState<string | null>(null);
  const [expandedProposals, setExpandedProposals] = useState<number[]>([]);
  const [activeLibraryCategory, setActiveLibraryCategory] = useState<string | null>(null);

  useEffect(() => {
    window.history.pushState(null, "", window.location.href);
    const handlePopState = () => {
      window.history.pushState(null, "", window.location.href);
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    localStorage.setItem('siteLang', language);
    document.documentElement.lang = language;
    document.title = t('site.title');
  }, [language]);

  function t(key: string): string {
    return TRANSLATIONS[language][key as keyof typeof TRANSLATIONS['pt']] || key;
  }

  const toggleProposal = (id: number) => {
    setExpandedProposals(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleLinkClick = (url: string) => {
    if (['abaixo-assinado', 'denuncias', 'biblioteca', 'propostas', 'inicio'].includes(url)) {
      setCurrentView(url as AppView);
      window.scrollTo(0, 0);
    } else if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else if (url !== '#') {
      window.open(url, '_blank');
    }
  };

  const filterItems = (categories: typeof LIBRARY_CATEGORIES) => {
    return categories.map(cat => {
      const items = cat.items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchLibrary.toLowerCase()) ||
          item.subType.toLowerCase().includes(searchLibrary.toLowerCase()) ||
          item.description.toLowerCase().includes(searchLibrary.toLowerCase());
        
        const matchesLetter = selectedLetter 
          ? item.title.toUpperCase().startsWith(selectedLetter) 
          : true;

        return matchesSearch && matchesLetter;
      });
      return { ...cat, items };
    }).filter(cat => {
      const isCorrectCat = activeLibraryCategory ? cat.id === activeLibraryCategory : true;
      return isCorrectCat && cat.items.length > 0;
    });
  };

  const filteredInternal = useMemo(() => filterItems(INTERNAL_COLLECTION), [searchLibrary, activeLibraryCategory, selectedLetter]);
  const filteredExternal = useMemo(() => filterItems(EXTERNAL_RESEARCH_SOURCES), [searchLibrary, activeLibraryCategory, selectedLetter]);

  const handleShare = async (title: string, formUrl: string) => {
    const shareTitle = `${t('nav.peticoes')}: ${title}`;
    const text = `${shareTitle}. ${language === 'pt' ? 'Assina aqui' : 'Sign here'}: ${formUrl}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: shareTitle, text, url: formUrl });
      } else {
        await navigator.clipboard.writeText(`${shareTitle}: ${formUrl}`);
        alert(language === 'pt' ? "Copiado!" : "Copied!");
      }
    } catch (err) {
      await navigator.clipboard.writeText(`${shareTitle}: ${formUrl}`);
    }
  };

  const renderContent = () => {
    switch (currentView) {
      case 'inicio':
        return (
          <div className="animate-fade-in space-y-12 text-gray-800">
            <header className="relative bg-[#5a1f4e] py-24 px-8 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 flex flex-col justify-around text-[#f2c94c] pointer-events-none">
                <i className="fas fa-graduation-cap text-9xl"></i>
                <i className="fas fa-hand-fist text-9xl"></i>
              </div>
              <div className="relative z-10 max-w-2xl text-white">
                <span data-i18n="hero.badge" className="inline-block bg-[#f2c94c] text-[#5a1f4e] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-4">
                  {t('hero.badge')}
                </span>
                <h1 data-i18n="hero.title" className="text-5xl md:text-7xl font-black mb-6 leading-tight">
                  {t('hero.title')}
                </h1>
                <p data-i18n="hero.desc" className="text-xl text-purple-100 mb-8 max-w-xl font-medium leading-relaxed">
                  {t('hero.desc')}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button data-i18n="hero.btnProposals" onClick={() => setCurrentView('propostas')} className="bg-[#f2c94c] text-[#5a1f4e] px-8 py-3 rounded-xl font-black hover:scale-105 transition-transform shadow-lg uppercase text-sm">
                    {t('hero.btnProposals')}
                  </button>
                  <button data-i18n="hero.btnLibrary" onClick={() => setCurrentView('biblioteca')} className="bg-transparent border-2 border-[#f2c94c] text-[#f2c94c] px-8 py-3 rounded-xl font-black hover:bg-[#f2c94c]/10 transition-colors uppercase text-sm">
                    {t('hero.btnLibrary')}
                  </button>
                </div>
              </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'fa-book-open', title: t('feature.knowledge.title'), text: t('feature.knowledge.desc'), key: 'knowledge' },
                { icon: 'fa-hand-fist', title: t('feature.mobilization.title'), text: t('feature.mobilization.desc'), key: 'mobilization' },
                { icon: 'fa-user-shield', title: t('feature.support.title'), text: t('feature.support.desc'), key: 'support' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-12 h-12 bg-purple-50 text-[#5a1f4e] rounded-xl flex items-center justify-center mb-6 shadow-inner">
                    <i className={`fas ${item.icon} text-xl`}></i>
                  </div>
                  <h3 data-i18n={`feature.${item.key}.title`} className="text-xl font-black mb-3 text-gray-900 tracking-tight">{item.title}</h3>
                  <p data-i18n={`feature.${item.key}.desc`} className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </section>
          </div>
        );

      case 'quem-somos':
        return (
          <div className="max-w-4xl mx-auto py-12 space-y-12 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
              <h2 data-i18n="nav.quemSomos" className="text-4xl font-black text-[#5a1f4e] border-l-8 border-[#f2c94c] pl-6 uppercase tracking-tighter">{t('nav.quemSomos')}</h2>
              <a data-i18n="about.fullManifesto" href={MANIFESTO_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#f2c94c] text-[#5a1f4e] px-6 py-3 rounded-xl font-black uppercase text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-md">
                <i className="fas fa-file-pdf"></i> {t('about.fullManifesto')}
              </a>
            </div>
            <div className="bg-purple-50 p-8 md:p-12 rounded-3xl border border-purple-100 shadow-inner space-y-6">
              <p data-i18n="about.intro" className="text-xl text-[#5a1f4e] font-bold leading-relaxed italic">
                {t('about.intro')}
              </p>
              <p data-i18n="about.mission" className="text-gray-700 text-lg leading-relaxed">
                {t('about.mission')}
              </p>
            </div>
            <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-16 border border-gray-100 relative overflow-hidden font-serif">
              <div className="relative z-10 space-y-12 text-gray-800">
                <div className="text-center space-y-4">
                  <h3 className="text-4xl font-serif font-bold text-gray-900">{MANIFESTO_TEXT.title}</h3>
                  <p className="text-[#5a1f4e] font-bold tracking-widest uppercase text-sm font-sans italic">{MANIFESTO_TEXT.location}</p>
                </div>
                <div className="grid grid-cols-1 gap-16">
                  {MANIFESTO_TEXT.sections.map((section, idx) => (
                    <section key={idx} className="space-y-6">
                      <h4 className="text-2xl font-black text-[#5a1f4e] border-b-2 border-purple-50 pb-2 inline-block font-sans">{section.title}</h4>
                      <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed whitespace-pre-wrap">{section.content}</div>
                    </section>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'propostas':
        return (
          <div className="max-w-4xl mx-auto py-12 animate-fade-in space-y-12">
             <div className="bg-[#5a1f4e] text-white p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                  <i className="fas fa-hand-fist text-[150px]"></i>
                </div>
                <h2 data-i18n="nav.nossaLuta" className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">{t('nav.nossaLuta')}</h2>
                <p className="text-purple-100 text-lg opacity-90 max-w-xl font-medium">
                   {language === 'pt' ? 'As pautas fundamentais e frentes de ação do M.E.E.L no Polo Universitário da Ajuda.' : language === 'en' ? 'The fundamental agendas and action fronts of M.E.E.L at the Ajuda University Hub.' : 'Las agendas fundamentales y frentes de acción del M.E.E.L en el Polo Universitario de Ajuda.'}
                </p>
             </div>
             <div className="space-y-6">
                {MOCK_PROPOSALS.map(prop => {
                  const isExpanded = expandedProposals.includes(prop.id);
                  return (
                    <div key={prop.id} className="bg-white rounded-3xl border-l-8 border-l-[#5a1f4e] shadow-sm overflow-hidden transition-all hover:shadow-md">
                      <button onClick={() => toggleProposal(prop.id)} className="w-full text-left p-8 flex items-center justify-between hover:bg-gray-50/50 transition-colors">
                        <div className="flex-1">
                          <h4 className="text-2xl font-black text-gray-900 uppercase tracking-tight">{prop.title}</h4>
                          {!isExpanded && <p className="text-gray-500 text-sm mt-1">{prop.description}</p>}
                        </div>
                        <div className={`w-12 h-12 rounded-full bg-purple-50 flex items-center justify-center text-[#5a1f4e] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
                          <i className="fas fa-chevron-down"></i>
                        </div>
                      </button>
                      {isExpanded && (
                        <div className="px-8 pb-8 pt-2 border-t border-gray-50 animate-fade-in space-y-6">
                          <p className="text-gray-700 text-lg font-medium italic">{prop.description}</p>
                          <ul className="space-y-4">
                            {prop.details?.map((detail, idx) => (
                              <li key={idx} className="flex gap-4 text-gray-600 leading-relaxed text-lg">
                                <span className="text-[#5a1f4e] mt-1.5 flex-shrink-0 text-xs"><i className="fas fa-circle"></i></span>
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                          {prop.notice && (
                            <div className="p-5 bg-yellow-50 rounded-2xl border border-yellow-100 flex items-start gap-4">
                               <i className="fas fa-exclamation-triangle text-2xl text-yellow-600 mt-1"></i>
                               <div className="space-y-1">
                                 <p data-i18n="common.important" className="font-black text-yellow-800 uppercase text-[10px] tracking-widest">{t('common.important')}</p>
                                 <p className="text-yellow-700 text-sm leading-relaxed">{prop.notice}</p>
                               </div>
                            </div>
                          )}
                          {prop.links && (
                            <div className="flex flex-wrap gap-4 pt-4">
                              {prop.links.map((link, idx) => (
                                <button key={idx} onClick={() => handleLinkClick(link.url)} className="bg-[#5a1f4e] text-[#f2c94c] px-6 py-3 rounded-xl font-black uppercase text-xs shadow-md hover:scale-105 transition-transform">
                                  {link.label}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
             </div>
          </div>
        );

      case 'biblioteca':
        return (
          <div className="py-12 animate-fade-in space-y-12">
            <div className="flex flex-col md:flex-row gap-8 items-center bg-[#5a1f4e] text-white p-8 md:p-12 rounded-[40px] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none"><i className="fas fa-file-alt text-[200px]"></i></div>
              <div className="flex-1 z-10 space-y-4">
                <h2 data-i18n="nav.biblioteca" className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">{t('nav.biblioteca')}</h2>
                <h3 className="text-xl md:text-2xl text-[#f2c94c] font-bold">Portal de Recursos Académicos e Digitais</h3>
                <p className="text-purple-100 text-lg opacity-90 max-w-2xl leading-relaxed">
                  {language === 'pt' ? 'O conhecimento é a nossa maior arma. Explora o nosso acervo gratuito.' : language === 'en' ? 'Knowledge is our greatest weapon. Explore our free collection.' : 'El conocimiento es nuestra mayor arma. Explora nuestro acervo gratuito.'} <br/>
                  <span data-i18n="site.motto" className="font-bold">{t('site.motto')}</span>
                </p>
              </div>
            </div>
            
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 space-y-8">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="relative flex-1">
                  <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input type="text" placeholder={t('lib.searchPlaceholder')} value={searchLibrary} onChange={(e) => setSearchLibrary(e.target.value)} className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-[#5a1f4e]/10 focus:border-[#5a1f4e] outline-none transition-all" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button data-i18n="lib.all" onClick={() => { setActiveLibraryCategory(null); setSelectedLetter(null); }} className={`px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${!activeLibraryCategory && !selectedLetter ? 'bg-[#5a1f4e] text-[#f2c94c]' : 'bg-gray-100 text-gray-400'}`}>{t('lib.all')}</button>
                  {LIBRARY_CATEGORIES.map(cat => (
                    <button key={cat.id} onClick={() => { setActiveLibraryCategory(cat.id); }} className={`px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeLibraryCategory === cat.id ? 'bg-[#5a1f4e] text-[#f2c94c]' : 'bg-gray-100 text-gray-400'}`}>
                      <i className={`fas ${cat.icon}`}></i> {cat.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Filtro Alfabético A-Z */}
              <div className="space-y-4 pt-4 border-t border-gray-50">
                <div className="flex items-center justify-between">
                  <p data-i18n="lib.filterAlpha" className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400">{t('lib.filterAlpha')}</p>
                  {selectedLetter && (
                    <button 
                      data-i18n="lib.clearFilter" 
                      onClick={() => setSelectedLetter(null)}
                      className="text-[10px] font-black uppercase text-[#5a1f4e] hover:underline"
                    >
                      {t('lib.clearFilter')} (x)
                    </button>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5 md:gap-2">
                  {ALPHABET.map(letter => (
                    <button
                      key={letter}
                      onClick={() => setSelectedLetter(letter === selectedLetter ? null : letter)}
                      className={`w-8 h-8 md:w-10 md:h-10 rounded-lg flex items-center justify-center font-bold text-sm transition-all shadow-sm ${
                        selectedLetter === letter 
                        ? 'bg-[#f2c94c] text-[#5a1f4e] scale-110 shadow-md ring-2 ring-[#5a1f4e]/10' 
                        : 'bg-gray-50 text-gray-400 hover:bg-gray-100 hover:text-gray-600'
                      }`}
                    >
                      {letter}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-24">
              {/* Seção 1: Acervo Interno */}
              {(filteredInternal.length > 0) && (
                <section className="space-y-12">
                  <div className="border-l-8 border-[#f2c94c] pl-6">
                    <h2 data-i18n="lib.internalTitle" className="text-4xl font-black text-gray-900 uppercase tracking-tighter">{t('lib.internalTitle')}</h2>
                    <p data-i18n="lib.internalDesc" className="text-gray-500 font-medium">{t('lib.internalDesc')}</p>
                  </div>
                  <div className="space-y-16">
                    {filteredInternal.map(category => (
                      <div key={category.id} className="space-y-8">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 bg-purple-50 text-[#5a1f4e] rounded-3xl flex items-center justify-center shadow-inner"><i className={`fas ${category.icon} text-2xl`}></i></div>
                          <div className="flex-1 border-b-2 border-gray-100 pb-4">
                            <h3 className="text-2xl font-black text-gray-800 tracking-tight uppercase">{category.title}</h3>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                          {category.items.map(item => (
                            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-[32px] border-2 border-gray-50 shadow-sm hover:shadow-2xl transition-all flex flex-col active:scale-95">
                              <div className="flex items-center gap-2 mb-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#5a1f4e] bg-purple-50 px-3 py-1 rounded-full">{item.type}</span>
                              </div>
                              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5a1f4e]">{item.title}</h4>
                              <p className="text-sm text-gray-500 line-clamp-3 mb-6 italic leading-relaxed">{item.description}</p>
                              <div className="mt-auto flex items-center justify-between">
                                 <span data-i18n="lib.accessBtn" className="text-xs font-black text-[#5a1f4e] uppercase flex items-center gap-2">{t('lib.accessBtn')} <i className="fas fa-chevron-right text-[10px]"></i></span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {/* Seção 2: Fontes Externas de Pesquisa */}
              {(filteredExternal.length > 0) && (
                <section className="space-y-12">
                  <div className="border-l-8 border-[#5a1f4e] pl-6">
                    <h2 data-i18n="lib.externalTitle" className="text-4xl font-black text-gray-900 uppercase tracking-tighter">{t('lib.externalTitle')}</h2>
                    <p data-i18n="lib.externalDesc" className="text-gray-500 font-medium">{t('lib.externalDesc')}</p>
                  </div>
                  <div className="space-y-16">
                    {filteredExternal.map(category => (
                      <div key={category.id} className="space-y-8">
                        <div className="flex items-center gap-6">
                          <div className="w-16 h-16 bg-purple-50 text-[#5a1f4e] rounded-3xl flex items-center justify-center shadow-inner"><i className={`fas ${category.icon} text-2xl`}></i></div>
                          <div className="flex-1 border-b-2 border-gray-100 pb-4">
                            <h3 className="text-2xl font-black text-gray-800 tracking-tight uppercase">{category.title}</h3>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                          {category.items.map(item => (
                            <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-[32px] border-2 border-gray-100 shadow-sm hover:shadow-2xl transition-all flex flex-col active:scale-95">
                              <div className="flex items-center gap-2 mb-4">
                                <span className="text-[10px] font-black uppercase tracking-widest text-[#5a1f4e] bg-purple-50 px-3 py-1 rounded-full">{item.type}</span>
                              </div>
                              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5a1f4e]">{item.title}</h4>
                              <p className="text-sm text-gray-500 line-clamp-3 mb-6 italic leading-relaxed">{item.description}</p>
                              <div className="mt-auto flex items-center justify-between">
                                 <span data-i18n="lib.accessBtn" className="text-xs font-black text-[#5a1f4e] uppercase flex items-center gap-2">{t('lib.accessBtn')} <i className="fas fa-chevron-right text-[10px]"></i></span>
                              </div>
                            </a>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </div>
          </div>
        );

      case 'abaixo-assinado':
        return (
          <div className="max-w-4xl mx-auto py-12 space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 data-i18n="petitions.header" className="text-4xl font-black text-[#5a1f4e] uppercase tracking-tighter">
                {t('petitions.header')}
              </h2>
              <p data-i18n="petitions.desc" className="text-gray-600 max-w-xl mx-auto font-medium">
                {t('petitions.desc')}
              </p>
            </div>
            
            <div className="grid grid-cols-1 gap-12">
              {MOCK_PETITIONS.map((p, index) => (
                <div key={p.id} className="bg-white rounded-[40px] p-8 md:p-12 border border-gray-100 shadow-xl overflow-hidden relative group">
                  <div className="absolute top-0 right-0 p-8 opacity-5 text-[#5a1f4e] group-hover:opacity-10 transition-opacity">
                    <i className={`fas ${index === 0 ? 'fa-money-bill-wave' : index === 1 ? 'fa-shield-heart' : 'fa-building-columns'} text-[120px]`}></i>
                  </div>
                  
                  <div className="relative z-10 space-y-6">
                    <div className="flex items-center gap-3">
                      <span className="bg-[#5a1f4e] text-[#f2c94c] w-10 h-10 rounded-full flex items-center justify-center font-black">{index + 1}</span>
                      <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight">PETIÇÃO: {p.title}</h3>
                    </div>
                    
                    <div className="space-y-4">
                      <p data-i18n="petitions.objective" className="font-bold text-[#5a1f4e] border-l-4 border-[#f2c94c] pl-4 uppercase text-xs tracking-widest">{t('petitions.objective')}</p>
                      <p className="text-gray-800 font-medium leading-relaxed">{p.objective}</p>
                    </div>

                    <div className="space-y-4">
                      <p data-i18n="petitions.summary" className="font-bold text-gray-400 uppercase text-[10px] tracking-widest">{t('petitions.summary')}</p>
                      <p className="text-gray-600 leading-relaxed text-sm italic">{p.description}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-50">
                      <button data-i18n="petitions.readFull"
                        onClick={() => { setCurrentView(p.fullTextView); window.scrollTo(0,0); }}
                        className="bg-purple-50 text-[#5a1f4e] px-6 py-4 rounded-2xl font-black uppercase text-xs hover:bg-[#5a1f4e] hover:text-[#f2c94c] transition-all shadow-sm"
                      >
                        {t('petitions.readFull')}
                      </button>
                      <a data-i18n="petitions.signBtn"
                        href={p.formUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 bg-[#5a1f4e] text-[#f2c94c] py-4 rounded-2xl font-black uppercase text-xs shadow-lg hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-3"
                      >
                        <i className="fas fa-pen-nib"></i> {t('petitions.signBtn')}
                      </a>
                      <button data-i18n="petitions.shareBtn"
                        onClick={() => handleShare(p.title, p.formUrl)} 
                        className="bg-gray-50 border-2 border-gray-100 text-gray-400 px-6 py-4 rounded-2xl font-black uppercase text-[10px] hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                      >
                        <i className="fas fa-share-alt"></i> {t('petitions.shareBtn')}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'carta-reclamacao':
      case 'reivindicacao-odio':
      case 'reivindicacao-acesso':
        return (
          <div className="max-w-4xl mx-auto py-12 space-y-8 animate-fade-in">
             <button data-i18n="petitions.backBtn" onClick={() => setCurrentView('abaixo-assinado')} className="text-[#5a1f4e] font-black uppercase text-xs flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                <i className="fas fa-arrow-left"></i> {t('petitions.backBtn')}
             </button>
             <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-16 border border-gray-100 font-serif text-gray-800 leading-relaxed space-y-8 text-justify">
                {currentView === 'carta-reclamacao' && (
                   <div className="space-y-6">
                      <h2 className="text-2xl font-black uppercase font-sans text-gray-900 tracking-tighter border-b-2 border-purple-50 pb-4">RECLAMAÇÃO FORMAL CONTRA A COBRANÇA DE PROPINAS</h2>
                      <p className="italic text-sm text-[#5a1f4e] font-bold">(Subscrita por estudantes mediante formulário; para leitura pública e envio periódico)</p>
                      <p>Nós, estudantes subscritores(as), membros e apoiadores do Movimento dos Estudantes em Luta (M.E.E.L.), vimos, por este meio, apresentar reclamação formal e manifestar a nossa oposição à política de cobrança de propinas praticada por esta instituição.</p>
                      <p><strong>Subscrição/assinaturas:</strong> a subscrição é recolhida por via de formulário. A identificação dos(as) estudantes subscritores(as) segue em anexo, para efeitos de prova e registo, não sendo divulgada publicamente.</p>
                      <p>Esclarecemos, desde já, que a reivindicação central desta reclamação é a extinção das propinas no ensino superior público. As propostas de redução constantes deste documento são entendidas como medidas urgentes e transitórias, que não substituem nem encerram a exigência pela eliminação integral da cobrança.</p>
                      <h3 className="text-lg font-bold font-sans uppercase">1. Contextualização</h3>
                      <p>A educação pública constitui um direito social fundamental, indispensável ao desenvolvimento humano, democrático e crítico da sociedade. O atual modelo de financiamento do ensino superior, baseado na cobrança de propinas, opera como mecanismo estrutural de exclusão, restringindo o acesso e a permanência de estudantes de baixa renda.</p>
                   </div>
                )}
                {currentView === 'reivindicacao-odio' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black uppercase font-sans text-gray-900 tracking-tighter border-b-2 border-purple-50 pb-4">Compromisso da instituição contra o ódio e discriminação</h2>
                    <p>O M.E.E.L. – Movimento dos Estudantes em Luta afirma que nenhuma forma de ódio, discriminação, assédio ou silenciamento pode ser normalizada no espaço universitário. Requeremos que a instituição assuma publicamente um compromisso de tolerância zero com práticas discriminatórias.</p>
                    <p>Subscrição/assinaturas: esta petição é apresentada como abaixo assinado, com subscrição recolhida por formulário online. Por razões de proteção de dados e segurança dos(as) estudantes, a lista de subscritores(as) não será publicada; será enviada em anexo, juntamente com o pedido, às entidades destinatárias, para efeitos de comprovação.</p>
                  </div>
                )}
                {currentView === 'reivindicacao-acesso' && (
                  <div className="space-y-6">
                    <h2 className="text-2xl font-black uppercase font-sans text-gray-900 tracking-tighter border-b-2 border-purple-50 pb-4">Acesso pleno aos espaços académicos na Universidade de Lisboa</h2>
                    <p>O M.E.E.L. – Movimento dos Estudantes em Luta requer que a Universidade de Lisboa (ULisboa) assegure o acesso efetivo, não discriminatório e previsível dos(as) estudantes aos espaços e serviços universitários de uso académico — incluindo bibliotecas, laboratórios, salas de estudo e áreas de trabalho.</p>
                    <p>Subscrição/assinaturas: esta petição é apresentada como abaixo assinado, com subscrição recolhida por formulário online. A lista de subscritores(as) não será disponibilizada publicamente.</p>
                  </div>
                )}
                <p className="text-sm font-sans italic opacity-60">Conteúdo textual disponível na íntegra para subscrição via formulário oficial.</p>
             </div>
          </div>
        );

      case 'denuncias':
        return (
          <div className="max-w-4xl mx-auto py-12 space-y-12 animate-fade-in">
            <div className="bg-[#5a1f4e] p-8 md:p-12 rounded-[40px] text-white shadow-2xl relative overflow-hidden text-center md:text-left">
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <i className="fas fa-user-shield text-[150px]"></i>
              </div>
              <div className="relative z-10 space-y-4">
                <h2 data-i18n="denuncias.title" className="text-4xl font-black uppercase tracking-tighter">{t('denuncias.title')}</h2>
                <p data-i18n="denuncias.subtitle" className="text-xl text-purple-100 opacity-90 leading-relaxed font-medium">
                  {t('denuncias.subtitle')}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 flex flex-col items-center text-center space-y-6 transition-all hover:shadow-2xl">
                <div className="w-20 h-20 bg-purple-50 text-[#5a1f4e] rounded-full flex items-center justify-center shadow-inner">
                  <i className="fas fa-file-signature text-3xl"></i>
                </div>
                <div>
                  <h4 data-i18n="denuncias.formHeader" className="text-xl font-black text-gray-900 uppercase mb-2">{t('denuncias.formHeader')}</h4>
                  <p data-i18n="denuncias.formDesc" className="text-gray-500 text-sm mb-4">{t('denuncias.formDesc')}</p>
                </div>
                <a data-i18n="denuncias.formBtn"
                  href={PETITION_FORM_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-[#5a1f4e] text-[#f2c94c] py-4 rounded-2xl font-black uppercase text-sm shadow-md hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-external-link-alt"></i> {t('denuncias.formBtn')}
                </a>
              </div>

              <div className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 flex flex-col items-center text-center space-y-6 transition-all hover:shadow-2xl">
                <div className="w-20 h-20 bg-yellow-50 text-[#5a1f4e] rounded-full flex items-center justify-center shadow-inner">
                  <i className="fas fa-envelope text-3xl"></i>
                </div>
                <div>
                  <h4 data-i18n="denuncias.contactHeader" className="text-xl font-black text-gray-900 uppercase mb-2">{t('denuncias.contactHeader')}</h4>
                  <p data-i18n="denuncias.contactDesc" className="text-gray-500 text-sm mb-4">{t('denuncias.contactDesc')}</p>
                </div>
                <a data-i18n="denuncias.contactBtn"
                  href={`mailto:${DENUNCIAS_EMAIL}`} 
                  className="w-full bg-[#f2c94c] text-[#5a1f4e] py-4 rounded-2xl font-black uppercase text-sm shadow-md hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-envelope text-xl"></i> {t('denuncias.contactBtn')}
                </a>
              </div>
            </div>

            <div className="p-8 bg-yellow-50 rounded-[32px] border border-yellow-100 flex flex-col gap-6">
               <div className="flex items-center gap-3 text-yellow-800">
                 <i className="fas fa-exclamation-triangle text-3xl"></i>
                 <h3 data-i18n="denuncias.important" className="font-black uppercase tracking-widest text-lg">{t('denuncias.important')}</h3>
               </div>
               <div className="space-y-6">
                 <p data-i18n="denuncias.importantDesc" className="text-yellow-900 text-lg leading-relaxed font-medium">
                   {t('denuncias.importantDesc')}
                 </p>
                 <div className="space-y-3">
                   <p data-i18n="denuncias.objectiveHeader" className="text-yellow-800 font-bold uppercase text-xs tracking-widest">{t('denuncias.objectiveHeader')}</p>
                   <ul className="space-y-2">
                     {[
                       t('denuncias.obj1'),
                       t('denuncias.obj2'),
                       t('denuncias.obj3')
                     ].map((item, idx) => (
                       <li key={idx} className="flex items-center gap-3 text-yellow-700">
                         <div className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></div>
                         <span className="font-medium">{item}</span>
                       </li>
                     ))}
                   </ul>
                 </div>
               </div>
            </div>
          </div>
        );

      case 'contato':
        return (
          <div className="max-w-4xl mx-auto py-12 grid grid-cols-1 md:grid-cols-2 gap-12 animate-fade-in">
            <div className="space-y-8">
              <h2 data-i18n="nav.contato" className="text-4xl font-black text-[#5a1f4e] uppercase border-l-8 border-[#f2c94c] pl-6 tracking-tighter">{t('nav.contato')}</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-[#5a1f4e] rounded-xl flex items-center justify-center"><i className="fas fa-envelope"></i></div>
                  <div><p className="text-xs font-black text-gray-400 uppercase tracking-widest">E-mail</p><p className="font-bold text-gray-800">{CONTACT_EMAIL}</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-[#5a1f4e] rounded-xl flex items-center justify-center"><i className="fab fa-instagram"></i></div>
                  <div><p className="text-xs font-black text-gray-400 uppercase tracking-widest">Instagram</p><a href={INSTAGRAM_URL} target="_blank" className="font-bold text-gray-800 hover:text-[#5a1f4e]">@meel.luta</a></div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return <div className="p-12 text-center text-gray-400 font-bold uppercase tracking-widest">Selecione uma opção no menu.</div>;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 selection:bg-[#f2c94c] selection:text-[#5a1f4e]">
      <Navbar 
        currentView={currentView} 
        onNavigate={setCurrentView} 
        language={language}
        onLanguageChange={setLanguage}
        t={t}
      />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">{renderContent()}</main>
      <footer className="bg-[#5a1f4e] text-white py-16 mt-12 no-print border-t-8 border-[#f2c94c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="bg-[#f2c94c] text-[#5a1f4e] font-black text-3xl px-3 py-1 rounded inline-block cursor-pointer" onClick={() => handleLinkClick('inicio')}>M.E.E.L</div>
              <p data-i18n="footer.motto" className="text-purple-100 text-lg font-medium max-w-md">{t('footer.motto')}</p>
              <div className="flex flex-col gap-4">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#f2c94c] hover:text-white transition-colors group">
                  <i className="fab fa-instagram text-xl group-hover:scale-110 transition-transform"></i><span className="font-bold tracking-wider">Instagram (@meel.luta)</span>
                </a>
              </div>
            </div>
            <div>
              <h5 data-i18n="footer.linksHeader" className="font-black text-[#f2c94c] mb-8 uppercase text-xs tracking-[0.2em] border-b border-purple-800 pb-4">{t('footer.linksHeader')}</h5>
              <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-purple-200">
                <li><button data-i18n="nav.biblioteca" onClick={() => handleLinkClick('biblioteca')} className="hover:text-white transition-colors">{t('nav.biblioteca')}</button></li>
                <li><button data-i18n="nav.nossaLuta" onClick={() => handleLinkClick('propostas')} className="hover:text-white transition-colors">{t('nav.nossaLuta')}</button></li>
                <li><button data-i18n="nav.denuncias" onClick={() => handleLinkClick('denuncias')} className="hover:text-white transition-colors">{t('nav.denuncias')}</button></li>
                <li><button data-i18n="nav.peticoes" onClick={() => handleLinkClick('abaixo-assinado')} className="hover:text-white transition-colors">{t('nav.peticoes')}</button></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 data-i18n="footer.supportHeader" className="font-black text-[#f2c94c] mb-8 uppercase text-xs tracking-[0.2em] border-b border-purple-800 pb-4">{t('footer.supportHeader')}</h5>
              <p data-i18n="footer.supportDesc" className="text-purple-100 text-sm leading-relaxed font-medium">{t('footer.supportDesc')}</p>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-16 pt-8 text-center text-[10px] text-purple-400 font-black uppercase tracking-[0.3em]">
            &copy; 2026 <span data-i18n="footer.copyright">{t('footer.copyright')}</span>
          </div>
        </div>
      </footer>
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in { animation: fade-in 0.6s ease-out forwards; }
        @media print { .no-print { display: none !important; } main { width: 100% !important; max-width: none !important; margin: 0 !important; padding: 0 !important; } .bg-white { box-shadow: none !important; border: none !important; } .animate-fade-in { animation: none; opacity: 1; transform: none; } body { background: white !important; } }
      `}</style>
    </div>
  );
};

export default App;
