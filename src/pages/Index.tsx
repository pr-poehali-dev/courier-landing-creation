import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import SalaryCalculator from '@/components/SalaryCalculator';
import ContactForm from '@/components/ContactForm';

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Navigation scrollToSection={scrollToSection} />

      <HeroSection scrollToSection={scrollToSection} />

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">О компании</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="border-2">
              <CardContent className="pt-6">
                <p className="text-lg leading-relaxed">
                  «Самокат» — российский сервис экспресс-доставки товаров из дарксторов, основанный в Санкт-Петербурге в 2017 году. Мы стали первыми в стране, кто внедрил модель доставки напрямую из дарксторов, что позволяет клиентам получать продукты и другие товары быстрее, чем когда-либо.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mt-12">
            {[
              {
                emoji: '📅',
                title: 'График на выбор',
                description: '1/1, 2/2, 3/3, 5/2, 6/1 или 7/0 и возможность подработки от 4х часов. Можно совмещать с учебой или работой',
                color: 'from-blue-50 to-blue-100'
              },
              {
                emoji: '🚴',
                title: 'Разнообразие вакансий',
                description: 'Авто-курьер, пеший курьер, вело-курьер, электровело-курьер, сборщик заказов',
                color: 'from-purple-50 to-purple-100'
              },
              {
                emoji: '💰',
                title: 'Оплачиваемая стажировка',
                description: 'Еженедельная оплата на карту по четвергам. Оплата с первого дня',
                color: 'from-green-50 to-green-100'
              },
              {
                emoji: '☔',
                title: 'Доплата за плохую погоду и тяжелый груз',
                description: 'Сумма доплаты зависит от веса и габаритов груза в среднем +30₽ в час',
                color: 'from-indigo-50 to-indigo-100'
              },
              {
                emoji: '📄',
                title: 'Оформление за 1 день',
                description: 'Без лишних бумаг, всё быстро и просто. Возможно оформление ОНЛАЙН',
                color: 'from-pink-50 to-pink-100'
              },
              {
                emoji: '🏢',
                title: 'Работа рядом с домом',
                description: 'Удобные локации. Подберем идеальное место для работы',
                color: 'from-cyan-50 to-cyan-100'
              }
            ].map((item, index) => (
              <Card key={index} className={`border-0 bg-gradient-to-br ${item.color} hover:shadow-xl transition-all hover:scale-[1.02]`}>
                <CardContent className="pt-6">
                  <div className="flex gap-4 items-start">
                    <div className="text-5xl flex-shrink-0">{item.emoji}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-3 text-[#FF69B4]">{item.title}</h3>
                      <p className="text-base leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
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

      <SalaryCalculator scrollToSection={scrollToSection} />

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

      <ContactForm />

      <footer className="py-8 px-4 bg-muted/30 border-t">
        <div className="container mx-auto text-center text-muted-foreground">
          <p>© 2024 СкороДоставка. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
