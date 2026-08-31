import { useState, useEffect, useRef } from 'react';
import {
  Scissors, Clock, MapPin, Phone, Instagram, Menu, X,
  ChevronDown, Star, Users, Beer, CalendarCheck, MessageCircle,
  Sparkles, Shield
} from 'lucide-react';

/* =============================================================
   SOCIEDADE DO CORTE — Site Oficial
   Barbearia Premium · Águas Claras – DF
   ============================================================= */

// ======================== SPLASH SCREEN ========================
function SplashScreen({ onComplete }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExiting(true);
      setTimeout(onComplete, 800);
    }, 4200);
    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setExiting(true);
    setTimeout(onComplete, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-sc-green cursor-pointer ${exiting ? 'splash-exit' : ''}`}
      onClick={handleSkip}
    >
      {/* Decorative corner accents */}
      <div className="absolute top-6 left-6 w-12 h-12 border-t-2 border-l-2 border-sc-gold/30 rounded-tl-sm" />
      <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-sc-gold/30 rounded-tr-sm" />
      <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-sc-gold/30 rounded-bl-sm" />
      <div className="absolute bottom-6 right-6 w-12 h-12 border-b-2 border-r-2 border-sc-gold/30 rounded-br-sm" />

      {/* Main text */}
      <div className="text-center">
        <h1 className="splash-text-1 font-display text-5xl md:text-7xl lg:text-8xl text-sc-cream font-light italic tracking-wide">
          Seu estilo,
        </h1>
        <h1 className="splash-text-2 font-display text-5xl md:text-7xl lg:text-8xl text-sc-gold font-bold tracking-wide mt-2">
          Nossa marca.
        </h1>
        <div className="splash-line h-[2px] bg-sc-gold mx-auto mt-8" />
      </div>

      {/* Skip hint */}
      <p className="splash-skip absolute bottom-10 text-sc-cream/40 text-sm font-body tracking-widest uppercase">
        Toque para entrar
      </p>
    </div>
  );
}

// ======================== HEADER ========================
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'A Sociedade', href: '#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Equipe', href: '#equipe' },
    { label: 'Galeria', href: '#galeria' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'header-scrolled py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/images/logo-instagram.jpg"
            alt="Sociedade do Corte"
            className="w-10 h-10 rounded-md object-cover border border-sc-gold/30 group-hover:border-sc-gold transition-colors"
          />
          <div className="hidden sm:block">
            <p className="font-display text-sc-cream text-sm font-semibold tracking-wider leading-none">SOCIEDADE</p>
            <p className="text-sc-gold text-[10px] tracking-[0.25em] leading-none mt-0.5">DO CORTE</p>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sc-cream/70 hover:text-sc-gold text-sm font-medium tracking-wide transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-sc-gold after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href="https://agendamento.avec.beauty/?slug=sociedade-do-corte"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-6 py-2.5 rounded-lg text-sm tracking-wide inline-flex items-center gap-2"
          >
            <CalendarCheck size={16} />
            Agendar Horário
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-sc-cream p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-sc-darker/98 backdrop-blur-lg border-t border-sc-gold/10 mobile-menu-enter">
          <nav className="flex flex-col px-6 py-6 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-sc-cream/80 hover:text-sc-gold py-3 text-lg font-display tracking-wide border-b border-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://agendamento.avec.beauty/?slug=sociedade-do-corte"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold px-6 py-3 rounded-lg text-center text-sm tracking-wide mt-4 inline-flex items-center justify-center gap-2"
            >
              <CalendarCheck size={16} />
              Agendar Horário
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

// ======================== HERO SECTION ========================
function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/images/equipe-frente.jpg)' }}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="diamond-bg absolute inset-0" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Logo Text */}
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-sc-cream font-bold tracking-wide leading-tight">
          SOCIEDADE
          <span className="block text-sc-gold text-3xl sm:text-4xl md:text-5xl font-normal italic mt-1 tracking-wider">
            do Corte
          </span>
        </h1>

        {/* Divider */}
        <div className="section-divider my-8" />

        {/* Slogan */}
        <p className="font-display text-xl md:text-2xl text-sc-cream/80 italic tracking-wide">
          Onde o estilo encontra a essência.
        </p>

        {/* Badge below slogan */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-sc-gold/30 bg-sc-gold/5 mt-6 mb-2">
          <MapPin size={14} className="text-sc-gold" />
          <span className="text-sc-gold text-xs font-medium tracking-widest uppercase">Águas Claras – DF</span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="https://agendamento.avec.beauty/?slug=sociedade-do-corte"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-3.5 rounded-lg text-base tracking-wide inline-flex items-center gap-2"
          >
            <CalendarCheck size={18} />
            Agendar Horário Online
          </a>
          <a
            href="https://wa.me/556198287052?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Sociedade%20do%20Corte."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-8 py-3.5 rounded-lg text-base tracking-wide inline-flex items-center gap-2"
          >
            <MessageCircle size={18} />
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator absolute bottom-8 left-1/2">
        <ChevronDown size={28} className="text-sc-gold/50" />
      </div>
    </section>
  );
}

// ======================== ABOUT SECTION ========================
function AboutSection() {
  return (
    <section id="sobre" className="py-24 lg:py-32 bg-sc-dark">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div className="reveal">
            <p className="text-sc-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">Nossa História</p>
            <h2 className="font-display text-4xl md:text-5xl text-sc-cream font-bold leading-tight mb-8">
              A Sociedade
            </h2>
            <div className="space-y-5 text-sc-cream/70 text-base md:text-lg leading-relaxed font-light">
              <p>
                A Sociedade do Corte nasceu da amizade e da visão de dois profissionais
                apaixonados pela arte de transformar o visual masculino.
              </p>
              <p>
                Unidos agora como sócios, trouxeram para Águas Claras um espaço moderno,
                acolhedor e cheio de personalidade, pensado para quem entende que cuidar
                da aparência é também cuidar de si.
              </p>
              <p>
                Aqui, cada corte é feito com técnica, atenção e propósito. Mais do que um
                simples serviço, entregamos uma experiência, um momento para relaxar,
                renovar e sair com a confiança de quem sabe que está no seu melhor.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="mt-10 pl-6 border-l-2 border-sc-gold">
              <p className="font-display text-xl md:text-2xl text-sc-gold italic">
                "Seu corte de cabelo fala por você."
              </p>
            </blockquote>
          </div>

          {/* Image */}
          <div className="reveal relative">
            <div className="relative rounded-xl overflow-hidden shadow-2xl">
              <img
                src="/images/equipe-pose.jpg"
                alt="Equipe da Sociedade do Corte em frente à barbearia"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sc-dark/60 via-transparent to-transparent" />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-sc-gold/20 rounded-br-xl" />
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-sc-gold/20 rounded-tl-xl" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ======================== SERVICES SECTION ========================
function ServicesSection() {
  const services = [
    {
      icon: <Scissors size={28} />,
      title: 'Corte Masculino',
      description: 'Degradê, fade, social, americano ou navalhado. Corte personalizado de acordo com o formato do seu rosto e estilo.',
      price: 'R$ XX',
      duration: '45 min',
    },
    {
      icon: <Sparkles size={28} />,
      title: 'Barba Completa',
      description: 'Alinhamento com navalha, toalha quente, hidratação com óleos especiais e acabamento perfeito.',
      price: 'R$ XX',
      duration: '30 min',
    },
    {
      icon: <Star size={28} />,
      title: 'Combo Sociedade',
      description: 'Corte + barba completa + cerveja de cortesia. O tratamento completo que você merece.',
      price: 'R$ XX',
      duration: '1h15',
    },
    {
      icon: <Shield size={28} />,
      title: 'Sobrancelha',
      description: 'Design e alinhamento de sobrancelha com navalha para um acabamento limpo e natural.',
      price: 'R$ XX',
      duration: '15 min',
    },
  ];

  return (
    <section id="servicos" className="py-24 lg:py-32 bg-sc-darker diamond-bg">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center reveal mb-16">
          <p className="text-sc-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">Nosso Cardápio</p>
          <h2 className="font-display text-4xl md:text-5xl text-sc-cream font-bold">
            Serviços & Preços
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="service-card rounded-xl p-6 flex flex-col reveal">
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-sc-green/30 flex items-center justify-center text-sc-gold mb-5">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl text-sc-cream font-semibold mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sc-cream/50 text-sm leading-relaxed flex-grow mb-5">
                {service.description}
              </p>

              {/* Price & Duration */}
              <div className="flex items-end justify-between border-t border-white/5 pt-4">
                <div>
                  <p className="text-sc-gold text-2xl font-display font-bold">{service.price}</p>
                  <p className="text-sc-cream/30 text-xs mt-0.5 flex items-center gap-1">
                    <Clock size={12} /> {service.duration}
                  </p>
                </div>
                <a
                  href="https://agendamento.avec.beauty/?slug=sociedade-do-corte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sc-gold text-sm font-medium hover:text-sc-gold-light transition-colors"
                >
                  Agendar →
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sc-cream/30 text-sm mt-10">
          * Os preços podem sofrer alterações. Consulte-nos pelo WhatsApp para valores atualizados.
        </p>
      </div>
    </section>
  );
}

// ======================== TEAM SECTION ========================
function TeamSection() {
  const team = [
    {
      name: 'Vivian Carvalho',
      role: 'Fundadora & Barbeira',
      specialty: 'Especialista em Corte e Barba',
      image: '/images/barbeira-lavando.png',
      instagram: 'https://www.instagram.com/vivian_barber_/',
      handle: '@vivian_barber_',
    },
    {
      name: 'Pierre',
      role: 'Fundador & Barbeiro',
      specialty: 'Especialista em Corte e Barba',
      image: '/images/barbeiro-cortando.jpg',
      instagram: 'https://www.instagram.com/_barberpierre/',
      handle: '@_barberpierre',
    },
    {
      name: 'Ruan Alves',
      role: 'Barbeiro',
      specialty: 'Especialista em Corte e Barba',
      image: '/images/barbeiro-barba.jpg',
      instagram: 'https://www.instagram.com/aalves.ruan/',
      handle: '@aalves.ruan',
    },
  ];

  return (
    <section id="equipe" className="py-24 lg:py-32 bg-sc-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center reveal mb-16">
          <p className="text-sc-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">Conheça o Time</p>
          <h2 className="font-display text-4xl md:text-5xl text-sc-cream font-bold">
            Nossa Equipe
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, idx) => (
            <div key={idx} className="team-card reveal">
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-[420px] object-cover"
              />
              <div className="team-card-overlay absolute inset-0 flex flex-col justify-end p-6">
                <h3 className="font-display text-2xl text-sc-cream font-bold">{member.name}</h3>
                <p className="text-sc-gold text-sm font-medium mt-1">{member.role}</p>
                <p className="text-sc-cream/50 text-xs mt-1">{member.specialty}</p>
                <a
                  href={member.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sc-gold/70 hover:text-sc-gold text-xs mt-2 inline-flex items-center gap-1 transition-colors"
                >
                  <Instagram size={12} />
                  {member.handle}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================== GALLERY SECTION ========================
function GallerySection() {
  const images = [
    { src: '/images/equipe-frente.jpg', alt: 'Equipe na frente da barbearia', span: 'col-span-2 row-span-2' },
    { src: '/images/barbeiro-cortando.jpg', alt: 'Barbeiro fazendo um corte fade', span: '' },
    { src: '/images/barbeira-lavando.png', alt: 'Barbeira lavando cabelo de cliente', span: '' },
    { src: '/images/barbeiro-barba.jpg', alt: 'Barbeiro alinhando barba', span: 'col-span-2' },
    { src: '/images/2025-11-16_23-08.png', alt: 'Cartão de visita Sociedade do Corte', span: '' },
    { src: '/images/2025-11-16_23-09_3.png', alt: 'Fachada da barbearia', span: '' },
  ];

  return (
    <section id="galeria" className="py-24 lg:py-32 bg-sc-darker">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center reveal mb-16">
          <p className="text-sc-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">Nosso Trabalho</p>
          <h2 className="font-display text-4xl md:text-5xl text-sc-cream font-bold">
            Galeria
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[220px] reveal">
          {images.map((img, idx) => (
            <div key={idx} className={`gallery-item ${img.span}`}>
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Instagram CTA */}
        <div className="text-center mt-12 reveal">
          <a
            href="https://www.instagram.com/sociedadedocortee/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline px-6 py-3 rounded-lg inline-flex items-center gap-2 text-sm"
          >
            <Instagram size={18} />
            Siga no Instagram @sociedadedocortee
          </a>
        </div>
      </div>
    </section>
  );
}

// ======================== DIFFERENTIALS SECTION ========================
function DifferentialsSection() {
  const items = [
    {
      icon: <Scissors size={32} />,
      title: 'Técnica & Propósito',
      text: 'Barbeiros experientes que entendem seu estilo e entregam resultados impecáveis.',
    },
    {
      icon: <Beer size={32} />,
      title: 'Experiência Completa',
      text: 'Cerveja gelada, ambiente acolhedor e descontraído. Aqui você relaxa enquanto cuida do visual.',
    },
    {
      icon: <CalendarCheck size={32} />,
      title: 'Sem Fila de Espera',
      text: 'Agendamento rápido pelo WhatsApp. Pontualidade e respeito pelo seu tempo.',
    },
    {
      icon: <MapPin size={32} />,
      title: 'Localização Privilegiada',
      text: 'Fácil acesso em Águas Claras, DF. Venha nos visitar e conheça o espaço.',
    },
  ];

  return (
    <section className="py-24 lg:py-32 bg-sc-green relative overflow-hidden">
      {/* Subtle pattern */}
      <div className="diamond-bg absolute inset-0 opacity-50" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center reveal mb-16">
          <p className="text-sc-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">Por Que Nos Escolher</p>
          <h2 className="font-display text-4xl md:text-5xl text-sc-cream font-bold">
            Diferenciais
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="text-center reveal">
              <div className="w-16 h-16 rounded-full bg-sc-gold/10 border border-sc-gold/20 flex items-center justify-center text-sc-gold mx-auto mb-5">
                {item.icon}
              </div>
              <h3 className="font-display text-lg text-sc-cream font-semibold mb-3">{item.title}</h3>
              <p className="text-sc-cream/60 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ======================== CONTACT & FOOTER ========================
function ContactFooter() {
  return (
    <footer id="contato" className="bg-sc-darker">
      {/* Contact Section */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info */}
            <div className="reveal">
              <p className="text-sc-gold text-sm tracking-[0.3em] uppercase font-medium mb-4">Venha Nos Visitar</p>
              <h2 className="font-display text-4xl md:text-5xl text-sc-cream font-bold mb-8">
                Contato & Localização
              </h2>

              <div className="space-y-6">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sc-green/30 flex items-center justify-center text-sc-gold flex-shrink-0 mt-0.5">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sc-cream font-medium">Endereço</p>
                    <p className="text-sc-cream/70 text-sm mt-1 leading-relaxed">
                      R. 25 Norte, 02 - Lj 01 - Águas Claras
                      <br />
                      Brasília - DF, 71917-180, Brasil
                    </p>
                    <a
                      href="https://www.google.com/maps?cid=14525460634190538779&g_mp=CiVnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLkdldFBsYWNlEAMYASAF&hl=pt-BR&source=embed"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sc-gold hover:underline text-xs mt-1.5 inline-block font-medium"
                    >
                      Abrir no Google Maps →
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sc-green/30 flex items-center justify-center text-sc-gold flex-shrink-0 mt-0.5">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-sc-cream font-medium">Horário de Funcionamento</p>
                    <div className="text-sc-cream/70 text-sm mt-1 space-y-0.5">
                      <p>Segunda a Sexta: 09h às 20h</p>
                      <p>Sábado: 09h às 18h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>

                {/* Phone/WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sc-green/30 flex items-center justify-center text-sc-gold flex-shrink-0 mt-0.5">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-sc-cream font-medium">WhatsApp</p>
                    <a
                      href="https://wa.me/556198287052"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sc-gold hover:text-sc-gold-light text-sm mt-1 inline-block transition-colors font-medium"
                    >
                      (61) 98287-052
                    </a>
                  </div>
                </div>

                {/* Instagram */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-sc-green/30 flex items-center justify-center text-sc-gold flex-shrink-0 mt-0.5">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <p className="text-sc-cream font-medium">Instagram</p>
                    <a
                      href="https://www.instagram.com/sociedadedocortee/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sc-gold hover:text-sc-gold-light text-sm mt-1 inline-block transition-colors font-medium"
                    >
                      @sociedadedocortee
                    </a>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 mt-10">
                <a
                  href="https://agendamento.avec.beauty/?slug=sociedade-do-corte"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-8 py-3.5 rounded-lg text-base tracking-wide inline-flex items-center gap-2"
                >
                  <CalendarCheck size={18} />
                  Agendar Horário Online
                </a>
                <a
                  href="https://wa.me/556198287052?text=Olá!%20Gostaria%20de%20tirar%20uma%20dúvida%20sobre%20a%20Sociedade%20do%20Corte."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline px-6 py-3.5 rounded-lg text-base tracking-wide inline-flex items-center gap-2"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="reveal rounded-xl overflow-hidden h-[400px] lg:h-[500px] bg-sc-surface border border-white/5 shadow-2xl relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3838.6476!2d-48.0267!3d-15.8368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a3242eeef12ab%3A0xc99ffc71bfa2b37b!2sR.%2025%20Norte%2C%202%20-%20%C3%81guas%20Claras%2C%20Bras%C3%ADlia%20-%20DF%2C%2071917-180!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) brightness(0.85) contrast(1.1)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Sociedade do Corte"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/images/logo-instagram.jpg"
              alt="SC"
              className="w-8 h-8 rounded object-cover border border-sc-gold/20"
            />
            <p className="text-sc-cream/40 text-sm">
              © 2026 Sociedade do Corte. Todos os direitos reservados.
            </p>
          </div>
          <p className="text-sc-cream/30 text-xs">
            Onde o estilo encontra a essência.
          </p>
        </div>
      </div>
    </footer>
  );
}

// ======================== WHATSAPP BUTTON ========================
function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/556198287052?text=Olá!%20Gostaria%20de%20agendar%20um%20horário%20na%20Sociedade%20do%20Corte."
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float group"
      aria-label="Falar no WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="30" height="30" fill="white">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>

      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-sc-dark text-sc-cream text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
        Agendar Horário
      </span>
    </a>
  );
}

// ======================== SCROLL REVEAL HOOK ========================
function useScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

// ======================== MAIN APP ========================
export default function App() {
  const [showSplash, setShowSplash] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useScrollReveal();

  const handleSplashComplete = () => {
    setShowSplash(false);
    setShowContent(true);
  };

  // Re-observe elements after content mounts
  useEffect(() => {
    if (showContent) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      // Small delay to ensure DOM is ready
      setTimeout(() => {
        document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
      }, 100);

      return () => observer.disconnect();
    }
  }, [showContent]);

  return (
    <>
      {/* Splash Screen */}
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}

      {/* Main Site */}
      {showContent && (
        <div className="min-h-screen bg-sc-dark">
          <Header />
          <main>
            <HeroSection />
            <AboutSection />
            <ServicesSection />
            <TeamSection />
            <GallerySection />
            <DifferentialsSection />
            <ContactFooter />
          </main>
          <WhatsAppButton />
        </div>
      )}
    </>
  );
}
