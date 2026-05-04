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
  Zap,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  Lightbulb,
  Rocket,
  TrendingUp
} from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const Logo = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Background */}
      <rect width="48" height="48" rx="12" fill={isDarkMode ? "#1e293b" : "#f1f5f9"} />
      
      {/* Left X */}
      <line x1="12" y1="12" x2="24" y2="24" stroke={isDarkMode ? "#10b981" : "#0891b2"} strokeWidth="3" strokeLinecap="round" />
      <line x1="24" y1="12" x2="12" y2="24" stroke={isDarkMode ? "#10b981" : "#0891b2"} strokeWidth="3" strokeLinecap="round" />
      
      {/* Right Y shape */}
      <line x1="30" y1="36" x2="24" y2="24" stroke={isDarkMode ? "#3b82f6" : "#06b6d4"} strokeWidth="3" strokeLinecap="round" />
      <line x1="36" y1="36" x2="24" y2="24" stroke={isDarkMode ? "#3b82f6" : "#06b6d4"} strokeWidth="3" strokeLinecap="round" />
      
      {/* Top accent dots */}
      <circle cx="13" cy="9" r="2.5" fill={isDarkMode ? "#f59e0b" : "#ec4899"} />
      <circle cx="35" cy="9" r="2.5" fill={isDarkMode ? "#f59e0b" : "#ec4899"} />
    </svg>
  );

  const services = [
    {
      title: "AI Solutions",
      description: "자체적인 딥러닝 모델을 통해 비즈니스 프로세스를 자동화하고 지능형 의사결정을 지원합니다.",
      icon: <BrainCircuit className="w-10 h-10 text-emerald-400" />,
      tags: ["Machine Learning", "NLP", "Computer Vision"]
    },
    {
      title: "Next-Gen EdTech",
      description: "AI 튜터와 실시간 상호작용하며 배우는 혁신적인 영어 교육 플랫폼을 제공합니다.",
      icon: <Languages className="w-10 h-10 text-blue-400" />,
      tags: ["AI Tutor", "Adaptive Learning", "ESL"]
    },
    {
      title: "Embedded Systems",
      description: "저전력/고효율 임베디드 설계를 통해 하드웨어와 소프트웨어의 완벽한 결합을 구현합니다.",
      icon: <Cpu className="w-10 h-10 text-indigo-400" />,
      tags: ["IoT", "Edge Computing", "Firmware"]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans overflow-hidden ${isDarkMode ? 'bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100' : 'bg-gradient-to-b from-blue-50 via-white to-blue-50 text-slate-900'}`}>
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none">
        <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[150px] animate-pulse ${isDarkMode ? 'bg-emerald-500/20' : 'bg-emerald-300/15'}`} />
        <div className={`absolute top-1/3 right-1/4 w-96 h-96 rounded-full blur-[150px] animate-pulse ${isDarkMode ? 'bg-blue-500/20' : 'bg-blue-300/15'}`} style={{animationDelay: '2s'}} />
        <div className={`absolute bottom-0 left-1/2 w-96 h-96 rounded-full blur-[150px] animate-pulse ${isDarkMode ? 'bg-purple-500/15' : 'bg-purple-300/15'}`} style={{animationDelay: '4s'}} />
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? (isDarkMode ? 'bg-slate-950/40' : 'bg-white/40') + ' backdrop-blur-2xl ' + (isDarkMode ? 'border-b border-emerald-500/10' : 'border-b border-blue-200/30') + ' py-3' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3 group cursor-pointer">
            <Logo />
            <span className={`text-2xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r ${isDarkMode ? 'from-emerald-400 via-blue-400 to-purple-400' : 'from-blue-600 via-cyan-500 to-purple-600'}`}>
              XYL
            </span>
          </div>

          {/* Desktop Menu */}
          <div className={`hidden md:flex items-center gap-12 text-sm font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
            <a href="#services" className={`${isDarkMode ? 'hover:text-emerald-400' : 'hover:text-blue-600'} transition-colors relative group`}>
              Services
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-r from-emerald-400 to-blue-400' : 'bg-gradient-to-r from-blue-600 to-cyan-500'}`} />
            </a>
            <a href="#about" className={`${isDarkMode ? 'hover:text-emerald-400' : 'hover:text-blue-600'} transition-colors relative group`}>
              About
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-r from-emerald-400 to-blue-400' : 'bg-gradient-to-r from-blue-600 to-cyan-500'}`} />
            </a>
            <a href="#tech" className={`${isDarkMode ? 'hover:text-emerald-400' : 'hover:text-blue-600'} transition-colors relative group`}>
              Technology
              <span className={`absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${isDarkMode ? 'bg-gradient-to-r from-emerald-400 to-blue-400' : 'bg-gradient-to-r from-blue-600 to-cyan-500'}`} />
            </a>
            
            {/* Theme Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-slate-200 hover:bg-slate-300'}`}
              title="Toggle theme"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            
            <button className={`bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white px-7 py-2.5 rounded-full transition-all font-bold cursor-pointer shadow-lg shadow-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/70 group`}>
              <span className="flex items-center gap-2">
                Contact
                <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Toggle & Theme */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              className={`px-3 py-2 rounded-full transition-all duration-300 ${isDarkMode ? 'bg-slate-800' : 'bg-slate-200'}`}
              title="Toggle theme"
            >
              {isDarkMode ? '🌙' : '☀️'}
            </button>
            <button className={`${isDarkMode ? 'text-slate-100' : 'text-slate-900'} cursor-pointer`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Content */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl p-6 flex flex-col gap-6 animate-slide-down ${isDarkMode ? 'bg-slate-900/80 border-b border-emerald-500/20' : 'bg-white/80 border-b border-blue-200/30'}`}>
            <a href="#services" className={`font-semibold transition-colors ${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-blue-600'}`} onClick={() => setIsMenuOpen(false)}>Services</a>
            <a href="#about" className={`font-semibold transition-colors ${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-blue-600'}`} onClick={() => setIsMenuOpen(false)}>About</a>
            <a href="#tech" className={`font-semibold transition-colors ${isDarkMode ? 'text-slate-300 hover:text-emerald-400' : 'text-slate-700 hover:text-blue-600'}`} onClick={() => setIsMenuOpen(false)}>Technology</a>
            <button className="bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-6 py-3 rounded-xl font-bold cursor-pointer hover:shadow-lg hover:shadow-emerald-500/50 transition-all">
              Contact Us
            </button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className={`inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-xl text-xs font-bold animate-pulse-soft ${isDarkMode ? 'border-emerald-500/30 bg-emerald-500/10 text-emerald-400' : 'border-blue-300/50 bg-blue-100/50 text-blue-700'}`}>
                <Sparkles size={16} className="animate-spin" style={{animationDuration: '3s'}} />
                <span>Next-Gen AI × EdTech × Hardware</span>
              </div>
              
              <div className="space-y-6">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-tight tracking-tighter">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-blue-300">
                    Transform
                  </span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                    Tomorrow
                  </span>
                  <br />
                  <span className="text-white">Today</span>
                </h1>
                
                <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
                  XYL은 인공지능, 교육 기술, 그리고 하드웨어의 완벽한 융합으로 세상을 연결하는 혁신적인 솔루션을 만듭니다.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all cursor-pointer shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-105">
                  시작하기
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </button>
                <button className="flex items-center justify-center gap-2 bg-slate-800/50 border-2 border-emerald-500/30 hover:border-emerald-500/60 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-800 transition-all cursor-pointer backdrop-blur-xl">
                  더 알아보기
                  <ChevronRight size={20} />
                </button>
              </div>

              <div className="flex items-center gap-8 pt-8 text-sm">
                <div className="space-y-1">
                  <div className="text-2xl font-black text-emerald-400">98%</div>
                  <div className="text-slate-500">Satisfaction Rate</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black text-blue-400">50+</div>
                  <div className="text-slate-500">Global Projects</div>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-black text-purple-400">10+</div>
                  <div className="text-slate-500">Tech Stack</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:w-1/2 relative">
              <div className="relative w-full h-96 lg:h-full">
                {/* 3D Cube-like effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-64 h-64 lg:w-96 lg:h-96">
                    {/* Floating cards */}
                    <div className="absolute top-0 left-0 w-40 h-32 bg-gradient-to-br from-emerald-500/30 to-emerald-600/20 rounded-2xl border border-emerald-500/50 backdrop-blur-xl p-6 shadow-2xl transform -rotate-6 hover:rotate-0 transition-all duration-500 group cursor-pointer">
                      <BrainCircuit className="w-12 h-12 text-emerald-400 mb-3" />
                      <h4 className="font-bold text-sm text-white">AI Engine</h4>
                      <p className="text-xs text-emerald-200 mt-1">Deep Learning</p>
                    </div>
                    <div className="absolute top-20 right-0 w-40 h-32 bg-gradient-to-br from-blue-500/30 to-blue-600/20 rounded-2xl border border-blue-500/50 backdrop-blur-xl p-6 shadow-2xl transform rotate-6 hover:rotate-0 transition-all duration-500 group cursor-pointer">
                      <Languages className="w-12 h-12 text-blue-400 mb-3" />
                      <h4 className="font-bold text-sm text-white">EdTech</h4>
                      <p className="text-xs text-blue-200 mt-1">Language Learning</p>
                    </div>
                    <div className="absolute bottom-0 left-8 w-40 h-32 bg-gradient-to-br from-purple-500/30 to-purple-600/20 rounded-2xl border border-purple-500/50 backdrop-blur-xl p-6 shadow-2xl transform -rotate-3 hover:rotate-0 transition-all duration-500 group cursor-pointer">
                      <Cpu className="w-12 h-12 text-purple-400 mb-3" />
                      <h4 className="font-bold text-sm text-white">Hardware</h4>
                      <p className="text-xs text-purple-200 mt-1">Embedded Systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-bold">
              <Lightbulb size={14} />
              <span>Our Expertise</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-emerald-300 to-blue-300">
                Core Services
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">XYL의 세 가지 핵심 기술 영역이 만나는 곳에서 혁신이 시작됩니다.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="group relative overflow-hidden"
              >
                {/* Gradient border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl" />
                
                <div className="relative p-8 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-3xl backdrop-blur-xl hover:border-emerald-500/50 transition-all duration-500 h-full group-hover:translate-y-0 transform">
                  <div className="mb-8 p-4 bg-gradient-to-br from-slate-700 to-slate-800 rounded-2xl inline-block group-hover:scale-125 transition-transform duration-500 shadow-xl">
                    <div className="text-3xl">{service.icon}</div>
                  </div>
                  
                  <h3 className="text-2xl font-black mb-4 text-white">{service.title}</h3>
                  <p className="text-slate-300 mb-8 leading-relaxed text-base">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-slate-700/50 hover:bg-emerald-500/30 rounded-lg text-xs text-slate-300 font-mono uppercase tracking-wider transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-sm font-bold text-emerald-400 hover:text-emerald-300 group/btn transition-colors cursor-pointer">
                    Learn More 
                    <ChevronRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Convergence Value Section */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 relative">
              {/* Animated 3D Grid */}
              <div className="relative z-10 grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="h-48 bg-gradient-to-br from-emerald-500/40 to-emerald-700/30 rounded-3xl flex items-end p-8 border border-emerald-500/30 backdrop-blur-xl hover:border-emerald-500/60 transition-all duration-500 cursor-pointer group">
                    <span className="text-3xl font-black text-white group-hover:translate-x-2 transition-transform">AI</span>
                  </div>
                  <div className="h-64 bg-slate-800/40 rounded-3xl border border-slate-700/50 flex items-center justify-center hover:border-blue-500/50 transition-all duration-500 backdrop-blur-xl group">
                    <Languages size={80} className="text-blue-400 opacity-30 group-hover:opacity-50 transition-opacity" />
                  </div>
                </div>
                <div className="space-y-6 pt-12">
                  <div className="h-64 bg-slate-800/40 rounded-3xl border border-slate-700/50 flex items-center justify-center hover:border-purple-500/50 transition-all duration-500 backdrop-blur-xl group">
                    <Cpu size={80} className="text-purple-400 opacity-30 group-hover:opacity-50 transition-opacity" />
                  </div>
                  <div className="h-48 bg-gradient-to-br from-blue-500/40 to-indigo-700/30 rounded-3xl flex items-end p-8 border border-blue-500/30 backdrop-blur-xl hover:border-blue-500/60 transition-all duration-500 cursor-pointer group">
                    <span className="text-3xl font-black text-white group-hover:translate-x-2 transition-transform">Hardware</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-4">
                <h2 className="text-5xl md:text-6xl font-black leading-tight">
                  기술의 <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">교차점</span>에서 <br />새로운 가치 창출
                </h2>
              </div>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                XYL은 단순한 소프트웨어 기업이 아닙니다. AI 엔진을 임베디드 칩에 최적화하여 탑재하고, 이를 통해 사용자가 현실에서 즉각적인 피드백을 받을 수 있는 '실체 있는 기술'을 지향합니다.
              </p>
              
              <ul className="space-y-4">
                {[
                  { title: "온디바이스 AI", desc: "실시간 영어 발음 교정" },
                  { title: "경량 LLM", desc: "저전력 환경에서의 최적화" },
                  { title: "개인화 학습", desc: "데이터 기반의 맞춤 알고리즘" },
                  { title: "통합 솔루션", desc: "하드웨어-소프트웨어 완벽한 결합" }
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 group cursor-pointer">
                    <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-emerald-500 to-blue-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 mt-1">
                      <CheckCircle2 className="text-white" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-slate-400 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <button className="group flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all cursor-pointer shadow-lg shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-105 mt-8">
                자세히 알아보기
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="tech" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold">
              <Zap size={14} />
              <span>Tech Stack</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-purple-300">
                우리의 기술
              </span>
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">최고의 기술 스택으로 혁신적인 솔루션을 구현합니다.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "PyTorch / TensorFlow", desc: "딥러닝 모델 훈련 및 최적화", icon: "🤖" },
              { name: "Edge AI / TinyML", desc: "온디바이스 AI 추론 엔진", icon: "⚡" },
              { name: "ARM Cortex / RISC-V", desc: "임베디드 프로세서 설계", icon: "🔧" },
              { name: "React / Next.js", desc: "교육 플랫폼 프론트엔드", icon: "⚛️" },
              { name: "ONNX Runtime", desc: "크로스 플랫폼 모델 배포", icon: "🌐" },
              { name: "Rust / C++", desc: "고성능 시스템 프로그래밍", icon: "💻" },
              { name: "WebRTC / WebSocket", desc: "실시간 양방향 통신", icon: "📡" },
              { name: "FPGA / ASIC", desc: "커스텀 하드웨어 가속기", icon: "🎛️" }
            ].map((tech, i) => (
              <div 
                key={i} 
                className="group relative overflow-hidden h-full"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                
                <div className="relative p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 rounded-2xl backdrop-blur-xl hover:border-blue-500/50 transition-all duration-500 h-full group-hover:translate-y-0 transform">
                  <div className="text-4xl mb-3 transform group-hover:scale-125 transition-transform duration-300">{tech.icon}</div>
                  <h4 className="font-bold text-white mb-2 group-hover:text-blue-300 transition-colors text-sm">{tech.name}</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[150px] animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[150px] animate-pulse" style={{animationDelay: '2s'}} />
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/50 via-blue-600/50 to-purple-600/50 rounded-[3rem] opacity-75 blur-xl" />
            
            <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 rounded-[3rem] p-12 md:p-20 text-center border border-slate-700/50 backdrop-blur-xl">
              <Rocket size={80} className="mx-auto mb-8 text-emerald-400 opacity-40" />
              
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400">
                  XYL과 함께 내일을 만들어보세요
                </span>
              </h2>
              
              <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                혁신적인 솔루션이 필요하시거나, XYL의 비전에 함께하고 싶은 파트너분들의 연락을 기다립니다.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-500 to-blue-600 hover:from-emerald-400 hover:to-blue-500 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all cursor-pointer shadow-2xl shadow-emerald-500/50 hover:shadow-emerald-500/70 hover:scale-105">
                  프로젝트 문의하기
                  <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </button>
                <button className="flex items-center justify-center gap-2 bg-slate-800/50 border-2 border-slate-600 hover:border-blue-500/60 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all cursor-pointer backdrop-blur-xl">
                  더 알아보기
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50 py-16 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-blue-600 rounded-xl flex items-center justify-center font-bold text-lg text-white shadow-lg">
                  X
                </div>
                <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-blue-400">
                  XYL
                </span>
              </div>
              <p className="text-slate-400 max-w-md leading-relaxed mb-6">
                XYL은 AI, 영어 교육, 임베디드 시스템의 완벽한 융합을 통해 인류의 가능성을 확장하는 혁신 기술 기업입니다.
              </p>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group">
                  <Github size={20} className="text-slate-400 group-hover:text-white" />
                </div>
                <div className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group">
                  <Mail size={20} className="text-slate-400 group-hover:text-white" />
                </div>
                <div className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-br hover:from-emerald-500 hover:to-blue-600 rounded-lg flex items-center justify-center transition-all duration-300 cursor-pointer group">
                  <ExternalLink size={20} className="text-slate-400 group-hover:text-white" />
                </div>
              </div>
            </div>
            
            <div>
              <h5 className="font-bold mb-8 uppercase text-xs tracking-widest text-slate-300">Navigation</h5>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors font-semibold">Home</a></li>
                <li><a href="#services" className="hover:text-emerald-400 transition-colors font-semibold">Services</a></li>
                <li><a href="#about" className="hover:text-emerald-400 transition-colors font-semibold">About</a></li>
                <li><a href="#tech" className="hover:text-emerald-400 transition-colors font-semibold">Technology</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-bold mb-8 uppercase text-xs tracking-widest text-slate-300">Resources</h5>
              <ul className="space-y-4 text-slate-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors font-semibold">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors font-semibold">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors font-semibold">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors font-semibold">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800/50 text-sm text-slate-500 gap-4">
            <p>© 2025 XYL Inc. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-slate-300 transition-colors font-semibold">Privacy Policy</a>
              <a href="#" className="hover:text-slate-300 transition-colors font-semibold">Terms of Service</a>
              <a href="#" className="hover:text-slate-300 transition-colors font-semibold">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
