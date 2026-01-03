import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const Index = () => {
  const { toast } = useToast();
  const [deliveries, setDeliveries] = useState([150]);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const calculateEarnings = (deliveriesCount: number) => {
    const baseRate = 250;
    const bonus = deliveriesCount > 200 ? 50 : deliveriesCount > 100 ? 30 : 0;
    return deliveriesCount * baseRate + bonus * deliveriesCount;
  };

  const earnings = calculateEarnings(deliveries[0]);
  const dailyEarnings = Math.round(earnings / 22);
  const weeklyEarnings = Math.round(earnings / 4.3);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.city) {
      toast({
        title: 'Ошибка',
        description: 'Пожалуйста, заполните все поля',
        variant: 'destructive'
      });
      return;
    }

    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,9}$/;
    if (!phoneRegex.test(formData.phone)) {
      toast({
        title: 'Ошибка',
        description: 'Введите корректный номер телефона',
        variant: 'destructive'
      });
      return;
    }

    setIsSubmitting(true);
    
    setTimeout(() => {
      toast({
        title: 'Заявка отправлена!',
        description: 'Мы свяжемся с вами в течение часа',
      });
      setFormData({ name: '', phone: '', city: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen">
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
                  <button onClick={() => scrollToSection('about')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                    О нас
                  </button>
                  <button onClick={() => scrollToSection('benefits')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                    Преимущества
                  </button>
                  <button onClick={() => scrollToSection('requirements')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                    Требования
                  </button>
                  <button onClick={() => scrollToSection('salary')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                    Зарплата
                  </button>
                  <button onClick={() => scrollToSection('faq')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                    FAQ
                  </button>
                  <button onClick={() => scrollToSection('contacts')} className="text-lg font-medium hover:text-primary transition-colors text-left">
                    Контакты
                  </button>
                  <Button onClick={() => scrollToSection('contacts')} className="bg-primary hover:bg-primary/90 w-full mt-4">
                    Откликнуться
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

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

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О компании</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed mb-4">
                  СкороДоставка — крупнейший сервис доставки еды и товаров в России. 
                  Мы работаем в 50+ городах и доставляем счастье миллионам людей каждый день.
                </p>
                <p className="text-lg leading-relaxed">
                  Наша команда насчитывает более 15 000 курьеров, которые обеспечивают быструю 
                  и качественную доставку. Мы ценим каждого сотрудника и создаём лучшие условия 
                  для работы и развития.
                </p>
              </CardContent>
            </Card>
            
            <div className="mt-12 space-y-4">
              {[
                { text: 'Выплаты', highlight: 'КАЖДУЮ НЕДЕЛЮ', color: 'text-[#FF69B4]' },
                { text: 'Доход не зависит от количества заказов — ', highlight: 'оплата за часы', color: 'text-[#FF69B4]' },
                { text: '', highlight: 'НЕТ', append: ' штрафов', color: 'text-[#FF69B4]' },
                { text: '', highlight: 'БОНУСЫ', append: ' лучшему сотруднику месяца', color: 'text-[#FF69B4]' },
                { text: 'Страхование жизни ', highlight: 'БЕСПЛАТНО', append: ' в день оформления', color: 'text-[#FF69B4]' }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-[#FFB6C1] hover:border-[#FF69B4] transition-all hover:scale-[1.02]">
                  <div className="flex-shrink-0">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 24L20 36L40 12" stroke="#FF69B4" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-lg md:text-xl">
                    {item.text}
                    <span className={`font-bold ${item.color}`}>{item.highlight}</span>
                    {item.append}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="benefits" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Преимущества</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { icon: 'Zap', title: 'Быстрое оформление', description: 'Начни работать уже через 24 часа после подачи заявки', color: 'primary' },
              { icon: 'Shield', title: 'Страхование', description: 'Полное страхование от несчастных случаев', color: 'secondary' },
              { icon: 'Calendar', title: 'Гибкий график', description: 'Работай когда удобно — выбирай смены сам', color: 'accent' },
              { icon: 'Gift', title: 'Бонусы', description: 'Дополнительные выплаты за выполнение плана', color: 'primary' },
              { icon: 'Smartphone', title: 'Удобное приложение', description: 'Простой и понятный интерфейс для работы', color: 'secondary' },
              { icon: 'Users', title: 'Поддержка 24/7', description: 'Всегда на связи, поможем в любой ситуации', color: 'accent' }
            ].map((benefit, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-all hover:scale-105">
                <CardHeader>
                  <div className={`w-12 h-12 bg-${benefit.color}/10 rounded-lg flex items-center justify-center mb-4`}>
                    <Icon name={benefit.icon as any} size={24} className={`text-${benefit.color}`} />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  <CardDescription className="text-base">{benefit.description}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="requirements" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Требования</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <div className="space-y-6">
                  {[
                    { icon: 'UserCheck', title: 'Возраст от 18 лет', description: 'Наличие паспорта гражданина РФ' },
                    { icon: 'Bike', title: 'Транспорт', description: 'Велосипед, самокат, мопед или автомобиль' },
                    { icon: 'Smartphone', title: 'Смартфон', description: 'Android 8+ или iOS 13+ с интернетом' },
                    { icon: 'Heart', title: 'Ответственность', description: 'Пунктуальность и клиентоориентированность' }
                  ].map((req, index) => (
                    <div key={index} className="flex gap-4 items-start p-4 rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={req.icon as any} size={24} className="text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{req.title}</h3>
                        <p className="text-muted-foreground">{req.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

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
                        <li>• Более 200 доставок — бонус +50₽ к каждой доставке</li>
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

      <section id="faq" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Часто задаваемые вопросы</h2>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: 'Как быстро можно начать работать?',
                  answer: 'После подачи заявки и прохождения онлайн-собеседования ты сможешь приступить к работе уже через 24 часа. Мы проведём короткое обучение и выдадим всё необходимое оборудование.'
                },
                {
                  question: 'Какой транспорт можно использовать?',
                  answer: 'Ты можешь работать на велосипеде, электросамокате, мопеде или автомобиле. Если у тебя нет своего транспорта, мы можем предоставить велосипед в аренду по выгодным условиям.'
                },
                {
                  question: 'Когда происходят выплаты?',
                  answer: 'Выплаты производятся еженедельно по пятницам на банковскую карту. Никаких задержек — все заработанные деньги поступают вовремя.'
                },
                {
                  question: 'Нужно ли оформляться как ИП или самозанятый?',
                  answer: 'Да, для работы необходимо оформить самозанятость или ИП. Это займёт всего 10 минут через приложение. Мы поможем с оформлением и ответим на все вопросы.'
                },
                {
                  question: 'Есть ли штрафы?',
                  answer: 'Мы не штрафуем за отмены или опоздания. Главное — предупреждай заранее и относись к работе ответственно. Качество работы влияет на рейтинг и возможность получения бонусов.'
                },
                {
                  question: 'Какая поддержка предоставляется курьерам?',
                  answer: 'У нас работает служба поддержки 24/7. Ты всегда можешь позвонить или написать в чат, если возникли вопросы или сложности. Также мы предоставляем страховку от несчастных случаев.'
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-2 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Готов начать?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Присоединяйся к команде лучших курьеров! Заполни заявку, и мы свяжемся с тобой в течение часа.
            </p>
            <Card className="border-2">
              <CardContent className="pt-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-base">Ваше имя *</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Иван Иванов"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="h-12 text-base"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-base">Телефон *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        placeholder="+7 (900) 123-45-67"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="h-12 text-base"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city" className="text-base">Ваш город *</Label>
                    <Input
                      id="city"
                      name="city"
                      placeholder="Москва"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="h-12 text-base"
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-lg py-6"
                  >
                    <Icon name="Send" className="mr-2" size={20} />
                    {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  </Button>
                </form>
                <div className="mt-8 pt-8 border-t space-y-4">
                  <p className="text-sm text-muted-foreground text-center mb-4">Или свяжитесь с нами напрямую:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <Icon name="Phone" size={24} className="text-primary" />
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Телефон</p>
                        <p className="font-semibold">+7 (800) 555-35-35</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                      <Icon name="Mail" size={24} className="text-secondary" />
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Email</p>
                        <p className="font-semibold">job@skorodostavka.ru</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <Icon name="MapPin" size={24} className="text-accent" />
                    <div className="text-left">
                      <p className="text-sm text-muted-foreground">Адрес офиса</p>
                      <p className="font-semibold">Москва, ул. Доставочная, д. 42</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-8 px-4 bg-muted/30 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 СкороДоставка. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;