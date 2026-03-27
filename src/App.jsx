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
  Triangle,
  Square,
  Hexagon,
  FileText
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

/* ── Counter Animation ── */
const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const start = performance.now();
        const animate = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(eased * end));
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
      }
    }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
};

/* ── Main App ── */
const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      title: "AI Exam Transformer",
      subtitle: "영어 시험 문제 변형 AI",
      description: "중·고등학교 내신 영어 지문을 AI가 분석하여 어법, 어휘, 빈칸추론, 순서배열 등 다양한 유형의 변형 문제를 자동 생성합니다. 교사의 출제 시간을 획기적으로 단축하고, 학생에게는 무한한 연습 기회를 제공합니다.",
      icon: <FileText className="w-7 h-7" />,
      tags: ["문제 자동 생성", "내신 대비", "어법·어휘 변형", "GPT 기반"],
      color: "emerald",
      gradient: "from-emerald-500 to-teal-400",
      bg: "bg-emerald-50",
      text: "text-emerald-600",
      border: "border-emerald-200",
      image: "✏️"
    },
    {
      title: "AI Solutions",
      subtitle: "인공지능 솔루션",
      description: "자체적인 딥러닝 모델을 통해 비즈니스 프로세스를 자동화하고 지능형 의사결정을 지원합니다.",
      icon: <BrainCircuit className="w-7 h-7" />,
      tags: ["Machine Learning", "NLP", "Computer Vision"],
      color: "blue",
      gradient: "from-blue-500 to-cyan-400",
      bg: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-200",
      image: "🧠"
    },
    {
      title: "Next-Gen EdTech",
      subtitle: "차세대 에듀테크",
      description: "AI 튜터와 실시간 상호작용하며 배우는 혁신적인 영어 교육 플랫폼을 제공합니다.",
      icon: <Languages className="w-7 h-7" />,
      tags: ["AI Tutor", "Adaptive Learning", "ESL"],
      color: "violet",
      gradient: "from-violet-500 to-purple-400",
      bg: "bg-violet-50",
      text: "text-violet-600",
      border: "border-violet-200",
      image: "📚"
    },
    {
      title: "Embedded Systems",
      subtitle: "임베디드 시스템",
      description: "저전력/고효율 임베디드 설계를 통해 하드웨어와 소프트웨어의 완벽한 결합을 구현합니다.",
      icon: <Cpu className="w-7 h-7" />,
      tags: ["IoT", "Edge Computing", "Firmware"],
      color: "amber",
      gradient: "from-amber-500 to-orange-400",
      bg: "bg-amber-50",
      text: "text-amber-600",
      border: "border-amber-200",
      image: "⚡"
    }
  ];

  const stats = [
    { number: 15, suffix: "+", label: "AI 모델 배포" },
    { number: 98, suffix: "%", label: "고객 만족도" },
    { number: 50, suffix: "K+", label: "에듀테크 사용자" },
    { number: 7, suffix: "건", label: "특허 보유" },
  ];

  const marqueeItems = [
    "PyTorch", "TensorFlow", "Edge AI", "TinyML", "ARM Cortex", "RISC-V",
    "React", "Next.js", "ONNX Runtime", "Rust", "C++", "WebRTC",
    "FPGA", "ASIC", "Computer Vision", "NLP", "LLM", "Transformer"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden">
      {/* ── Navigation ── */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/80 backdrop-blur-xl border-b border-gray-100 py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl flex items-center justify-center font-extrabold text-lg text-white group-hover:scale-110 transition-transform">
              X
            </div>
            <span className="text-xl font-extrabold tracking-tight">XYL</span>
          </a>

          <div className="hidden md:flex items-center gap-9 text-[15px] font-medium text-gray-500">
            <a href="#services" className="hover:text-gray-900 transition-colors">서비스</a>
            <a href="#about" className="hover:text-gray-900 transition-colors">소개</a>
            <a href="#tech" className="hover:text-gray-900 transition-colors">기술</a>
            <a href="#contact" className="hover:text-gray-900 transition-colors">소식</a>
            <button className="bg-gray-900 hover:bg-blue-600 text-white px-5 py-2.5 rounded-full transition-all font-semibold text-sm cursor-pointer">
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
            <a href="#contact" className="text-gray-600 hover:text-gray-900 font-medium" onClick={() => setIsMenuOpen(false)}>소식</a>
            <button className="bg-gray-900 text-white px-5 py-3 rounded-xl font-semibold cursor-pointer">문의하기</button>
          </div>
        )}
      </nav>

      {/* ── Hero Section ── */}
      <section className="relative pt-32 pb-20 min-h-[90vh] flex items-center overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-[10%] w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 animate-float" />
          <div className="absolute bottom-20 left-[5%] w-60 h-60 bg-violet-100 rounded-full blur-3xl opacity-40 animate-float-delay" />
          <div className="absolute top-1/2 right-[30%] w-40 h-40 bg-amber-100 rounded-full blur-3xl opacity-30 animate-float-slow" />
        </div>

        {/* Floating geometric shapes */}
        <div className="absolute inset-0 -z-5 pointer-events-none hidden lg:block">
          <div className="absolute top-32 right-[15%] animate-float opacity-10">
            <Hexagon size={80} strokeWidth={1} className="text-blue-600" />
          </div>
          <div className="absolute bottom-40 right-[25%] animate-float-delay opacity-10">
            <Triangle size={60} strokeWidth={1} className="text-violet-600" />
          </div>
          <div className="absolute top-[45%] right-[8%] animate-float-slow opacity-10">
            <Square size={50} strokeWidth={1} className="text-amber-600" />
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 w-full">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left: Text */}
            <div className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100 text-blue-600 text-xs font-bold mb-8">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                AI + EdTech + Embedded
              </div>

              <h1 className="text-4xl md:text-[3.5rem] font-extrabold leading-[1.15] mb-6 tracking-tight">
                기술의 경계를 넘어,
                <br />
                <span className="bg-gradient-to-r from-blue-600 via-violet-600 to-blue-600 bg-clip-text text-transparent animate-gradient">
                  새로운 지능
                </span>
                을 설계합니다.
              </h1>

              <p className="text-lg text-gray-500 mb-10 leading-relaxed">
                XYL은 인공지능과 교육 공학, 임베디드 기술을 융합하여
                세상을 연결하는 지능형 솔루션을 만듭니다.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <button className="group flex items-center justify-center gap-2 bg-gray-900 text-white px-7 py-4 rounded-2xl font-semibold text-[15px] hover:bg-blue-600 transition-all cursor-pointer shadow-lg shadow-gray-900/10 hover:shadow-blue-600/25">
                  시작하기
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
                </button>
                <button className="group flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-700 px-7 py-4 rounded-2xl font-semibold text-[15px] hover:border-blue-300 hover:text-blue-600 transition-all cursor-pointer">
                  <Play size={16} className="text-blue-500" />
                  소개 영상 보기
                </button>
              </div>
            </div>

            {/* Right: Visual cards */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full aspect-square max-w-md mx-auto">
                {/* Main card */}
                <div className="absolute inset-[10%] bg-gradient-to-br from-blue-500 to-violet-600 rounded-3xl shadow-2xl shadow-blue-500/20 flex items-center justify-center animate-float">
                  <div className="text-center text-white">
                    <BrainCircuit size={64} className="mx-auto mb-4 opacity-90" />
                    <p className="text-lg font-bold">Intelligence</p>
                    <p className="text-sm opacity-70">Beyond Limits</p>
                  </div>
                </div>

                {/* Floating sub-cards */}
                <div className="absolute -top-2 -right-2 glass border border-white/50 rounded-2xl p-4 shadow-lg animate-float-delay">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
                      <Cpu size={20} className="text-amber-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">Edge AI</p>
                      <p className="text-[11px] text-gray-400">On-device</p>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-2 -left-2 glass border border-white/50 rounded-2xl p-4 shadow-lg animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                      <Languages size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gray-900">AI Tutor</p>
                      <p className="text-[11px] text-gray-400">Real-time</p>
                    </div>
                  </div>
                </div>

                <div className="absolute top-[15%] -left-6 glass border border-white/50 rounded-2xl px-4 py-3 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full" />
                    <p className="text-xs font-bold text-gray-700">98% 정확도</p>
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

      {/* ── Stats Section ── */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <Reveal key={i} delay={i} className="text-center">
                <p className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent mb-2">
                  <Counter end={stat.number} suffix={stat.suffix} />
                </p>
                <p className="text-sm text-gray-400 font-medium">{stat.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services Section (Interactive Tabs) ── */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">What We Do</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">XYL의 핵심 비즈니스</h2>
            </div>
          </Reveal>

          {/* Tab navigation */}
          <Reveal>
            <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center gap-3 mb-12">
              {services.map((service, i) => (
                <button
                  key={i}
                  onClick={() => setActiveService(i)}
                  className={`flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                    activeService === i
                      ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                      : 'bg-white border border-gray-200 text-gray-500 hover:border-gray-300'
                  }`}
                >
                  {service.icon}
                  <span className="hidden sm:inline">{service.title}</span>
                  <span className="sm:hidden text-xs">{service.subtitle}</span>
                </button>
              ))}
            </div>
          </Reveal>

          {/* Active service detail */}
          <div className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm">
            <div className="flex flex-col lg:flex-row">
              {/* Left: big visual */}
              <div className={`lg:w-2/5 bg-gradient-to-br ${services[activeService].gradient} p-12 flex flex-col justify-center items-center text-white min-h-[300px]`}>
                <div className="text-7xl mb-6">{services[activeService].image}</div>
                <h3 className="text-2xl font-bold mb-1">{services[activeService].title}</h3>
                <p className="text-white/70 text-sm">{services[activeService].subtitle}</p>
              </div>

              {/* Right: details */}
              <div className="lg:w-3/5 p-10 lg:p-12 flex flex-col justify-center">
                <p className="text-gray-500 text-lg leading-relaxed mb-8">
                  {services[activeService].description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {services[activeService].tags.map(tag => (
                    <span
                      key={tag}
                      className={`px-3 py-1.5 ${services[activeService].bg} ${services[activeService].text} rounded-lg text-xs font-semibold`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <button className={`inline-flex items-center gap-2 ${services[activeService].text} font-semibold hover:opacity-70 transition cursor-pointer`}>
                  자세히 알아보기 <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Convergence Value Section ── */}
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
                    <p className="text-sm font-medium text-gray-400 mb-2">Core Technology</p>
                    <h4 className="text-2xl font-bold mb-2">AI + Embedded<br/>융합 기술</h4>
                    <p className="text-gray-400 text-sm">온디바이스에서 구동되는 경량 AI</p>
                  </div>
                </Reveal>
                <Reveal delay={1}>
                  <div className="bg-blue-50 rounded-3xl p-6 aspect-square flex flex-col justify-between glow-blue">
                    <Languages size={32} className="text-blue-500" />
                    <div>
                      <p className="text-2xl font-extrabold text-blue-600">EdTech</p>
                      <p className="text-xs text-blue-400">AI 영어 교육</p>
                    </div>
                  </div>
                </Reveal>
                <Reveal delay={2}>
                  <div className="bg-violet-50 rounded-3xl p-6 aspect-square flex flex-col justify-between glow-violet">
                    <Cpu size={32} className="text-violet-500" />
                    <div>
                      <p className="text-2xl font-extrabold text-violet-600">HW</p>
                      <p className="text-xs text-violet-400">임베디드 디바이스</p>
                    </div>
                  </div>
                </Reveal>
              </div>
            </div>

            {/* Right: Text */}
            <div className="lg:w-1/2">
              <Reveal>
                <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-4">Our Vision</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 leading-tight tracking-tight">
                  기술의 <span className="text-blue-600">교차점</span>에서
                  <br />새로운 가치를 만듭니다.
                </h2>
                <p className="text-gray-500 text-lg mb-10 leading-relaxed">
                  단순히 소프트웨어만 만들지 않습니다. AI 엔진을 임베디드 칩에 최적화하여 탑재하고,
                  언어 학습자가 현실에서 즉각적인 피드백을 받을 수 있는 기술을 만듭니다.
                </p>
              </Reveal>

              <div className="space-y-4">
                {[
                  "온디바이스 AI 기반 실시간 영어 발음 교정",
                  "저전력 임베디드 환경에서의 경량 LLM 구동",
                  "데이터 기반의 개인 맞춤형 학습 알고리즘",
                  "하드웨어-소프트웨어 통합 에듀테크 디바이스"
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

      {/* ── Technology Section (Visual Grid) ── */}
      <section id="tech" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal>
            <div className="text-center mb-16">
              <p className="text-sm font-bold tracking-widest text-blue-600 uppercase mb-3">Technology Stack</p>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">우리가 다루는 기술</h2>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { name: "PyTorch", sub: "TensorFlow", desc: "딥러닝 모델 훈련", emoji: "🔥", color: "hover:border-orange-300 hover:bg-orange-50" },
              { name: "Edge AI", sub: "TinyML", desc: "온디바이스 AI 추론", emoji: "🤖", color: "hover:border-blue-300 hover:bg-blue-50" },
              { name: "ARM Cortex", sub: "RISC-V", desc: "임베디드 프로세서", emoji: "⚙️", color: "hover:border-green-300 hover:bg-green-50" },
              { name: "React", sub: "Next.js", desc: "프론트엔드 플랫폼", emoji: "⚛️", color: "hover:border-cyan-300 hover:bg-cyan-50" },
              { name: "ONNX Runtime", sub: "", desc: "크로스 플랫폼 배포", emoji: "📦", color: "hover:border-violet-300 hover:bg-violet-50" },
              { name: "Rust", sub: "C++", desc: "시스템 프로그래밍", emoji: "🦀", color: "hover:border-red-300 hover:bg-red-50" },
              { name: "WebRTC", sub: "WebSocket", desc: "실시간 양방향 통신", emoji: "🌐", color: "hover:border-emerald-300 hover:bg-emerald-50" },
              { name: "FPGA", sub: "ASIC", desc: "하드웨어 가속기", emoji: "💎", color: "hover:border-indigo-300 hover:bg-indigo-50" }
            ].map((tech, i) => (
              <Reveal key={i} delay={i % 4}>
                <div className={`p-5 bg-white border border-gray-100 rounded-2xl transition-all duration-300 group cursor-pointer ${tech.color}`}>
                  <div className="text-2xl mb-3">{tech.emoji}</div>
                  <h4 className="font-bold text-gray-900 text-[15px]">
                    {tech.name}
                    {tech.sub && <span className="text-gray-300 font-normal"> / {tech.sub}</span>}
                  </h4>
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
            {/* Decorative shapes */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 right-0 w-60 h-60 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3" />
            <div className="absolute top-10 right-10 opacity-10">
              <Sparkles size={100} className="text-white" />
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold mb-5 text-white relative z-10 tracking-tight">
              XYL과 함께<br />내일의 기술을 설계하세요
            </h2>
            <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto relative z-10">
              혁신적인 솔루션이 필요하시거나, XYL의 비전에 함께하고 싶은 파트너분들의 연락을 기다립니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center relative z-10">
              <button className="bg-white text-blue-700 px-8 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform cursor-pointer shadow-lg">
                프로젝트 문의하기
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all cursor-pointer">
                회사 소개서 받기
              </button>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── Footer ── */}
      <footer className="border-t border-gray-100 py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-14">
            <div className="col-span-2">
              <div className="flex items-center gap-2.5 mb-5">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-lg flex items-center justify-center font-bold text-white text-sm">X</div>
                <span className="text-lg font-extrabold">XYL <span className="text-sm font-medium text-gray-400">(엑슬리)</span></span>
              </div>
              <p className="text-gray-400 max-w-sm leading-relaxed text-[15px] mb-6">
                AI, 영어 교육, 임베디드 시스템의 융합을 통해 인류의 가능성을 확장하는 지능형 기술 전문 기업입니다.
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
                <li><a href="#" className="hover:text-gray-900 transition-colors">AI Solutions</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">EdTech</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Embedded</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Consulting</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-5 text-xs tracking-widest text-gray-900 uppercase">회사</h5>
              <ul className="space-y-3 text-gray-400 text-[15px]">
                <li><a href="#" className="hover:text-gray-900 transition-colors">회사 소개</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">채용</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">블로그</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">문의</a></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between pt-8 border-t border-gray-100 text-sm text-gray-400">
            <p>© 2025 XYL Inc. All rights reserved.</p>
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
