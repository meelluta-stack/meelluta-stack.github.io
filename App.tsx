
import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import { AppView, Proposal, LibraryItem, ResourceCategory } from './types';
import { LIBRARY_CATEGORIES, MOCK_PROPOSALS, MOCK_PETITIONS, COLORS, MANIFESTO_TEXT } from './constants';
import { books, Book } from './data/books';
import { videos, Video } from './data/videos';
import { links, ResourceLink } from './data/links';

const MANIFESTO_LINK = "https://drive.google.com/file/d/1UJ6jKEIoiEb9c68_mGNxf2wwsCv2cN02/view";
const PETITION_FORM_LINK = "https://cryptpad.fr/form/#/2/form/view/wHshzFmQMO5ZfL18BJyDP2oPb7QMZmCXVCVtkGbS4Ac/"; 
const INSTAGRAM_URL = "https://www.instagram.com/meel.luta/";
const WHATSAPP_CANAL = "https://whatsapp.com/channel/0029VajG9z0AInPtL2l7Hw2G"; 
const CONTACT_EMAIL = "meel.luta@protonmail.com";
const DENUNCIAS_EMAIL = "denuncias.meel@protonmail.com";

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>('inicio');
  const [searchLibrary, setSearchLibrary] = useState('');
  const [expandedProposals, setExpandedProposals] = useState<number[]>([]);
  const [activeLibraryCategory, setActiveLibraryCategory] = useState<string | null>(null);
  const [selectedSubTypes, setSelectedSubTypes] = useState<string[]>([]);

  const toggleProposal = (id: number) => {
    setExpandedProposals(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const handleLinkClick = (url: string) => {
    if (url === 'abaixo-assinado' || url === 'denuncias' || url === 'biblioteca' || url === 'propostas' || url === 'inicio' || url === 'contato') {
      setCurrentView(url as AppView);
      window.scrollTo(0, 0);
    } else if (url.startsWith('mailto:')) {
      window.location.href = url;
    } else if (url !== '#') {
      window.open(url, '_blank');
    }
  };

  const filteredLibraryCategories = useMemo(() => {
    return LIBRARY_CATEGORIES.map(cat => {
      const items = cat.items.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchLibrary.toLowerCase()) ||
          item.subType.toLowerCase().includes(searchLibrary.toLowerCase()) ||
          item.description.toLowerCase().includes(searchLibrary.toLowerCase());
        
        const matchesSubType = selectedSubTypes.length === 0 || selectedSubTypes.includes(item.subType);
        
        return matchesSearch && matchesSubType;
      });

      return { ...cat, items };
    }).filter(cat => {
      const isCorrectCat = activeLibraryCategory ? cat.id === activeLibraryCategory : true;
      return isCorrectCat && cat.items.length > 0;
    });
  }, [searchLibrary, activeLibraryCategory, selectedSubTypes]);

  const handleShare = async (title: string, formUrl: string) => {
    const text = `Junta-te a esta luta do M.E.E.L: ${title}. Assina aqui: ${formUrl}`;
    try {
      if (navigator.share) {
        await navigator.share({ title, text, url: formUrl });
      } else {
        await navigator.clipboard.writeText(`${title}: ${formUrl}`);
        alert("Título e Link copiados!");
      }
    } catch (err) {
      await navigator.clipboard.writeText(`${title}: ${formUrl}`);
      alert("Título e Link copiados!");
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
                <span className="inline-block bg-[#f2c94c] text-[#5a1f4e] font-bold px-3 py-1 rounded-full text-xs uppercase tracking-widest mb-4">BEM VIND@ À LUTA</span>
                <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">M.E.E.L: Educação é Libertação.</h1>
                <p className="text-xl text-purple-100 mb-8 max-w-xl font-medium leading-relaxed">
                  Organização coletiva e independente, ação estudantil pela educação livre e popular.
                </p>
                <div className="flex flex-wrap gap-4">
                  <button onClick={() => setCurrentView('propostas')} className="bg-[#f2c94c] text-[#5a1f4e] px-8 py-3 rounded-xl font-black hover:scale-105 transition-transform shadow-lg uppercase text-sm">
                    Ver Propostas
                  </button>
                  <button onClick={() => setCurrentView('biblioteca')} className="bg-transparent border-2 border-[#f2c94c] text-[#f2c94c] px-8 py-3 rounded-xl font-black hover:bg-[#f2c94c]/10 transition-colors uppercase text-sm">
                    Acessar Biblioteca
                  </button>
                </div>
              </div>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: 'fa-book-open', title: 'Conhecimento', text: 'Democratização do acesso a materiais de formação política e acadêmica, livres e gratuitos.' },
                { icon: 'fa-hand-fist', title: 'Mobilização', text: 'Construção coletiva de espaços de debate, ação e luta em defesa da educação pública, democrática e acessível.' },
                { icon: 'fa-user-shield', title: 'Apoio', text: 'Canal dedicado à escuta, acolhimento e encaminhamento de denúncias feitas por estudantes e trabalhadores.' },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer" onClick={() => {
                  if(idx === 0) setCurrentView('biblioteca');
                  if(idx === 1) setCurrentView('propostas');
                  if(idx === 2) setCurrentView('denuncias');
                }}>
                  <div className="w-12 h-12 bg-purple-50 text-[#5a1f4e] rounded-xl flex items-center justify-center mb-6 shadow-inner">
                    <i className={`fas ${item.icon} text-xl`}></i>
                  </div>
                  <h3 className="text-xl font-black mb-3 text-gray-900 tracking-tight">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.text}</p>
                </div>
              ))}
            </section>
          </div>
        );

      case 'quem-somos':
        return (
          <div className="max-w-4xl mx-auto py-12 space-y-12 animate-fade-in">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-gray-100 pb-8">
              <h2 className="text-4xl font-black text-[#5a1f4e] border-l-8 border-[#f2c94c] pl-6 uppercase tracking-tighter">Quem Somos</h2>
              <a href={MANIFESTO_LINK} target="_blank" rel="noopener noreferrer" className="bg-[#f2c94c] text-[#5a1f4e] px-6 py-3 rounded-xl font-black uppercase text-sm flex items-center gap-2 hover:scale-105 transition-transform shadow-md">
                <i className="fas fa-file-pdf"></i> Manifesto na íntegra (PDF)
              </a>
            </div>
            <div className="bg-purple-50 p-8 md:p-12 rounded-3xl border border-purple-100 shadow-inner space-y-4">
              <p className="text-xl text-[#5a1f4e] font-bold leading-relaxed italic">
                O M.E.E.L – Movimento dos Estudantes em Luta é um espaço autogestionado e independente, onde estudantes se organizam coletivamente para lutar por uma educação livre e democrática.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Acreditamos que o conhecimento liberta e transforma vidas. Por isso, promovemos ação estudantil e compartilhamento de saberes, envolvendo não só estudantes, mas também trabalhadores da universidade, fortalecendo juntos a nossa voz e participação no Polo da Ajuda.
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
                <div className="pt-12 border-t border-gray-100 text-center">
                   <button onClick={() => window.open(MANIFESTO_LINK, '_blank')} className="bg-[#5a1f4e] text-[#f2c94c] px-8 py-4 rounded-2xl font-black uppercase text-xs shadow-xl hover:brightness-110 transition-all inline-flex items-center gap-2">
                     Ler manifesto na íntegra em PDF <i className="fas fa-external-link-alt"></i>
                   </button>
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
                <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter leading-none mb-4">A NOSSA LUTA</h2>
                <p className="text-purple-100 text-lg opacity-90 max-w-xl font-medium">As pautas fundamentais e frentes de ação do M.E.E.L no Polo Universitário da Ajuda.</p>
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
                                 <p className="font-black text-yellow-800 uppercase text-[10px] tracking-widest">Importante</p>
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
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase leading-none">Biblioteca Digital</h2>
                <h3 className="text-xl md:text-2xl text-[#f2c94c] font-bold">Portal de Recursos Académicos e Digitais</h3>
                <p className="text-purple-100 text-lg opacity-90 max-w-2xl leading-relaxed">
                  O conhecimento é a nossa maior arma. Explora o nosso acervo gratuito. <br/>
                  <span className="font-bold">Educação é libertação!</span>
                </p>
                <button onClick={() => window.open(MANIFESTO_LINK, '_blank')} className="bg-[#f2c94c] text-[#5a1f4e] px-6 py-3 rounded-xl font-black uppercase text-xs flex items-center gap-2 hover:scale-105 transition-transform shadow-lg">
                   <i className="fas fa-file-pdf"></i> O Manifesto M.E.E.L na íntegra
                </button>
              </div>
            </div>
            <div className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="relative flex-1">
                  <i className="fas fa-search absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"></i>
                  <input type="text" placeholder="Pesquisar no acervo..." value={searchLibrary} onChange={(e) => setSearchLibrary(e.target.value)} className="w-full bg-gray-50 border-2 border-gray-100 rounded-2xl py-4 pl-12 pr-4 focus:ring-4 focus:ring-[#5a1f4e]/10 focus:border-[#5a1f4e] outline-none transition-all" />
                </div>
                <div className="flex flex-wrap gap-2">
                  <button onClick={() => { setActiveLibraryCategory(null); setSelectedSubTypes([]); }} className={`px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${!activeLibraryCategory ? 'bg-[#5a1f4e] text-[#f2c94c]' : 'bg-gray-100 text-gray-400'}`}>Todos</button>
                  {LIBRARY_CATEGORIES.map(cat => (
                    <button key={cat.id} onClick={() => { setActiveLibraryCategory(cat.id); setSelectedSubTypes([]); }} className={`px-6 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all flex items-center gap-2 ${activeLibraryCategory === cat.id ? 'bg-[#5a1f4e] text-[#f2c94c]' : 'bg-gray-100 text-gray-400'}`}>
                      <i className={`fas ${cat.icon}`}></i> {cat.title}
                    </button>
                  ))}
                </div>
              </div>
            </div>
    <div className="space-y-16">
      {filteredLibraryCategories.map(category => (
                <section key={category.id} className="space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-purple-50 text-[#5a1f4e] rounded-3xl flex items-center justify-center shadow-inner"><i className={`fas ${category.icon} text-2xl`}></i></div>
                    <div className="flex-1 border-b-2 border-gray-100 pb-4">
                      <h3 className="text-3xl font-black text-gray-900 tracking-tight uppercase">{category.title}</h3>
                      <p className="text-gray-400 font-medium">{category.description}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {category.items.map(item => {
                      if (category.id === 'acervo-interno') {
                        return (
                          <div key={item.id} className="bg-white p-8 rounded-[32px] border-2 border-gray-50 shadow-sm hover:shadow-2xl transition-all flex flex-col">
                            <div className="mb-4">
                              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                              <p className="text-sm text-gray-500">Autor: {item.author}</p>
                              <p className="text-sm text-gray-500">Data: {item.description.split(' - ')[1]}</p>
                              <p className="text-sm text-gray-500">Temática: {item.description.split(' - ')[0]}</p>
                            </div>
                            <div className="mt-auto">
                              <a href={item.url} target="_blank" rel="noopener noreferrer" className="bg-[#5a1f4e] text-[#f2c94c] px-6 py-3 rounded-xl font-black uppercase text-xs shadow-md hover:scale-105 transition-transform text-center block">Abrir PDF</a>
                            </div>
                          </div>
                        );
                      } else if (category.id === 'midias-digitais') {
                        return (
                          <div key={item.id} className="bg-white p-8 rounded-[32px] border-2 border-gray-50 shadow-sm hover:shadow-2xl transition-all flex flex-col">
                            <div className="mb-4">
                              <h4 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h4>
                              <p className="text-sm text-gray-500">{item.description}</p>
                            </div>
                            <div className="mt-auto">
                              {item.embed ? (
                                <iframe src={item.url} className="w-full h-48 rounded-xl" allowFullScreen></iframe>
                              ) : (
                                <a href={item.url} target="_blank" rel="noopener noreferrer" className="bg-[#5a1f4e] text-[#f2c94c] px-6 py-3 rounded-xl font-black uppercase text-xs shadow-md hover:scale-105 transition-transform text-center block">Ver Vídeo</a>
                              )}
                            </div>
                          </div>
                        );
                      } else {
                        return (
                          <a key={item.id} href={item.url} target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-[32px] border-2 border-gray-50 shadow-sm hover:shadow-2xl transition-all flex flex-col active:scale-95">
                            <div className="flex items-center gap-2 mb-4">
                              <span className="text-[10px] font-black uppercase tracking-widest text-[#5a1f4e] bg-purple-50 px-3 py-1 rounded-full">{item.type}</span>
                            </div>
                            <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#5a1f4e]">{item.title}</h4>
                            <p className="text-sm text-gray-500 line-clamp-3 mb-6 italic leading-relaxed">{item.description}</p>
                            <div className="mt-auto flex items-center justify-between">
                               <span className="text-xs font-black text-[#5a1f4e] uppercase flex items-center gap-2">Aceder <i className="fas fa-chevron-right text-[10px]"></i></span>
                            </div>
                          </a>
                        );
                      }
                    })}
                  </div>
                </section>
              ))}
            </div>
          </div>
        );

      case 'abaixo-assinado':
        return (
          <div className="max-w-4xl mx-auto py-12 space-y-12 animate-fade-in">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-black text-[#5a1f4e] uppercase tracking-tighter">Assinar Petições – M.E.E.L</h2>
              <p className="text-gray-600 max-w-xl mx-auto font-medium">Participe das reivindicações estudantis e fortaleça a luta por uma educação justa e inclusiva.</p>
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
                      <p className="font-bold text-[#5a1f4e] border-l-4 border-[#f2c94c] pl-4 uppercase text-xs tracking-widest">Objetivo</p>
                      <p className="text-gray-800 font-medium leading-relaxed">{p.objective}</p>
                    </div>

                    <div className="space-y-4">
                      <p className="font-bold text-gray-400 uppercase text-[10px] tracking-widest">Resumo</p>
                      <p className="text-gray-600 leading-relaxed text-sm italic">{p.description}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-50">
                      <button 
                        onClick={() => { setCurrentView(p.fullTextView); window.scrollTo(0,0); }}
                        className="bg-purple-50 text-[#5a1f4e] px-6 py-4 rounded-2xl font-black uppercase text-xs hover:bg-[#5a1f4e] hover:text-[#f2c94c] transition-all shadow-sm"
                      >
                        Ler Reivindicação Completa
                      </button>
                      <a 
                        href={p.formUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex-1 bg-[#5a1f4e] text-[#f2c94c] py-4 rounded-2xl font-black uppercase text-xs shadow-lg hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-3"
                      >
                        <i className="fas fa-pen-nib"></i> Assinar via Cryptpad
                      </a>
                      <button 
                        onClick={() => handleShare(p.title, p.formUrl)} 
                        className="bg-gray-50 border-2 border-gray-100 text-gray-400 px-6 py-4 rounded-2xl font-black uppercase text-[10px] hover:bg-gray-100 transition-all flex items-center justify-center gap-2"
                      >
                        <i className="fas fa-share-alt"></i> Partilhar
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'carta-reclamacao':
        return (
          <div className="max-w-4xl mx-auto py-12 space-y-8 animate-fade-in">
             <button onClick={() => setCurrentView('abaixo-assinado')} className="text-[#5a1f4e] font-black uppercase text-xs flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                <i className="fas fa-arrow-left"></i> Voltar às Petições
             </button>
             <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-16 border border-gray-100 font-serif text-gray-800 leading-relaxed space-y-8">
                <header className="text-center space-y-4 pb-8 border-b border-gray-100">
                   <h2 className="text-2xl md:text-3xl font-black uppercase font-sans text-gray-900 tracking-tighter leading-tight">RECLAMAÇÃO FORMAL CONTRA A COBRANÇA DE PROPINAS</h2>
                   <p className="text-[#5a1f4e] font-bold font-sans uppercase text-sm italic">(Subscrita por estudantes mediante formulário; para leitura pública e envio periódico)</p>
                </header>
                <div className="space-y-6 text-justify">
                   <p>Nós, estudantes subscritores(as), membros e apoiadores do <strong>Movimento dos Estudantes em Luta (M.E.E.L.)</strong>, vimos, por este meio, apresentar reclamação formal e manifestar a nossa oposição à política de cobrança de propinas praticada por esta instituição.</p>
                   <p><strong>Subscrição/assinaturas:</strong> a subscrição é recolhida por via de formulário. A identificação dos(as) estudantes subscritores(as) segue em anexo, para efeitos de prova e registo, não sendo divulgada publicamente.</p>
                   <p>Esclarecemos, desde já, que a reivindicação central desta reclamação é a <strong>extinção das propinas no ensino superior público</strong>. As propostas de redução constantes deste documento são entendidas como medidas urgentes e transitórias, que não substituem nem encerram a exigência pela eliminação integral da cobrança.</p>
                   
                   <h3 className="text-xl font-bold font-sans text-gray-900 border-l-4 border-[#f2c94c] pl-4 uppercase tracking-tight">1. Contextualização</h3>
                   <p>A educação pública constitui um direito social fundamental, indispensável ao desenvolvimento humano, democrático e crítico da sociedade. O atual modelo de financiamento do ensino superior, baseado na cobrança de propinas, opera como mecanismo estrutural de exclusão, restringindo o acesso e a permanência de estudantes de baixa renda.</p>
                   <p>A manutenção de valores elevados, bem como reajustes recorrentes, não se traduz em melhorias proporcionais na infraestrutura, na qualidade pedagógica ou no suporte estudantil.</p>
                   
                   <h3 className="text-xl font-bold font-sans text-gray-900 border-l-4 border-[#f2c94c] pl-4 uppercase tracking-tight">2. Fundamentos</h3>
                   <ul className="list-disc pl-6 space-y-2 font-sans text-sm">
                     <li>A educação pública não pode ser tratada como mercadoria, nem subordinada à lógica do lucro ou da capacidade de pagamento individual;</li>
                     <li>O financiamento do ensino superior deve ser responsabilidade coletiva do Estado, não um encargo transferido aos estudantes;</li>
                     <li>A cobrança de propinas reforça desigualdades sociais pré-existentes e impede a democratização efetiva da universidade;</li>
                     <li>Não há transparência suficiente quanto à destinação e ao reinvestimento dos valores arrecadados;</li>
                     <li>A atual conjuntura económica continua a afetar severamente estudantes e suas famílias;</li>
                     <li>A existência de sistemas públicos de ensino superior gratuitos em outros países demonstra que a extinção das propinas é viável e socialmente necessária.</li>
                   </ul>

                   <h3 className="text-xl font-bold font-sans text-gray-900 border-l-4 border-[#f2c94c] pl-4 uppercase tracking-tight">3. Exigências</h3>
                   <ul className="list-disc pl-6 space-y-2 font-sans text-sm">
                     <li>Redução imediata de 30% no valor das propinas a partir do próximo semestre letivo, como medida emergencial;</li>
                     <li>Redução imediata de 50% no valor das propinas aplicadas a estudantes estrangeiros;</li>
                     <li>Criação de uma comissão mista (estudantes nacionais, estudantes internacionais e administração) para revisão do modelo de financiamento;</li>
                     <li>Realização de auditoria independente aos custos reais por estudante e à aplicação dos recursos arrecadados;</li>
                     <li>Assunção institucional do compromisso com a extinção das propinas, mediante apresentação pública de plano concreto, com prazos e mecanismos de acompanhamento.</li>
                   </ul>

                   <h3 className="text-xl font-bold font-sans text-gray-900 border-l-4 border-[#f2c94c] pl-4 uppercase tracking-tight">4. Publicação e acompanhamento</h3>
                   <p>Informamos que esta reclamação será disponibilizada online para leitura pública e reenviada mensalmente aos setores responsáveis com atualização do número de subscritores(as).</p>

                   <h3 className="text-xl font-bold font-sans text-gray-900 border-l-4 border-[#f2c94c] pl-4 uppercase tracking-tight">5. Prazo e canal de resposta</h3>
                   <p>Solicitamos resposta formal no prazo de 15 dias úteis para: {CONTACT_EMAIL}</p>

                   <div className="pt-12 text-center md:text-left font-sans">
                     <p className="font-bold italic">Atenciosamente,</p>
                     <p className="font-black text-2xl text-[#5a1f4e] mt-2">MOVIMENTO DOS ESTUDANTES EM LUTA (M.E.E.L.)</p>
                   </div>
                </div>
             </div>
          </div>
        );

      case 'reivindicacao-odio':
        return (
          <div className="max-w-4xl mx-auto py-12 space-y-8 animate-fade-in">
             <button onClick={() => setCurrentView('abaixo-assinado')} className="text-[#5a1f4e] font-black uppercase text-xs flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                <i className="fas fa-arrow-left"></i> Voltar às Petições
             </button>
             <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-16 border border-gray-100 font-serif text-gray-800 leading-relaxed space-y-8">
                <header className="text-center space-y-4 pb-8 border-b border-gray-100">
                   <h2 className="text-2xl md:text-3xl font-black uppercase font-sans text-gray-900 tracking-tighter leading-tight">Compromisso da instituição contra o ódio e discriminação</h2>
                </header>
                <div className="space-y-6 text-justify">
                   <p>O M.E.E.L. – Movimento dos Estudantes em Luta afirma que nenhuma forma de ódio, discriminação, assédio ou silenciamento pode ser normalizada no espaço universitário.</p>
                   <p>Requeremos que a instituição assuma publicamente um compromisso de <strong>tolerância zero</strong> com práticas discriminatórias e que determine a abertura de procedimento de apuramento sempre que existam indícios credíveis de condutas incompatíveis com a missão académica, nomeadamente comportamentos que promovam ou legitimem xenofobia, racismo, sexismo ou outras formas de discriminação e incitamento ao ódio.</p>
                   <p><strong>Subscrição/assinaturas:</strong> esta petição é apresentada como abaixo assinado, com subscrição recolhida por formulário online. Por razões de proteção de dados e segurança dos(as) estudantes, a lista de subscritores(as) não será publicada; será enviada em anexo, juntamente com o pedido, às entidades destinatárias, para efeitos de comprovação.</p>
                   
                   <h3 className="text-xl font-bold font-sans text-gray-900 border-l-4 border-[#f2c94c] pl-4 uppercase tracking-tight">Nesse âmbito, solicitamos:</h3>
                   <div className="space-y-6 font-sans text-sm">
                     <div className="flex gap-4">
                       <strong className="text-[#5a1f4e]">I.</strong>
                       <p>A investigação interna dos factos que venham a ser reportados por estudantes e/ou órgãos académicos, com garantias de confidencialidade e proteção contra retaliações;</p>
                     </div>
                     <div className="flex gap-4">
                       <strong className="text-[#5a1f4e]">II.</strong>
                       <p>A disponibilização de um canal formal de denúncia e acompanhamento, com indicação de prazos;</p>
                     </div>
                     <div className="flex gap-4">
                       <strong className="text-[#5a1f4e]">III.</strong>
                       <p>A emissão de uma resposta escrita e fundamentada sobre as medidas adotadas, salvaguardando os deveres de proteção de dados e de reserva legal quando aplicável.</p>
                     </div>
                   </div>
                   <p className="pt-6 font-sans text-sm italic border-t border-gray-100 pt-8 text-gray-500">O objetivo é assegurar um ambiente académico seguro, inclusivo e livre de intimidação, preservando a liberdade académica e o pluralismo, sem que isso possa ser invocado para legitimar discriminação, hostilidade ou exclusão de estudantes.</p>
                </div>
             </div>
          </div>
        );

      case 'reivindicacao-acesso':
        return (
          <div className="max-w-4xl mx-auto py-12 space-y-8 animate-fade-in">
             <button onClick={() => setCurrentView('abaixo-assinado')} className="text-[#5a1f4e] font-black uppercase text-xs flex items-center gap-2 hover:translate-x-[-4px] transition-transform">
                <i className="fas fa-arrow-left"></i> Voltar às Petições
             </button>
             <div className="bg-white shadow-2xl rounded-3xl p-8 md:p-16 border border-gray-100 font-serif text-gray-800 leading-relaxed space-y-8">
                <header className="text-center space-y-4 pb-8 border-b border-gray-100">
                   <h2 className="text-2xl md:text-3xl font-black uppercase font-sans text-gray-900 tracking-tighter leading-tight">Acesso pleno aos espaços académicos na Universidade de Lisboa</h2>
                </header>
                <div className="space-y-6 text-justify">
                   <p>O M.E.E.L. – Movimento dos Estudantes em Luta requer que a Universidade de Lisboa (ULisboa) assegure o acesso efetivo, não discriminatório e previsível dos(as) estudantes aos espaços e serviços universitários de uso académico — incluindo bibliotecas, laboratórios, salas de estudo e áreas de trabalho — em condições compatíveis com as necessidades reais de estudo, investigação, trabalho coletivo e desenvolvimento de projetos.</p>
                   <p><strong>Subscrição/assinaturas:</strong> esta petição é apresentada como abaixo assinado, com subscrição recolhida por formulário online. A lista de subscritores(as) não será disponibilizada publicamente; será remetida em anexo às entidades destinatárias.</p>
                   
                   <h3 className="text-xl font-bold font-sans text-gray-900 border-l-4 border-[#f2c94c] pl-4 uppercase tracking-tight">A abertura alargada promove:</h3>
                   <ul className="list-disc pl-6 space-y-2 font-sans text-sm">
                     <li>Melhor aproveitamento académico;</li>
                     <li>Produção de investigação e trabalhos de qualidade;</li>
                     <li>Desenvolvimento de projetos colaborativos;</li>
                     <li>Bem estar estudantil.</li>
                   </ul>
                   <p className="font-sans text-sm italic">Trata se de uma medida de interesse coletivo, possível de implementar com organização e regras claras, sem comprometer a segurança nem o funcionamento regular das unidades.</p>
                   
                   <h3 className="text-xl font-bold font-sans text-gray-900 border-l-4 border-[#f2c94c] pl-4 uppercase tracking-tight">Solicitamos concretamente:</h3>
                   <div className="space-y-6 font-sans text-sm">
                     <p><strong>1.</strong> Implementação e/ou expansão de horários alargados para bibliotecas, salas de estudo e, quando tecnicamente possível, laboratórios, incluindo períodos pós laborais e, sempre que viável, fins de semana.</p>
                     <p><strong>2.</strong> Publicação de um calendário e regulamento de utilização, aplicável e acessível, com:</p>
                     <ul className="list-disc pl-8 space-y-1">
                       <li>Indicação de horários por espaço e eventuais condições de acesso;</li>
                       <li>Identificação de responsáveis e contactos;</li>
                       <li>Definição de um procedimento de reclamação e resposta em caso de impedimento de acesso, com prazos;</li>
                       <li>Critérios objetivos para eventuais limitações (capacidade, reservas, segurança).</li>
                     </ul>
                   </div>
                   <p className="pt-6 font-sans text-sm font-bold text-[#5a1f4e]">Pelo exposto, solicitamos que a ULisboa adote esta política de forma consistente e verificável, garantindo que os espaços académicos existentes respondam às necessidades reais dos(as) estudantes e contribuam para uma universidade mais inclusiva.</p>
                </div>
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
                <h2 className="text-4xl font-black uppercase tracking-tighter">Canal de Denúncias – M.E.E.L</h2>
                <p className="text-xl text-purple-100 opacity-90 leading-relaxed font-medium">
                  Canal dedicado à escuta, acolhimento e encaminhamento de denúncias feitas por estudantes e trabalhadores.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 flex flex-col items-center text-center space-y-6 transition-all hover:shadow-2xl">
                <div className="w-20 h-20 bg-purple-50 text-[#5a1f4e] rounded-full flex items-center justify-center shadow-inner">
                  <i className="fas fa-file-signature text-3xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-black text-gray-900 uppercase mb-2">Formulário de Denúncias</h4>
                  <p className="text-gray-500 text-sm mb-4">Preencha de forma segura e anónima:</p>
                </div>
                <a 
                  href={PETITION_FORM_LINK} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full bg-[#5a1f4e] text-[#f2c94c] py-4 rounded-2xl font-black uppercase text-sm shadow-md hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-external-link-alt"></i> Aceder ao Cryptpad
                </a>
              </div>

              <div className="bg-white p-8 rounded-[32px] shadow-lg border border-gray-100 flex flex-col items-center text-center space-y-6 transition-all hover:shadow-2xl">
                <div className="w-20 h-20 bg-yellow-50 text-[#5a1f4e] rounded-full flex items-center justify-center shadow-inner">
                  <i className="fas fa-paper-plane text-3xl"></i>
                </div>
                <div>
                  <h4 className="text-xl font-black text-gray-900 uppercase mb-2">Contacto para Denúncias</h4>
                  <p className="text-gray-500 text-sm mb-4">Caso prefira enviar por e-mail:</p>
                </div>
                <a 
                  href={`mailto:${DENUNCIAS_EMAIL}`} 
                  className="w-full bg-[#f2c94c] text-[#5a1f4e] py-4 rounded-2xl font-black uppercase text-sm shadow-md hover:scale-[1.02] transition-transform text-center flex items-center justify-center gap-2"
                >
                  <i className="fas fa-envelope text-xl"></i> Enviar e-mail
                </a>
              </div>
            </div>

            <div className="p-8 bg-yellow-50 rounded-[32px] border border-yellow-100 flex flex-col gap-6">
               <div className="flex items-center gap-3 text-yellow-800">
                 <i className="fas fa-exclamation-triangle text-3xl"></i>
                 <h3 className="font-black uppercase tracking-widest text-lg">⚠️ IMPORTANTE</h3>
               </div>
               <div className="space-y-6">
                 <p className="text-yellow-900 text-lg leading-relaxed font-medium">
                   As denúncias enviadas ao M.E.E.L não têm efeito legal e não são encaminhadas à polícia ou à justiça.
                 </p>
                 <div className="space-y-3">
                   <p className="text-yellow-800 font-bold uppercase text-xs tracking-widest">O objetivo é:</p>
                   <ul className="space-y-2">
                     {[
                       'Denunciar descaso ou negligência;',
                       'Gerar pressão política;',
                       'Fortalecer a luta estudantil.'
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
          <div className="max-w-4xl mx-auto py-12 animate-fade-in space-y-12">
            <h2 className="text-4xl font-black text-[#5a1f4e] uppercase border-l-8 border-[#f2c94c] pl-6 tracking-tighter">Contacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-[#5a1f4e] rounded-xl flex items-center justify-center"><i className="fas fa-envelope"></i></div>
                  <div><p className="text-xs font-black text-gray-400 uppercase tracking-widest">E-mail Oficial</p><p className="font-bold text-gray-800">{CONTACT_EMAIL}</p></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-[#5a1f4e] rounded-xl flex items-center justify-center"><i className="fab fa-instagram"></i></div>
                  <div><p className="text-xs font-black text-gray-400 uppercase tracking-widest">Instagram</p><a href={INSTAGRAM_URL} target="_blank" className="font-bold text-gray-800 hover:text-[#5a1f4e]">@meel.luta</a></div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-50 text-[#5a1f4e] rounded-xl flex items-center justify-center"><i className="fab fa-whatsapp"></i></div>
                  <div><p className="text-xs font-black text-gray-400 uppercase tracking-widest">WhatsApp</p><a href={WHATSAPP_CANAL} target="_blank" className="font-bold text-gray-800 hover:text-[#5a1f4e]">Canal M.E.E.L</a></div>
                </div>
              </div>
              <div className="bg-[#5a1f4e] p-8 rounded-3xl text-white flex flex-col justify-center space-y-4">
                <h4 className="text-2xl font-black uppercase">Junta-te a nós!</h4>
                <p className="text-purple-100 font-medium leading-relaxed">Não somos um movimento fechado. Se és estudante ou trabalhador e queres lutar por uma universidade melhor, entra em contacto connosco.</p>
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
      <Navbar currentView={currentView} onNavigate={setCurrentView} />
      <main className="flex-grow max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 w-full">{renderContent()}</main>
      <footer className="bg-[#5a1f4e] text-white py-16 mt-12 no-print border-t-8 border-[#f2c94c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2 space-y-6">
              <div className="bg-[#f2c94c] text-[#5a1f4e] font-black text-3xl px-3 py-1 rounded inline-block cursor-pointer" onClick={() => handleLinkClick('inicio')}>M.E.E.L</div>
              <p className="text-purple-100 text-lg font-medium max-w-md">Movimento dos Estudantes em Luta. Pelo conhecimento que liberta e transforma.</p>
              <div className="flex flex-col gap-4">
                <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#f2c94c] hover:text-white transition-colors group">
                  <i className="fab fa-instagram text-xl group-hover:scale-110 transition-transform"></i><span className="font-bold tracking-wider">Instagram (@meel.luta)</span>
                </a>
                <a href={`mailto:${CONTACT_EMAIL}`} className="flex items-center gap-3 text-[#f2c94c] hover:text-white transition-colors group">
                  <i className="fas fa-envelope text-xl group-hover:scale-110 transition-transform"></i><span className="font-bold tracking-wider uppercase">{CONTACT_EMAIL}</span>
                </a>
                <a href={WHATSAPP_CANAL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[#f2c94c] hover:text-white transition-colors group">
                  <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform"></i><span className="font-bold tracking-wider">Whatsapp (Canal de atualizações)</span>
                </a>
              </div>
            </div>
            <div>
              <h5 className="font-black text-[#f2c94c] mb-8 uppercase text-xs tracking-[0.2em] border-b border-purple-800 pb-4">Links Rápidos</h5>
              <ul className="space-y-4 text-sm font-black uppercase tracking-widest text-purple-200">
                <li><button onClick={() => handleLinkClick('biblioteca')} className="hover:text-white transition-colors">Biblioteca Virtual</button></li>
                <li><button onClick={() => handleLinkClick('propostas')} className="hover:text-white transition-colors">Pautas de Luta</button></li>
                <li><button onClick={() => handleLinkClick('denuncias')} className="hover:text-white transition-colors">Relatar Abuso</button></li>
                <li><button onClick={() => handleLinkClick('abaixo-assinado')} className="hover:text-white transition-colors">Assinar Petições</button></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-black text-[#f2c94c] mb-8 uppercase text-xs tracking-[0.2em] border-b border-purple-800 pb-4">Apoie a Causa</h5>
              <p className="text-purple-100 text-sm leading-relaxed font-medium">Nosso movimento é autogestionado e independente. Não pedimos doações: convidamos você a se juntar à luta e fortalecer nosso trabalho da forma que puder.</p>
              <div className="pt-4">
                <a href={MANIFESTO_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-[#f2c94c] text-[#5a1f4e] px-6 py-3 rounded-xl font-black text-xs uppercase hover:brightness-110 transition-all shadow-lg">
                  <i className="fas fa-file-pdf"></i> Manifesto na íntegra
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-purple-800 mt-16 pt-8 text-center text-[10px] text-purple-400 font-black uppercase tracking-[0.3em]">
            &copy; 2026 Movimento dos Estudantes em Luta M.E.E.L — Educação é libertação!
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
