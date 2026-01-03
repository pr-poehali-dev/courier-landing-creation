import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import Icon from '@/components/ui/icon';

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
  );
};

export default ContactForm;
