
import React, { useState } from 'react';
import { AppView, Language } from '../types';

interface NavbarProps {
  currentView: AppView;
  onNavigate: (view: AppView) => void;
  language: Language;
  onLanguageChange: (lang: Language) => void;
  t: (key: string) => string;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate, language, onLanguageChange, t }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems: { id: AppView; label: string }[] = [
    { id: 'inicio', label: t('nav.inicio') },
    { id: 'quem-somos', label: t('nav.quemSomos') },
    { id: 'propostas', label: t('nav.nossaLuta') },
    { id: 'biblioteca', label: t('nav.biblioteca') },
    { id: 'denuncias', label: t('nav.denuncias') },
    { id: 'abaixo-assinado', label: t('nav.peticoes') },
    { id: 'contato', label: t('nav.contato') },
  ];

  const handleNavClick = (view: AppView) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-[#5a1f4e] text-[#f2c94c] sticky top-0 z-50 shadow-lg border-b-2 border-[#f2c94c]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('inicio')}>
            <div className="bg-[#f2c94c] text-[#5a1f4e] font-black text-2xl px-3 py-1 rounded transition-transform group-hover:scale-105">M.E.E.L</div>
            <span className="hidden md:block font-black text-[10px] tracking-[0.2em] uppercase text-purple-200">{t('site.subtitle')}</span>
          </div>
          
          <div className="hidden xl:flex items-center gap-6">
            <ul className="flex space-x-1">
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-black uppercase tracking-widest transition-all ${
                      currentView === item.id 
                        ? 'bg-[#f2c94c] text-[#5a1f4e] shadow-md' 
                        : 'hover:bg-[#f2c94c]/10 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="flex items-center bg-purple-900/50 rounded-xl px-3 py-1 border border-purple-400/20">
              <i className="fas fa-globe text-xs mr-2 opacity-70"></i>
              <select 
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-transparent text-[#f2c94c] text-[10px] font-black uppercase tracking-widest outline-none cursor-pointer"
              >
                <option value="pt" className="bg-[#5a1f4e]">PT</option>
                <option value="en" className="bg-[#5a1f4e]">EN</option>
                <option value="es" className="bg-[#5a1f4e]">ES</option>
              </select>
            </div>
          </div>

          <div className="xl:hidden flex items-center gap-4">
             <select 
                value={language}
                onChange={(e) => onLanguageChange(e.target.value as Language)}
                className="bg-purple-900/50 text-[#f2c94c] text-[10px] font-black uppercase p-2 rounded-xl outline-none"
              >
                <option value="pt">PT</option>
                <option value="en">EN</option>
                <option value="es">ES</option>
              </select>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-xl bg-purple-900/50 hover:bg-[#f2c94c]/20 focus:outline-none transition-colors"
            >
              <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="xl:hidden bg-[#5a1f4e] border-t border-purple-800 animate-fade-in shadow-2xl">
          <div className="px-4 pt-4 pb-6 space-y-2">
            {menuItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`block w-full text-left px-5 py-4 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                  currentView === item.id 
                    ? 'bg-[#f2c94c] text-[#5a1f4e]' 
                    : 'text-[#f2c94c] hover:bg-purple-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
