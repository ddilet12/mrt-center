import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Calendar, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  ShieldCheck, 
  Zap, 
  Users, 
  Car, 
  Accessibility,
  Menu,
  X,
  Instagram,
  Facebook
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Услуги', href: '#services' },
    { name: 'Преимущества', href: '#benefits' },
    { name: 'Отзывы', href: '#reviews' },
    { name: 'Акции', href: '#promotions' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header 
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-slate-200/50 py-3 mt-0 rounded-b-2xl left-0 right-0 top-0 px-4 md:px-6' : 'bg-white py-4 rounded-2xl border border-slate-100 shadow-sm max-w-7xl mx-auto'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-medical-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">
            М
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg leading-none tracking-tight text-medical-900">МРТ ЦЕНТР</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">ДИАГНОСТИКА В АЛМАТЫ</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="text-slate-600 hover:text-medical-600 font-medium transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-full text-[10px] font-bold">
            <span className="text-medical-600">RU</span>
            <span className="text-slate-400">KZ</span>
            <span className="text-slate-400">EN</span>
          </div>
        </nav>

        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+77008000203" className="flex flex-col items-end group">
            <span className="text-xs text-slate-500 font-medium">Свяжитесь с нами</span>
            <span className="text-medical-600 font-bold group-hover:text-medical-700 transition-colors">+7 700 800 02 03</span>
          </a>
          <a href="#contacts" className="bg-medical-600 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-medical-700 transition-all shadow-lg shadow-medical-600/20 active:scale-95">
            Записаться
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button 
          className="lg:hidden p-2 text-slate-600"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white p-6 flex flex-col"
          >
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-medical-600 rounded-xl flex items-center justify-center text-white font-bold text-xl">М</div>
                <span className="font-display font-bold text-xl">МРТ Центр</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-600">
                <X size={28} />
              </button>
            </div>

            <nav className="flex flex-col gap-6 mb-auto">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-2xl font-display font-semibold text-slate-800 border-b border-slate-100 pb-2"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-4 mt-10">
              <a href="tel:+77008000203" className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl">
                <div className="p-3 bg-medical-100 text-medical-600 rounded-full">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-medium">Позвонить</div>
                  <div className="font-bold">+7 700 800 02 03</div>
                </div>
              </a>
              <button className="btn-primary w-full shadow-xl">
                Записаться на прием
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Main Hero Card */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:flex-1 bg-medical-gradient rounded-[40px] p-10 lg:p-16 text-white relative overflow-hidden"
          >
            <div className="relative z-10 space-y-8 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-medical-400/20 px-3 py-1 rounded-full border border-medical-300/30">
                <span className="w-2 h-2 bg-medical-400 rounded-full animate-pulse"></span>
                <span className="text-xs font-bold tracking-wide uppercase">Премиальное оборудование</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight">
                Современная <br/>
                <span className="text-medical-300">МРТ диагностика</span> <br/>
                в Алматы
              </h1>

              <p className="text-medical-100 text-lg md:text-xl max-w-lg leading-relaxed">
                Высокая точность результатов в течение 2 часов. Профессиональные врачи и максимальный комфорт пациента.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="bg-white text-medical-900 font-bold px-10 py-4 rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95">
                  Записаться на прием
                </button>
                <button className="bg-medical-700/50 backdrop-blur border border-medical-500/30 text-white font-bold px-10 py-4 rounded-xl transition-all hover:bg-medical-700">
                  Написать в WhatsApp
                </button>
              </div>
            </div>

            {/* Decorative background circle */}
            <div className="absolute -right-20 -bottom-20 w-[600px] h-[600px] bg-medical-500/20 rounded-full blur-3xl" />
          </motion.div>

          {/* Sidebar Cards */}
          <div className="lg:w-[350px] flex flex-col gap-6">
            {/* Promo Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="flex-1 bg-promo-orange rounded-3xl p-8 text-white relative overflow-hidden flex flex-col justify-between group"
            >
              <div className="relative z-10">
                <span className="text-xs font-black bg-white/20 px-2 py-1 rounded uppercase tracking-widest">Акция</span>
                <h3 className="text-4xl font-black mt-4 leading-none">-20% СКИДКА</h3>
                <p className="text-white/90 font-bold text-sm mt-2">На все обследования <br/> после 00:00 ежедневно</p>
              </div>
              
              <div className="relative z-10 mt-8">
                <div className="text-2xl font-bold">Ночные смены</div>
                <div className="text-xs font-medium text-white/70 mt-1 italic">Работаем до 02:00 ночи</div>
              </div>

              {/* Decorative circle */}
              <div className="absolute right-[-30px] top-[-30px] w-48 h-48 border-[24px] border-white/10 rounded-full group-hover:scale-110 transition-transform duration-700" />
            </motion.div>

            {/* Stats Card */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 flex flex-col justify-center gap-4"
            >
              <div className="flex items-center gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
              </div>
              <div>
                <div className="text-3xl font-bold text-slate-800 tracking-tight">4.8 рейтинг</div>
                <div className="text-sm text-slate-500 font-medium">412+ проверенных отзывов</div>
              </div>
              <div className="pt-4 border-t border-slate-50">
                <span className="text-xs font-black text-medical-600 uppercase tracking-widest">Результат за 2 часа</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: 'МРТ головного мозга', desc: 'Диагностика сосудов, структур мозга и нервов.', icon: '🧠', price: 'от 12 000 ₸' },
    { title: 'МРТ позвоночника', desc: 'Исследование грыж, протрузий и мягких тканей.', icon: '🦴', price: 'от 15 000 ₸' },
    { title: 'МРТ суставов', desc: 'Оценка коленного, плечевого и тазобедренного суставов.', icon: '🦵', price: 'от 18 000 ₸' },
    { title: 'МРТ органов', desc: 'Детальное обследование брюшной полости и малого таза.', icon: '🫀', price: 'от 20 000 ₸' },
    { title: 'Комплексная диагностика', desc: 'Системное обследование всего организма (Full Body).', icon: '🩺', price: 'от 45 000 ₸' },
    { title: 'МРТ сосудов (Ангиография)', desc: 'Визуализация артерий и вен без контраста.', icon: '🩸', price: 'от 14 000 ₸' },
  ];

  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-accent-teal font-bold uppercase tracking-[0.2em] text-sm">Наши Услуги</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Высокоточная диагностика для здоровья человека</h3>
          <p className="text-slate-600">Мы используем новейшее оборудование и программное обеспечение для получения максимально четких снимков.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="medical-card group cursor-pointer"
            >
              <div className="w-16 h-16 bg-medical-50 text-4xl flex items-center justify-center rounded-2xl mb-6 group-hover:scale-110 group-hover:bg-medical-100 transition-all">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{service.title}</h4>
              <p className="text-slate-500 mb-6 line-clamp-2">{service.desc}</p>
              <div className="flex items-center justify-between pt-6 border-t border-slate-50">
                <span className="font-bold text-medical-700">{service.price}</span>
                <button className="text-medical-600 font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                  Подробнее <ChevronRight size={16} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Benefits = () => {
  const benefits = [
    { title: 'Результаты за 2 часа', desc: 'Вам не нужно ждать дни. Результат и описание будут готовы в день обращения.', icon: <Zap /> },
    { title: 'Опытные специалисты', desc: 'Врачи-рентгенологи с опытом более 10 лет и высшей квалификационной категорией.', icon: <Users /> },
    { title: 'Работаем до 02:00', desc: 'Удобное время для занятых людей и экстренных случаев. Скидки после 00:00.', icon: <Clock /> },
    { title: 'Бесплатное МРТ', desc: 'Оказываем услуги по пакетам ОСМС и направлению от поликлиники (КДУ).', icon: <ShieldCheck /> },
    { title: 'Бесплатная парковка', desc: 'Собственная охраняемая парковка на 15 мест для наших пациентов.', icon: <Car /> },
    { title: 'Современный вход', desc: 'Пандусы и доступная среда для людей с ограниченными возможностями.', icon: <Accessibility /> },
  ];

  return (
    <section id="benefits" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/3 text-center lg:text-left space-y-6">
            <h2 className="text-medical-600 font-bold uppercase tracking-[0.2em] text-sm">Почему выбирают нас</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Комфорт и точность в каждой детали</h3>
            <p className="text-slate-600 lg:pr-8">
              Мы создали условия, в которых медицинское обследование перестает быть стрессом.
            </p>
            <div className="hidden lg:block pt-8">
              <div className="p-8 bg-white rounded-[32px] shadow-xl border border-medical-100 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="flex text-yellow-400">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} size={20} fill="currentColor" />)}
                  </div>
                  <span className="font-bold text-lg">4.8 / 5.0</span>
                </div>
                <p className="text-sm font-medium italic text-slate-500">"Самый быстрый результат в городе. Вежливый персонал и очень чисто."</p>
                <p className="text-xs font-bold text-slate-400">— Айгуль С., пациент</p>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-lg transition-all"
              >
                <div className="p-3 w-fit bg-medical-50 text-medical-600 rounded-xl mb-6">
                  {benefit.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{benefit.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Promotions = () => {
  return (
    <section id="promotions" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-medical-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Наши Акции</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6">Обследуйтесь с выгодой</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Promo 1 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-[40px] bg-medical-900 p-10 lg:p-14 text-white group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-6">
              <span className="px-4 py-1.5 bg-medical-500 rounded-full text-xs font-bold uppercase tracking-widest leading-none">Ночная акция</span>
              <h4 className="text-4xl lg:text-5xl font-bold">-20% на всё</h4>
              <p className="text-medical-100 text-lg max-w-xs">
                При прохождении обследования с 00:00 до 02:00 действует специальная цена.
              </p>
              <button className="flex items-center gap-2 font-bold px-8 py-3 bg-white text-medical-900 rounded-xl hover:bg-medical-50 transition-colors">
                Получить скидку <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>

          {/* Promo 2 */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-[40px] bg-accent-teal p-10 lg:p-14 text-white group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative z-10 space-y-6">
              <span className="px-4 py-1.5 bg-white/20 rounded-full text-xs font-bold uppercase tracking-widest leading-none">ОСМС</span>
              <h4 className="text-4xl lg:text-5xl font-bold">Бесплатно по КДУ</h4>
              <p className="text-teal-50 text-lg max-w-xs">
                Принимаем пациентов по направлению из городских поликлиник по системе ОСМС.
              </p>
              <button className="flex items-center gap-2 font-bold px-8 py-3 bg-white text-accent-teal rounded-xl hover:bg-teal-50 transition-colors">
                Узнать как <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {['Скидки по выходным', 'Скидки с 21:00 до 00:00', 'Семейные пакеты'].map((item, i) => (
             <div key={i} className="flex items-center justify-center p-6 bg-slate-50 rounded-2xl border border-slate-100 font-bold text-slate-700">
               {item}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Reviews = () => {
  const reviews = [
    { name: 'Алия Жумабекова', text: 'Очень вежливый персонал, делают всё быстро профессионально. Результат получила через два часа. Всё оперативно.', rating: 5, date: '2 недели назад' },
    { name: 'Тимур Ибраев', text: 'Удобно, есть парковка. Всё качественно и быстро! Аппарат новый, внутри не страшно. Врачи всё объясняют.', rating: 5, date: '1 месяц назад' },
    { name: 'Мария Сидорова', text: 'Была по записи на ночное МРТ. Скидка -20% реально работает. Понравилось, что нет очередей.', rating: 5, date: '3 дня назад' },
  ];

  return (
    <section id="reviews" className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-medical-600 font-bold uppercase tracking-[0.2em] text-sm">Отзывы Пациентов</h2>
            <h3 className="text-4xl md:text-5xl font-bold">Что о нас говорят</h3>
          </div>
          <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_Logo.svg" alt="Google" className="w-8 h-8" />
            <div>
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <div className="text-xs font-bold text-slate-500">412+ отзывов в Google</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col">
            <h4 className="text-sm font-black text-medical-800 mb-6 flex items-center gap-3">
              <span className="section-divider"></span> УСЛУГИ ЦЕНТРА
            </h4>
            <div className="space-y-2 flex-1">
              {[
                'МРТ головного мозга',
                'МРТ позвоночника',
                'МРТ суставов',
                'МРТ брюшной полости',
                'МРТ малого таза',
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 transition-all cursor-pointer group">
                  <span className="text-sm font-medium">{item}</span>
                  <ChevronRight size={14} className="text-slate-300 group-hover:text-medical-600 transition-colors" />
                </div>
              ))}
              <div className="flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 transition-all cursor-pointer">
                <span className="text-sm font-medium">Комплексная диагностика</span>
                <span className="text-[10px] font-black text-medical-600 italic">NEW</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col">
            <h4 className="text-sm font-black text-medical-800 mb-6 flex items-center gap-3">
              <span className="section-divider"></span> ПРЕИМУЩЕСТВА
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'ОСМС / КДУ', val: 'Бесплатно' },
                { label: 'Парковка', val: '15 мест' },
                { label: 'До 02:00', val: 'Ежедневно' },
                { label: 'Результат', val: 'За 2 часа' },
                { label: 'Доступность', val: 'Пандус' },
                { label: 'Персонал', val: 'Высшая кат.' },
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-100 bg-opacity-40 rounded-2xl flex flex-col gap-1 border border-transparent hover:border-slate-200 transition-colors">
                  <span className="text-xs font-black text-slate-700 tracking-tight leading-none">{item.label}</span>
                  <span className="text-[10px] font-bold text-medical-600 uppercase tracking-tighter">{item.val}</span>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-6">
              <p className="text-xs text-slate-400 font-medium italic">Оказываем услуги высокого качества с вниманием к каждому пациенту.</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 flex flex-col">
            <h4 className="text-sm font-black text-medical-800 mb-6 flex items-center gap-3">
              <span className="section-divider"></span> КОНТАКТЫ
            </h4>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-medical-50 flex items-center justify-center text-medical-600 shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="text-sm font-medium leading-relaxed">
                  ул. Тимирязева, 52/2<br/>
                  <span className="text-xs text-slate-400">Бостандыкский район</span>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-xl bg-medical-50 flex items-center justify-center text-medical-600 shrink-0">
                  <Phone size={20} />
                </div>
                <div className="text-sm font-bold leading-relaxed">
                  +7 701 141 41 04<br/>
                  <span className="text-xs text-slate-400 font-normal">+7 700 800 02 03</span>
                </div>
              </div>
            </div>
            <div className="mt-8 p-4 bg-medical-50 rounded-2xl border border-medical-100">
               <p className="text-[11px] text-medical-800 italic leading-relaxed">
                 <span className="font-black">«</span>Очень вежливый персонал, всё оперативно и профессионально! Описание качественное.<span className="font-black">»</span>
                 <br />
                 <span className="not-italic font-bold text-[10px] text-slate-400 mt-2 block">— Алия К., пациент</span>
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contacts" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 space-y-12">
            <div>
              <h2 className="text-medical-600 font-bold uppercase tracking-[0.2em] text-sm mb-4">Контакты</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6">Ждем вас в нашем центре</h3>
              <p className="text-slate-600">Мы находимся в удобном районе Алматы с доступным паркингом и транспортной развязкой.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-medical-600">
                  <MapPin size={24} />
                  <span className="font-bold text-slate-900">Адрес</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  г. Алматы, Бостандыкский район, <br />
                  ул. Тимирязева, 52/2, 1 этаж
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-50 rounded-lg text-xs font-semibold text-slate-500">
                  Метро: Алатау (20 мин / 1.5 км)
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-medical-600">
                  <Clock size={24} />
                  <span className="font-bold text-slate-900">Режим работы</span>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Ежедневно: 07:00 – 02:00
                </p>
                <div className="text-medical-600 font-bold animate-pulse">
                  Скидка -20% после полуночи!
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-medical-600">
                  <Phone size={24} />
                  <span className="font-bold text-slate-900">Телефоны</span>
                </div>
                <div className="flex flex-col text-slate-600 gap-1 font-medium">
                  <a href="tel:+77008000203" className="hover:text-medical-600 transition-colors">+7 700 800 02 03</a>
                  <a href="tel:+77011414104" className="hover:text-medical-600 transition-colors">+7 701 141 41 04</a>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3 text-medical-600">
                  <Car size={24} />
                  <span className="font-bold text-slate-900">Парковка</span>
                </div>
                <p className="text-slate-600">
                  Бесплатная собственная <br />
                  парковка на 15 мест
                </p>
              </div>
            </div>
            
            <button className="btn-primary w-full shadow-2xl">
              <Calendar size={20} />
              Записаться сейчас
            </button>
          </div>

          <div className="lg:w-1/2 group">
            <div className="relative w-full h-[500px] rounded-[40px] overflow-hidden shadow-2xl border-4 border-slate-100 group-hover:border-medical-200 transition-all">
               {/* Map Placeholder */}
               <div className="absolute inset-0 bg-slate-200 flex flex-col items-center justify-center space-y-4">
                 <div className="p-4 bg-white rounded-full shadow-xl">
                   <MapPin size={40} className="text-medical-600 animate-bounce" />
                 </div>
                 <span className="font-semibold text-slate-500">Интерактивная карта</span>
                 <p className="text-sm text-slate-400 md:max-w-xs text-center px-6">
                   Нажмите, чтобы проложить маршрут в Google Картах
                 </p>
                 <a 
                    href="https://www.google.com/maps/search/%D1%83%D0%BB.+%D0%A2%D0%B8%D0%BC%D0%B8%D1%80%D1%8F%D0%B7%D0%B5%D0%B2%D0%B0,+52%2F2,+%D0%90%D0%BB%D0%BC%D0%B0%D1%82%D1%8B" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-6 py-2 bg-white text-medical-600 border border-medical-200 rounded-full text-sm font-bold shadow-md hover:bg-medical-50 transition-colors"
                  >
                   Открыть в Картах
                 </a>
               </div>
               
               {/* Decorative elements on map */}
               <div className="absolute top-6 left-6 p-4 bg-white/90 backdrop-blur rounded-2xl shadow-lg border border-slate-100 max-w-[200px]">
                 <div className="flex items-center gap-2 text-medical-600 mb-1">
                   <Accessibility size={16} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Доступная среда</span>
                 </div>
                 <p className="text-[10px] text-slate-500 leading-tight">Удобный пандус и вход для людей с инвалидностью на 1 этаже.</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-2 text-white">
              <div className="w-10 h-10 bg-medical-600 rounded-xl flex items-center justify-center font-bold text-xl">М</div>
              <span className="font-display font-bold text-xl uppercase tracking-tighter">МРТ Центр</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-400">
              Ваш выбор в пользу точности и качества. Мы работаем, чтобы диагностика была доступной и комфортной для каждого.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-medical-600 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-medical-600 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-medical-600 transition-colors"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Навигация</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#services" className="hover:text-medical-400 transition-colors">Все услуги</a></li>
              <li><a href="#benefits" className="hover:text-medical-400 transition-colors">О центре</a></li>
              <li><a href="#promotions" className="hover:text-medical-400 transition-colors">Акции и скидки</a></li>
              <li><a href="#reviews" className="hover:text-medical-400 transition-colors">Отзывы пациентов</a></li>
              <li><a href="#contacts" className="hover:text-medical-400 transition-colors">Контакты</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Услуги</h5>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-medical-400 transition-colors">МРТ головного мозга</a></li>
              <li><a href="#" className="hover:text-medical-400 transition-colors">МРТ позвоночника</a></li>
              <li><a href="#" className="hover:text-medical-400 transition-colors">МРТ суставов</a></li>
              <li><a href="#" className="hover:text-medical-400 transition-colors">МРТ брюшной полости</a></li>
              <li><a href="#" className="hover:text-medical-400 transition-colors">МРТ по ОСМС</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-bold mb-6">Связь</h5>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-medical-500 shrink-0 mt-1" />
                <span>Алматы, Тимирязева, 52/2</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-medical-500 shrink-0 mt-1" />
                <a href="tel:+77008000203" className="hover:text-medical-400 transition-colors">+7 700 800 02 03</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-medical-500 shrink-0 mt-1" />
                <span>07:00 – 02:00 ежедневно</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} МРТ Центр Алматы. Все права защищены.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-slate-400 transition-colors">Политика конфиденциальности</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Правовая информация</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const WhatsAppButton = () => (
  <a 
    href="https://wa.me/77008000203" 
    target="_blank" 
    rel="noopener noreferrer"
    className="whatsapp-fab group"
    aria-label="WhatsApp"
  >
    <MessageCircle size={32} />
    <span className="absolute right-full mr-4 bg-white text-slate-800 px-3 py-1 rounded-lg text-sm font-bold shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
      Написать в WhatsApp
    </span>
  </a>
);

// --- Main App Component ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <Benefits />
        <AboutSection />
        <Promotions />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

const AboutSection = () => (
  <section className="py-24 bg-white overflow-hidden">
    <div className="container mx-auto px-4 md:px-6">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 relative order-2 lg:order-1">
          <div className="relative rounded-[40px] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=1200" 
              alt="Medical Consultation" 
              className="w-full aspect-[4/5] object-cover"
            />
            <div className="absolute inset-0 bg-medical-900/10" />
          </div>
          <div className="absolute -bottom-6 -right-6 p-8 bg-medical-600 text-white rounded-[32px] shadow-2xl space-y-2">
            <div className="text-4xl font-bold">10+</div>
            <div className="text-xs uppercase font-bold tracking-widest opacity-80">лет опыта</div>
            <div className="text-sm font-medium">Квалифицированных специалистов</div>
          </div>
        </div>

        <div className="lg:w-1/2 space-y-8 order-1 lg:order-2">
          <h2 className="text-medical-600 font-bold uppercase tracking-[0.2em] text-sm">О центре</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Лидеры МРТ диагностики в Алматы</h3>
          <p className="text-slate-600 text-lg leading-relaxed">
            Наш центр специализируется исключительно на магнитно-резонансной томографии, что позволяет нам концентрировать все ресурсы на качестве и точности этого сложного исследования.
          </p>
          <div className="space-y-4">
            {[
              'Индивидуальный подход к каждому пациенту',
              'Описание результатов от врачей высшей категории',
              'Комфортная атмосфера и внимание к деталям',
              'Безопасность и соблюдение всех медицинских протоколов'
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-1 bg-medical-100 text-medical-600 rounded-full">
                  <CheckCircle2 size={18} />
                </div>
                <span className="font-semibold text-slate-700">{text}</span>
              </div>
            ))}
          </div>
          <p className="text-slate-500 italic">
            "Мы верим, что своевременная и точная диагностика — это первый и самый важный шаг к выздоровлению. Именно поэтому мы работаем до глубокой ночи, чтобы вы могли пройти обследование в удобное время."
          </p>
        </div>
      </div>
    </div>
  </section>
);
