import React, { useState, useEffect, useRef } from 'react';
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
  Zap,
  CheckCircle2,
  Sparkles,
  Globe,
  Layers,
  Play,
  ArrowUpRight,
  CircleDot,
  FileText,
  Code2,
  Monitor,
  Palette,
  Rocket,
  Star,
  TrendingUp,
  Clock,
  Shield
} from 'lucide-react';

/* ── Scroll Reveal Hook ── */
const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); obs.unobserve(el); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
};

const Reveal = ({ children, className = '', delay = 0 }) => {
  const ref = useReveal();
  return (
    <div ref={ref} className={`reveal ${delay ? `reveal-delay-${delay}` : ''} ${className}`}>
      {children}
    </div>
  );
};

/* ── Main App ── */
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mainServices = [
    {
      title: "AI Exam Transformer",
      subtitle: "영어 시험 문제 변형 AI",
      badge: "집중 사업",
      description: "중·고등학교 내신 영어 지문을 AI가 분석하여 어법, 어휘, 빈칸추론, 순서배열 등 다양한 유형의 변형 문제를 자동 생성합니다. 교사의 출제 시간을 획기적으로 단축하고, 학생에게는 무한한 연습 기회를 제공합니다.",
      icon: <FileText className="w-8 h-8" />,
      tags: ["문제 자동 생성", "내신 대비", "어법·어휘 변형", "Claude 기반"],
      gradient: "from-blue-600 to-violet-600",
      lightBg: "bg-blue-50",
      lightText: "text-blue-600",
      features: [
        { icon: <Zap size={18} />, text: "10초 만에 변형 문제 생성" },
        { icon: <TrendingUp size={18} />, text: "학생 성적 향상 데이터 분석" },
        { icon: <Shield size={18} />, text: "검증된 문제 품질 보장" },
      ]
    },
    {
      title: "맞춤형 홈페이지 제작",
      subtitle: "Custom Web Development",
      badge: "핵심 사업",
      description: "비즈니스 목적에 최적화된 맞춤형 웹사이트를 기획부터 디자인, 개발, 배포까지 원스톱으로 제공합니다. 반응형 디자인과 최신 기술 스택으로 빠르고 아름다운 웹 경험을 만듭니다.",
      icon: <Monitor className="w-8 h-8" />,
      tags: ["반응형 웹", "UI/UX 디자인", "SEO 최적화", "유지보수"],
      gradient: "from-emerald-500 to-teal-500",
      lightBg: "bg-emerald-50",
      lightText: "text-emerald-600",
      features: [
        { icon: <Palette size={18} />, text: "트렌디한 UI/UX 디자인" },
        { icon: <Code2 size={18} />, text: "React / Next.js 기반 개발" },
        { icon: <Rocket size={18} />, text: "빠른 납품 및 유지보수 지원" },
      ]
    }
  ];

  const subServices = [
    {
      title: "AI Solutions",
      subtitle: "인공지능 솔루션",
      description: "딥러닝 모델을 통한 비즈니스 자동화 및 지능형 의사결정 지원",
      icon: <BrainCircuit className="w-5 h-5" />,
      status: "진행중",
      gradient: "from-sky-500 to-blue-500"
    },
    {
      title: "Next-Gen EdTech",
      subtitle: "차세대 에듀테크",
      description: "AI 튜터와 실시간 상호작용하는 혁신적 영어 교육 플랫폼",
      icon: <Languages className="w-5 h-5" />,
      status: "진행중",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: "Embedded Systems",
      subtitle: "임베디드 시스템",
      description: "저전력/고효율 임베디드 설계 및 하드웨어-소프트웨어 통합",
      icon: <Cpu className="w-5 h-5" />,
      status: "진행중",
      gradient: "from-amber-500 to-orange-500"
    }
  ];

  const marqueeItems = [
    "React", "Next.js", "TypeScript", "Tailwind CSS", "Node.js", "Python",
    "Claude API", "Vercel", "Supabase", "Figma", "AWS", "Docker"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* ── Navigation ── */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-violet-600 rounded-xl flex items-center justify-center font-extrabold text-lg text-white group-hover:scale-110 transition-transform">
              X
            </div>
            <span className="text-xl font-extrabold tracking-tight">XYL</span>
          </a>

          <div className="hidden md:flex items-center gap-9 text-[15px] font-medium text-gray-500">
            <a href="#services" className="hover:text-gray-900 transition-colors">서비스</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">소개</a>
            <a href="#tech" className="hover:text-gray-900 transition-colors">기술</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">문의</a>
            <button
              onClick={() => { setShowContact(true); setSent(false); }}
              className="bg-gray-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full transition-all font-semibold text-sm cursor-pointer"
            >
              문의하기
            </button>
          </div>

          <button className="md:hidden text-gray-900 cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 p-6 flex flex-col gap-5 animate-slide-down shadow-xl">
            <a href="#services" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>서비스</a>
            <a href="#about" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>소개</a>
            <a href="#tech" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>기술</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>문의</a>
            <button className="bg-gray-900 text-white px-5 py-3 rounded-xl font-semibold cursor-pointer">문의하기</button>
          </div>
        )}
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated gradient mesh background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-blue-100/60 via-violet-50/40 to-transparent rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-emerald-50/50 to-transparent rounded-full blur-3xl" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
            backgroundSize: '24px 24px'
          }} />
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Text */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 text-gray-600 text-xs font-bold mb-8 shadow-sm">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                AI 시험 변형 · 맞춤형 웹 개발
              </div>

              <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.15] mb-6 tracking-tight">
                당신의 비즈니스를
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  기술로 완성
                </span>
                합니다.
              </h1>

              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                AI 기반 영어 시험 문제 자동 변형부터
                맞춤형 웹사이트 제작까지, XYL이 함께합니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center justify-center gap-2 bg-gray-900 text-white px-7 py-4 rounded-2xl font-semibold text-[15px] hover:bg-blue-600 transition-all cursor-pointer shadow-lg shadow-gray-900/10 hover:shadow-blue-600/25"
                >
                  서비스 둘러보기
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-7 py-4 rounded-2xl font-semibold text-[15px] hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer"
                >
                  <Mail size={16} className="text-blue-500" />
                  프로젝트 문의
                </button>
              </div>
            </div>

            {/* Right: Service preview cards */}
            <div className="lg:w-1/2 relative">
              <div className="relative">
                {/* Main card - AI Exam Transformer */}
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-xl shadow-gray-200/50 mb-4 hover:shadow-2xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-2xl flex items-center justify-center text-white shrink-0">
                      <FileText size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">AI Exam Transformer</h3>
                        <span className="text-[10px] font-bold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">MAIN</span>
                      </div>
                      <p className="text-sm text-gray-400">AI가 내신 영어 변형 문제를 자동 생성</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {["문제 자동 생성", "어법 변형", "Claude 기반"].map(tag => (
                      <span key={tag} className="text-[11px] bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Sub card - 맞춤형 홈페이지 */}
                <div className="bg-white rounded-3xl border border-gray-100 p-6 shadow-xl shadow-gray-200/50 hover:shadow-2xl transition-shadow">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center text-white shrink-0">
                      <Monitor size={24} />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">맞춤형 홈페이지 제작</h3>
                        <span className="text-[10px] font-bold bg-emerald-100 text-emerald-600 px-2 py-0.5 rounded-full">MAIN</span>
                      </div>
                      <p className="text-sm text-gray-400">기획부터 배포까지 원스톱 웹 개발</p>
                    </div>
                  </div>
                  <div className="flex gap-2 flex-wrap">
                    {["반응형 웹", "UI/UX", "SEO 최적화"].map(tag => (
                      <span key={tag} className="text-[11px] bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-full font-medium">{tag}</span>
                    ))}
                  </div>
                </div>

                {/* Floating badge */}
                <div className="absolute -top-4 -right-4 glass border border-white/50 rounded-2xl px-4 py-3 shadow-lg animate-float-delay">
                  <div className="flex items-center gap-2">
                    <Star size={14} className="text-amber-500 fill-amber-500" />
                    <p className="text-xs font-bold text-gray-700">고객 만족도 98%</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Tech Marquee ── */}
      <section className="border-y border-gray-100 py-5 bg-gray-50/50 overflow-hidden">
        <div className="animate-marquee flex whitespace-nowrap">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="mx-6 text-sm font-medium text-gray-300 flex items-center gap-2">
              <CircleDot size={8} className="text-blue-300" />
              {item}
            </span>
          ))}
        </div>
      </section>


      {/* ── Main Services Section ── */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Core Business</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">XYL의 핵심 비즈니스</h2>
              <p className="text-gray-400 mt-4 max-w-lg mx-auto">현재 집중하고 있는 두 가지 핵심 사업입니다</p>
            </div>
          </Reveal>

          {/* Main services - large cards */}
          <div className="grid lg:grid-cols-2 gap-6 mb-16">
            {mainServices.map((service, i) => (
              <Reveal key={i} delay={i}>
                <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group h-full">
                  {/* Gradient header */}
                  <div className={`bg-gradient-to-r ${service.gradient} p-8 relative overflow-hidden`}>
                    <div className="absolute top-0 right-0 opacity-10">
                      <div className="w-32 h-32 border-[3px] border-white rounded-full -translate-y-1/2 translate-x-1/4" />
                    </div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center text-white">
                        {service.icon}
                      </div>
                      <span className="text-xs font-bold bg-white/20 text-white px-3 py-1 rounded-full">
                        {service.badge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-white/70 text-sm">{service.subtitle}</p>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <p className="text-gray-500 leading-relaxed mb-6">{service.description}</p>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feat, j) => (
                        <div key={j} className="flex items-center gap-3 text-sm text-gray-600">
                          <div className={`w-8 h-8 ${service.lightBg} rounded-xl flex items-center justify-center ${service.lightText} shrink-0`}>
                            {feat.icon}
                          </div>
                          <span className="font-medium">{feat.text}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tags.map(tag => (
                        <span key={tag} className={`px-3 py-1.5 ${service.lightBg} ${service.lightText} rounded-lg text-xs font-semibold`}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className={`inline-flex items-center gap-2 ${service.lightText} font-semibold hover:opacity-70 transition cursor-pointer group/btn`}>
                      자세히 알아보기
                      <ArrowUpRight size={18} className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Sub services - smaller cards with "진행중" label */}
          <Reveal>
            <div className="text-center mb-8">
              <p className="text-xs font-bold tracking-widest text-gray-400 uppercase">Also Working On</p>
              <h3 className="text-lg font-bold text-gray-500 mt-1">함께 진행 중인 사업</h3>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-3 gap-4">
            {subServices.map((service, i) => (
              <Reveal key={i} delay={i}>
                <div className="bg-white rounded-2xl border border-gray-100 p-5 hover:border-gray-200 transition-all group">
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-9 h-9 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center text-white`}>
                      {service.icon}
                    </div>
                    <span className="text-[10px] font-bold bg-gray-100 text-gray-400 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      {service.status}
                    </span>
                  </div>
                  <h4 className="font-bold text-sm text-gray-900 mb-0.5">{service.title}</h4>
                  <p className="text-xs text-gray-400 mb-2">{service.subtitle}</p>
                  <p className="text-xs text-gray-400 leading-relaxed">{service.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why XYL Section ── */}
      <section id="about" className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Left: Bento grid */}
            <div className="lg:w-1/2">
              <div className="grid grid-cols-2 gap-4">
                <Reveal className="col-span-2">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 opacity-10">
                      <BrainCircuit size={120} />
                    </div>
                    <p className="text-sm font-medium text-gray-400 mb-2">Why XYL</p>
                    <h4 className="text-2xl font-bold mb-2">기술과 교육의<br/>교차점</h4>
                    <p className="text-gray-400 text-sm">AI 기술력 + 교육 도메인 전문성</p>
                  </div>
                </Reveal>
                <Reveal delay={1}>
                  <div className="bg-blue-50 rounded-3xl p-6 aspect-square flex flex-col justify-between glow-blue">
                    <FileText size={32} className="text-blue-500" />
                    <div>
                      <p className="text-2xl font-extrabold text-blue-600">AI</p>
                      <p className="text-xs text-blue-400">시험 문제 변형</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={2}>
                  <div className="bg-emerald-50 rounded-3xl p-6 aspect-square flex flex-col justify-between glow-emerald">
                    <Monitor size={32} className="text-emerald-500" />
                    <div>
                      <p className="text-2xl font-extrabold text-emerald-600">Web</p>
                      <p className="text-xs text-emerald-400">맞춤형 개발</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right: Text */}
            <div className="lg:w-1/2">
              <Reveal>
                <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">About Us</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight tracking-tight">
                  필요한 기술을
                  <br /><span className="text-blue-600">정확하게</span> 전달합니다.
                </h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                  XYL은 AI 기술과 웹 개발 역량을 결합하여, 교육 현장과 비즈니스에
                  실질적인 가치를 제공하는 솔루션을 만듭니다.
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  "Claude 기반 영어 시험 문제 자동 변형 시스템",
                  "반응형 맞춤형 웹사이트 기획·디자인·개발",
                  "교육 기관 및 학원 대상 B2B 솔루션",
                  "빠른 커뮤니케이션과 안정적인 유지보수"
                ].map((item, i) => (
                  <Reveal key={i} delay={i}>
                    <div className="flex items-center gap-4 bg-gray-50 rounded-2xl px-5 py-4 hover:bg-blue-50 hover:shadow-sm transition-all">
                      <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="text-blue-600" size={16} />
                      </div>
                      <span className="text-gray-700 font-medium text-[15px]">{item}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology Section ── */}
      <section id="tech" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Technology</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">사용 기술 스택</h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "React / Next.js", desc: "프론트엔드 개발", emoji: "⚛️", color: "hover:border-cyan-300 hover:bg-cyan-50" },
              { name: "Claude API", desc: "AI 문제 생성 엔진", emoji: "🤖", color: "hover:border-blue-300 hover:bg-blue-50" },
              { name: "Node.js", desc: "백엔드 서비스", emoji: "🟢", color: "hover:border-green-300 hover:bg-green-50" },
              { name: "TypeScript", desc: "타입 안전 개발", emoji: "💙", color: "hover:border-blue-300 hover:bg-blue-50" },
              { name: "Tailwind CSS", desc: "UI 스타일링", emoji: "🎨", color: "hover:border-violet-300 hover:bg-violet-50" },
              { name: "Supabase", desc: "데이터베이스·인증", emoji: "⚡", color: "hover:border-emerald-300 hover:bg-emerald-50" },
              { name: "Vercel / AWS", desc: "클라우드 배포", emoji: "☁️", color: "hover:border-gray-300 hover:bg-gray-50" },
              { name: "Figma", desc: "UI/UX 디자인", emoji: "🖌️", color: "hover:border-pink-300 hover:bg-pink-50" }
            ].map((tech, i) => (
              <Reveal key={i} delay={i % 4}>
                <div className={`p-5 bg-white border border-gray-100 rounded-2xl transition-all duration-300 group cursor-pointer ${tech.color}`}>
                  <div className="text-2xl mb-3">{tech.emoji}</div>
                  <h4 className="font-bold text-gray-900 text-[15px]">{tech.name}</h4>
                  <p className="text-sm text-gray-400 mt-1">{tech.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Section ── */}
      <section id="contact" className="py-20 px-6">
        <Reveal>
          <div className="max-w-4xl mx-auto relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-700 to-violet-700 p-12 md:p-20 text-center">
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-10 right-10 opacity-10">
              <Sparkles size={100} className="text-white" />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white relative z-10 tracking-tight">
              프로젝트를 함께<br />시작해 보세요
            </h2>
            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto relative z-10">
              AI 시험 문제 변형 시스템이 필요하시거나,
              맞춤형 웹사이트 제작이 필요하시다면 편하게 연락주세요.
            </p>
            <div className="relative z-10">
              <button
                onClick={() => { setShowContact(true); setSent(false); }}
                className="bg-white text-blue-700 px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform cursor-pointer shadow-lg"
              >
                프로젝트 문의하기
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Contact Modal ── */}
      {showContact && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4" onClick={() => setShowContact(false)}>
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
          <div
            className="relative bg-white rounded-3xl w-full max-w-md p-8 shadow-2xl animate-scale-in"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContact(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition cursor-pointer text-gray-400 hover:text-gray-600"
            >
              <X size={20} />
            </button>

            {sent ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 size={32} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">문의가 전송되었습니다</h3>
                <p className="text-gray-400 text-sm">빠른 시일 내에 답변 드리겠습니다.</p>
                <button
                  onClick={() => setShowContact(false)}
                  className="mt-6 bg-gray-900 text-white px-6 py-3 rounded-xl font-semibold text-sm cursor-pointer hover:bg-blue-600 transition-colors"
                >
                  닫기
                </button>
              </div>
            ) : (
              <>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-1">프로젝트 문의</h3>
                  <p className="text-sm text-gray-400">내용을 작성해주시면 메일로 답변 드립니다.</p>
                </div>

                <form
                  onSubmit={e => {
                    e.preventDefault();
                    setSending(true);
                    const subject = encodeURIComponent(`[XYL 문의] ${contactForm.name}님의 프로젝트 문의`);
                    const body = encodeURIComponent(
                      `보내는 분: ${contactForm.name}\n이메일: ${contactForm.email}\n\n${contactForm.message}`
                    );
                    window.location.href = `mailto:jintae.3cpures@gmail.com,jsko6625@gmail.com?subject=${subject}&body=${body}`;
                    setTimeout(() => {
                      setSending(false);
                      setSent(true);
                      setContactForm({ name: '', email: '', message: '' });
                    }, 500);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">이름 / 회사명</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                      placeholder="홍길동 / ABC 학원"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">이메일</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                      placeholder="you@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1.5">문의 내용</label>
                    <textarea
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                      placeholder="프로젝트에 대해 간단히 설명해주세요..."
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full bg-gray-900 text-white py-3.5 rounded-xl font-semibold text-sm hover:bg-blue-600 transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {sending ? '전송 중...' : '문의 보내기'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-14">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-violet-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">X</div>
                <span className="text-lg font-extrabold">XYL <span className="text-sm font-medium text-gray-400">(엑슬리)</span></span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed text-[15px] mb-6">
                AI 기반 교육 솔루션과 맞춤형 웹 개발을 통해 고객의 비즈니스 성장을 돕는 기술 전문 기업입니다.
              </p>
              <div className="flex gap-3">
                {[Github, Mail, ExternalLink].map((Icon, i) => (
                  <div key={i} className="w-10 h-10 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all cursor-pointer">
                    <Icon size={18} />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-5 text-xs tracking-widest text-gray-900 uppercase">서비스</h5>
              <ul className="space-y-3 text-gray-400 text-[15px]">
                <li><a href="#services" className="hover:text-gray-900 transition-colors">AI Exam Transformer</a></li>
                <li><a href="#services" className="hover:text-gray-900 transition-colors">맞춤형 홈페이지 제작</a></li>
                <li><a href="#services" className="hover:text-gray-900 transition-colors">AI Solutions</a></li>
                <li><a href="#services" className="hover:text-gray-900 transition-colors">EdTech</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-5 text-xs tracking-widest text-gray-900 uppercase">회사</h5>
              <ul className="space-y-3 text-gray-400 text-[15px]">
                <li><a href="#about" className="hover:text-gray-900 transition-colors">회사 소개</a></li>
                <li><a href="#tech" className="hover:text-gray-900 transition-colors">기술 스택</a></li>
                <li><a href="#contact" className="hover:text-gray-900 transition-colors">문의</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-gray-100 text-sm text-gray-400">
            <p>&copy; 2025 XYL Inc. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <span className="hover:text-gray-600 transition-colors cursor-pointer">개인정보처리방침</span>
              <span className="hover:text-gray-600 transition-colors cursor-pointer">이용약관</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
