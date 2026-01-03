import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import Icon from '@/components/ui/icon';

interface NavigationProps {
  scrollToSection: (id: string) => void;
}

const Navigation = ({ scrollToSection }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            СкороДоставка
          </h1>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection('about')} className="text-sm font-medium hover:text-primary transition-colors">О нас</button>
            <button onClick={() => scrollToSection('benefits')} className="text-sm font-medium hover:text-primary transition-colors">Преимущества</button>
            <button onClick={() => scrollToSection('requirements')} className="text-sm font-medium hover:text-primary transition-colors">Требования</button>
            <button onClick={() => scrollToSection('salary')} className="text-sm font-medium hover:text-primary transition-colors">Зарплата</button>
            <button onClick={() => scrollToSection('faq')} className="text-sm font-medium hover:text-primary transition-colors">FAQ</button>
            <button onClick={() => scrollToSection('contacts')} className="text-sm font-medium hover:text-primary transition-colors">Контакты</button>
          </div>
          <Button onClick={() => scrollToSection('contacts')} className="hidden md:flex bg-primary hover:bg-primary/90">
            Откликнуться
          </Button>
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <nav className="flex flex-col gap-6 mt-8">
                <button onClick={() => handleNavClick('about')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                  О нас
                </button>
                <button onClick={() => handleNavClick('benefits')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                  Преимущества
                </button>
                <button onClick={() => handleNavClick('requirements')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                  Требования
                </button>
                <button onClick={() => handleNavClick('salary')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                  Зарплата
                </button>
                <button onClick={() => handleNavClick('faq')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                  FAQ
                </button>
                <button onClick={() => handleNavClick('contacts')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                  Контакты
                </button>
                <Button onClick={() => handleNavClick('contacts')} className="bg-primary hover:bg-primary/90 w-full mt-4">
                  Откликнуться
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
