import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto text-center animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Стань курьером мечты
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Зарабатывай до 150 000 ₽ в месяц с гибким графиком и еженедельными выплатами
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" onClick={() => scrollToSection('salary')} className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            <Icon name="Calculator" className="mr-2" size={20} />
            Рассчитать доход
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollToSection('requirements')} className="text-lg px-8 py-6">
            Узнать требования
          </Button>
        </div>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20 hover:border-primary/40 transition-all hover:scale-105 animate-scale-in">
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Wallet" size={32} className="text-primary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">до 150k ₽</h3>
              <p className="text-muted-foreground">в месяц</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-secondary/20 hover:border-secondary/40 transition-all hover:scale-105 animate-scale-in" style={{animationDelay: '0.1s'}}>
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Clock" size={32} className="text-secondary" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Гибкий</h3>
              <p className="text-muted-foreground">график работы</p>
            </CardContent>
          </Card>
          <Card className="border-2 border-accent/20 hover:border-accent/40 transition-all hover:scale-105 animate-scale-in" style={{animationDelay: '0.2s'}}>
            <CardContent className="pt-6 text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-accent" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Еженедельно</h3>
              <p className="text-muted-foreground">выплаты</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
