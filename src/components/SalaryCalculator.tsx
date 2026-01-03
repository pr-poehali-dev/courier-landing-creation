import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

interface SalaryCalculatorProps {
  scrollToSection: (id: string) => void;
}

const SalaryCalculator = ({ scrollToSection }: SalaryCalculatorProps) => {
  const [deliveries, setDeliveries] = useState([150]);
  
  const calculateEarnings = (deliveriesCount: number) => {
    const baseRate = 250;
    const bonus = deliveriesCount > 200 ? 50 : deliveriesCount > 100 ? 30 : 0;
    return deliveriesCount * baseRate + bonus * deliveriesCount;
  };

  const earnings = calculateEarnings(deliveries[0]);
  const dailyEarnings = Math.round(earnings / 22);
  const weeklyEarnings = Math.round(earnings / 4.3);

  return (
    <section id="salary" className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Калькулятор заработка</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Посмотри, сколько сможешь зарабатывать в месяц
        </p>
        <div className="max-w-4xl mx-auto">
          <Card className="border-2 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl">Рассчитай свой доход</CardTitle>
              <CardDescription>Двигай ползунок, чтобы увидеть потенциальный заработок</CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <label className="text-lg font-medium">Количество доставок в месяц</label>
                  <span className="text-3xl font-bold text-primary">{deliveries[0]}</span>
                </div>
                <Slider
                  value={deliveries}
                  onValueChange={setDeliveries}
                  min={50}
                  max={300}
                  step={10}
                  className="mb-2"
                />
                <div className="flex justify-between text-sm text-muted-foreground mt-2">
                  <span>50</span>
                  <span>300</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/30">
                  <CardContent className="pt-6 text-center">
                    <Icon name="Calendar" size={32} className="text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">За месяц</p>
                    <p className="text-3xl font-bold text-primary">{earnings.toLocaleString('ru-RU')} ₽</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-secondary/10 to-secondary/5 border-secondary/30">
                  <CardContent className="pt-6 text-center">
                    <Icon name="CalendarDays" size={32} className="text-secondary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">За неделю</p>
                    <p className="text-3xl font-bold text-secondary">{weeklyEarnings.toLocaleString('ru-RU')} ₽</p>
                  </CardContent>
                </Card>
                <Card className="bg-gradient-to-br from-accent/10 to-accent/5 border-accent/30">
                  <CardContent className="pt-6 text-center">
                    <Icon name="Sun" size={32} className="text-accent mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground mb-1">За день</p>
                    <p className="text-3xl font-bold text-accent">{dailyEarnings.toLocaleString('ru-RU')} ₽</p>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-muted/50 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <Icon name="Info" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <div className="text-sm">
                    <p className="font-semibold mb-1">Как увеличить доход?</p>
                    <ul className="space-y-1 text-muted-foreground">
                      <li>• Более 100 доставок — бонус +30₽ к каждой доставке</li>
                      <li>• Выходи на доставку с 07:00 до 08:00 — бонус +30₽ к каждой доставке</li>
                      <li>• Работа в вечерние часы — повышенный коэффициент</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button size="lg" onClick={() => scrollToSection('contacts')} className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                Хочу так зарабатывать!
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SalaryCalculator;