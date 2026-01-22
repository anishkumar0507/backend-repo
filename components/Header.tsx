
import React from 'react';

const Header: React.FC = () => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Adjust for fixed header height
        behavior: 'smooth',
      });
    } else if (id === 'top') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }
  };

  const handleSubscribe = () => {
    window.open('https://www.youtube.com/@HEALTHBOOK.OFFICIAL', '_blank');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md h-20 flex items-center border-b border-slate-50">
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between">
        <div 
          className="flex items-center gap-2 cursor-pointer" 
          onClick={(e) => scrollToSection(e, 'top')}
        >
          <img 
            src="/HealthBook Logo.png" 
            alt="HealthBook Logo" 
            className="h-12 w-auto"
          />
        </div>

        <div className="flex items-center gap-8">
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#top" 
              onClick={(e) => scrollToSection(e, 'top')}
              className="text-[15px] font-medium text-slate-600 hover:text-teal-primary transition-colors"
            >
              Home
            </a>
            <a 
              href="#benefits" 
              onClick={(e) => scrollToSection(e, 'benefits')}
              className="text-[15px] font-medium text-slate-600 hover:text-teal-primary transition-colors"
            >
              Benefits
            </a>
            <a 
              href="#featured" 
              onClick={(e) => scrollToSection(e, 'featured')}
              className="text-[15px] font-medium text-slate-600 hover:text-teal-primary transition-colors"
            >
              Featured
            </a>
          </nav>
          <button 
            onClick={handleSubscribe}
            className="bg-[#2cb1b1] text-white px-6 py-2.5 rounded-[10px] font-bold text-base hover:bg-teal-600 transition-all shadow-md active:scale-95"
          >
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
