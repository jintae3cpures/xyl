import React, { useState, useEffect } from 'react';
import {
  Cpu,
  Languages,
  BrainCircuit,
  ArrowRight,
  Menu,
  X,
  ChevronRight,
  Github,
  Mail,
  ExternalLink,
  Sparkles,
  Feather,
  Clock,
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Compact oval cartouche mark for the nav & footer
  const Logo = () => (
    <svg width="50" height="38" viewBox="0 0 50 38" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d8bd84" />
          <stop offset="45%" stopColor="#b08d4a" />
          <stop offset="100%" stopColor="#6f5526" />
        </linearGradient>
      </defs>
      <ellipse cx="25" cy="19" rx="23.5" ry="17.5" fill="#f4f1e6" stroke="url(#brass)" strokeWidth="1.4" />
      <ellipse cx="25" cy="19" rx="20.5" ry="14.5" fill="none" stroke="url(#brass)" strokeWidth="0.7" opacity="0.6" />
      <text x="25" y="24" textAnchor="middle" fontFamily="'Cormorant Garamond', serif" fontSize="15" fontWeight="600" letterSpacing="0.5" fill="url(#brass)">XYL</text>
    </svg>
  );

  // Large apothecary emblem — the "sage label" look
  const Emblem = () => (
    <div className="relative w-full aspect-[7/5] rounded-2xl overflow-hidden flex items-center justify-center bg-sage-300">
      <svg viewBox="0 0 700 500" className="absolute inset-0 w-full h-full">
        <ellipse cx="350" cy="250" rx="318" ry="208" fill="none" stroke="#b08d4a" strokeWidth="2.5" />
        <ellipse cx="350" cy="250" rx="302" ry="194" fill="none" stroke="#b08d4a" strokeWidth="1.2" opacity="0.7" />
      </svg>
      <div className="relative text-center px-8">
        <p className="text-sm md:text-base tracking-[0.45em] font-serif text-ink/70">SINCE 2026</p>
        <h3 className="font-serif font-semibold leading-none my-3 text-7xl md:text-8xl text-ink">XYL</h3>
        <div className="w-28 h-px mx-auto my-3 bg-ink/40" />
        <p className="text-sm tracking-[0.4em] font-serif text-ink/55">엑슬리</p>
      </div>
    </div>
  );

  const services = [
    {
      no: 'I',
      kicker: 'Exam Prep AI',
      title: 'AI Solutions',
      description:
        '중·고등학교 내신과 모의고사를 분석해 학생별 맞춤 분석지와 예상문제를 자동으로 만들어 주는 AI 솔루션. 적중률 높은 예상 문제로 완벽한 시험 대비를 돕습니다.',
      icon: BrainCircuit,
    },
    {
      no: 'II',
      kicker: 'AI Vocabulary',
      title: 'Next-Gen EdTech',
      description:
        'AI가 중·고등학생의 어휘 수준을 진단하고, 잊어버릴 때쯤 다시 꺼내 주는 맞춤형 단어 학습 시스템. 교과서·시험 빈출 단어를 체계적으로 학습할 수 있게 합니다.',
      icon: Languages,
    },
    {
      no: 'III',
      kicker: 'Edge & IoT',
      title: 'Embedded Systems',
      description:
        '저전력·고효율 임베디드 설계로 하드웨어와 소프트웨어가 한 몸처럼 어우러지는 정밀함을 구현합니다.',
      icon: Cpu,
      comingSoon: true,
    },
  ];

  const Ornament = ({ className = '' }) => (
    <div className={`ornament ${className}`}>
      <span className="text-brass-500">&#10070;</span>
    </div>
  );

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#about', label: 'Philosophy' },
    { href: '#tech', label: 'Technology' },
  ];

  return (
    <div className="min-h-screen font-serif paper-grain bg-cream text-ink">
      {/* ── Navigation ── */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-ivory/85 backdrop-blur-xl border-b border-brass-500/25 py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-3 group">
            <Logo />
            <div className="leading-none">
              <span className="block text-2xl font-semibold tracking-[0.2em] text-gilded gild-shimmer">XYL</span>
              <span className="block text-[11px] tracking-[0.35em] text-sage-600 font-serif mt-1">엑슬리 · Since 2026</span>
            </div>
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-10 text-[15px] tracking-[0.12em] uppercase">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="relative group transition-colors text-sage-800 hover:text-burgundy-500">
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-brass-500 group-hover:w-full transition-all duration-300" />
              </a>
            ))}

            <a
              href="#contact"
              className="px-6 py-2.5 rounded-full border border-brass-500/60 text-brass-600 hover:bg-brass-500 hover:text-cream transition-all duration-300 tracking-[0.12em]"
            >
              Contact
            </a>
          </div>

          {/* Mobile toggle */}
          <button className="md:hidden text-ink" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full p-6 flex flex-col gap-5 animate-slide-down backdrop-blur-xl bg-ivory/95 border-b border-brass-500/25">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="uppercase tracking-[0.12em] text-sage-800 hover:text-burgundy-500" onClick={() => setIsMenuOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-center px-6 py-3 rounded-full border border-brass-500/60 text-brass-600 tracking-[0.12em] uppercase">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className="relative pt-40 pb-28 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-20 left-1/4 w-[34rem] h-[34rem] rounded-full blur-[140px] bg-sage-300/40" />
          <div className="absolute top-1/3 -right-20 w-[30rem] h-[30rem] rounded-full blur-[150px] bg-brass-300/25" />
        </div>

        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-brass-500/40 text-brass-600 text-xs tracking-[0.3em] uppercase font-sans mb-10">
            <Sparkles size={13} />
            Established 2026
          </div>

          <p className="text-sm tracking-[0.4em] uppercase text-sage-600 font-sans mb-6">AI · Education · Hardware</p>

          <h1 className="font-serif font-light leading-[0.95] text-6xl md:text-8xl tracking-tight">
            <span className="block text-ink">Transform</span>
            <span className="block italic text-gilded gild-shimmer my-1">Tomorrow</span>
            <span className="block text-ink">Today</span>
          </h1>

          <Ornament className="my-10" />

          <p className="max-w-2xl mx-auto text-xl md:text-2xl leading-relaxed text-sage-700 break-keep">
            XYL은 인공지능과 교육, 그리고 하드웨어를 하나의 정교한 조향처럼 빚어내어
            세상을 잇는 혁신을 만듭니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-brass-500 text-cream hover:bg-brass-600 transition-all duration-300 tracking-[0.15em] uppercase text-sm card-emboss"
            >
              여정을 시작하다
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full border border-sage-400/60 text-sage-700 hover:bg-sage-100 transition-all duration-300 tracking-[0.15em] uppercase text-sm"
            >
              더 알아보기
              <ChevronRight size={17} />
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-12 md:gap-20 mt-20">
            {[
              { n: '98%', l: 'Satisfaction' },
              { n: '50+', l: 'Projects' },
              { n: '10+', l: 'Technologies' },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-5xl font-light text-gilded">{s.n}</div>
                <div className="text-xs tracking-[0.25em] uppercase mt-2 font-sans text-sage-600">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="py-28 bg-sage-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-brass-600 font-sans mb-4">Our Services</p>
            <h2 className="text-5xl md:text-6xl font-light text-ink">핵심 서비스</h2>
            <Ornament className="mt-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.no}
                  className="group relative rounded-2xl border p-10 text-center transition-all duration-500 card-emboss bg-ivory border-brass-500/25 hover:border-brass-500/60 hover:-translate-y-1"
                >
                  <span className="absolute top-6 right-7 text-2xl font-light italic text-brass-400/60">{s.no}</span>

                  <div className="mx-auto mb-7 w-20 h-20 rounded-full border flex items-center justify-center animate-seal border-brass-500/40">
                    <Icon className="w-9 h-9 text-brass-500" strokeWidth={1.3} />
                  </div>

                  <p className="text-[11px] tracking-[0.3em] uppercase text-brass-600 font-sans mb-2">{s.kicker}</p>
                  <h3 className="text-2xl font-medium mb-4 text-ink">{s.title}</h3>
                  <p className="leading-relaxed text-lg text-sage-700">{s.description}</p>

                  {/* Coming soon — feature in preparation */}
                  {s.comingSoon && (
                    <span className="inline-flex items-center gap-2 mt-8 px-4 py-1.5 rounded-full border text-sm tracking-[0.15em] uppercase cursor-default select-none border-sage-300 text-sage-500">
                      <Clock size={14} />
                      준비중
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Philosophy / About ── */}
      <section id="about" className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
              <Emblem />
            </div>

            <div className="lg:w-1/2 space-y-8">
              <p className="text-xs tracking-[0.4em] uppercase text-brass-600 font-sans">Philosophy</p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-ink">
                기술의 <span className="italic text-gilded">교차점</span>에서
                <br />새로운 가치를 빚다
              </h2>
              <p className="text-lg leading-relaxed text-sage-700">
                XYL은 단순한 소프트웨어 기업이 아닙니다. AI 기반 교육 솔루션을 만드는 데 그치지 않고,
                그 AI 엔진을 저전력 임베디드 칩에 직접 담아내는 하드웨어 개발까지 아우릅니다.
                사용자가 현실에서 즉각적인 감응을 받을 수 있는 ‘실체 있는 기술’을 지향합니다.
              </p>

              <ul className="space-y-5">
                {[
                  { title: '시험 분석 & 예상문제', desc: '내신·모의고사 맞춤 분석지와 예상문제 자동 생성' },
                  { title: 'AI 단어 학습', desc: '중·고등학생 맞춤 어휘 프로그램' },
                  { title: '임베디드 AI', desc: '저전력 칩에 직접 탑재하는 온디바이스 지능' },
                  { title: '통합 솔루션', desc: '하드웨어와 소프트웨어의 완벽한 합' },
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <span className="mt-1 text-brass-500 text-lg">&#10070;</span>
                    <div>
                      <h4 className="text-xl font-medium text-ink">{item.title}</h4>
                      <p className="text-base text-sage-600">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <a
                href="#tech"
                className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-brass-500/60 text-brass-600 hover:bg-brass-500 hover:text-cream transition-all duration-300 tracking-[0.15em] uppercase text-sm mt-4"
              >
                자세히 알아보기
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section id="tech" className="py-28 bg-sage-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-brass-600 font-sans mb-4">Technology</p>
            <h2 className="text-5xl md:text-6xl font-light text-ink">우리의 기술</h2>
            <Ornament className="mt-8" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'PyTorch · TensorFlow', desc: '딥러닝 모델 훈련 및 최적화' },
              { name: 'Edge AI · TinyML', desc: '온디바이스 AI 추론 엔진' },
              { name: 'ARM Cortex · RISC-V', desc: '임베디드 프로세서 설계' },
              { name: 'React · Next.js', desc: '교육 플랫폼 프론트엔드' },
              { name: 'ONNX Runtime', desc: '크로스 플랫폼 모델 배포' },
              { name: 'Rust · C++', desc: '고성능 시스템 프로그래밍' },
              { name: 'WebRTC · WebSocket', desc: '실시간 양방향 통신' },
              { name: 'FPGA · ASIC', desc: '커스텀 하드웨어 가속기' },
            ].map((tech, i) => (
              <div
                key={i}
                className="group rounded-xl border p-7 transition-all duration-500 card-emboss bg-ivory border-brass-500/25 hover:border-brass-500/60 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-light italic text-brass-400/70">{String(i + 1).padStart(2, '0')}</span>
                  <Feather size={16} className="text-brass-500/60" />
                </div>
                <h4 className="text-lg font-medium mb-2 group-hover:text-brass-600 transition-colors text-ink">{tech.name}</h4>
                <p className="text-base leading-relaxed text-sage-700">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact / CTA ── */}
      <section id="contact" className="py-28">
        <div className="max-w-4xl mx-auto px-6">
          <div className="relative rounded-[2rem] border-2 p-12 md:p-20 text-center bg-sage-200 border-burgundy-500/30">
            <div className="absolute inset-4 rounded-[1.5rem] border pointer-events-none border-burgundy-500/20" />
            <p className="text-xs tracking-[0.4em] uppercase text-burgundy-500 font-sans mb-6">Get in Touch</p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight text-ink">
              XYL과 함께
              <br />
              <span className="italic text-gilded">내일을 빚어보세요</span>
            </h2>
            <Ornament className="my-8" />
            <p className="text-lg leading-relaxed max-w-xl mx-auto text-sage-700 break-keep">
              혁신적인 솔루션이 필요하시거나, XYL의 비전에 함께하고 싶은 파트너분들의 연락을 기다립니다.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a
                href="mailto:jsko6625@gmail.com"
                className="group inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full bg-brass-500 text-cream hover:bg-brass-600 transition-all duration-300 tracking-[0.15em] uppercase text-sm card-emboss"
              >
                프로젝트 문의하기
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-full border border-burgundy-500/40 text-burgundy-500 hover:bg-sage-100 transition-all duration-300 tracking-[0.15em] uppercase text-sm"
              >
                더 알아보기
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-sage-100 border-t border-brass-500/20 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-14">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Logo />
                <span className="text-2xl font-semibold tracking-[0.2em] text-gilded">XYL</span>
              </div>
              <p className="max-w-md leading-relaxed text-lg text-sage-700 break-keep">
                XYL은 AI, 영어 교육, 임베디드 시스템의 정교한 융합을 통해 인류의 가능성을 확장하는 혁신 기술 기업입니다.
              </p>
              <div className="flex gap-3 mt-7">
                {[Github, Mail, ExternalLink].map((Ic, i) => (
                  <a
                    key={i}
                    href="#"
                    className="w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 border-brass-500/40 hover:bg-brass-500 hover:border-brass-500 group"
                  >
                    <Ic size={18} className="text-brass-500 group-hover:text-cream" strokeWidth={1.4} />
                  </a>
                ))}
              </div>
            </div>

            {[
              { h: 'Navigation', items: ['Home', 'Services', 'Philosophy', 'Technology'] },
              { h: 'Resources', items: ['Careers', 'Blog', 'Documentation', 'Contact'] },
            ].map((col) => (
              <div key={col.h}>
                <h5 className="text-xs tracking-[0.3em] uppercase text-brass-600 font-sans mb-6">{col.h}</h5>
                <ul className="space-y-3">
                  {col.items.map((it) => (
                    <li key={it}>
                      <a href="#" className="text-base transition-colors text-sage-700 hover:text-brass-600">{it}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="ornament mb-8"><span className="text-brass-500">&#10070;</span></div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-sans text-sage-600">
            <p className="tracking-[0.1em]">© 2026 XYL. All rights reserved.</p>
            <div className="flex gap-6 tracking-[0.1em] uppercase text-xs">
              <a href="#" className="hover:text-brass-600 transition-colors">Privacy</a>
              <a href="#" className="hover:text-brass-600 transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
