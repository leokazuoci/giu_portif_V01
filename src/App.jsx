import React, { useState, useEffect, useRef } from 'react';

/* --- ÍCONES INLINE (DEFINIÇÃO MANUAL PARA EVITAR ERROS DE IMPORTAÇÃO) --- */
/* Removemos o import de 'lucide-react' para não conflitar com estas definições */

const Icon = ({ children, size = 24, className = "", ...props }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>{children}</svg>
);
const Menu = (props) => <Icon {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></Icon>;
const X = (props) => <Icon {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></Icon>;
const Linkedin = (props) => <Icon {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></Icon>;
const Mail = (props) => <Icon {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></Icon>;
const ArrowRight = (props) => <Icon {...props}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></Icon>;
const ArrowLeft = (props) => <Icon {...props}><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></Icon>;
const ExternalLink = (props) => <Icon {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></Icon>;
const BookOpen = (props) => <Icon {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></Icon>;
const Briefcase = (props) => <Icon {...props}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></Icon>;
const User = (props) => <Icon {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></Icon>;
const Award = (props) => <Icon {...props}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></Icon>;
const ChevronDown = (props) => <Icon {...props}><path d="m6 9 6 6 6-6"/></Icon>;
const Globe = (props) => <Icon {...props}><circle cx="12" cy="12" r="10"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/><path d="M2 12h20"/></Icon>;
const Zap = (props) => <Icon {...props}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></Icon>;
const Layout = (props) => <Icon {...props}><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><line x1="3" x2="21" y1="9" y2="9"/><line x1="9" x2="9" y1="21" y2="9"/></Icon>;
const Cpu = (props) => <Icon {...props}><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="9" y="9" width="6" height="6"/><path d="M15 2v2"/><path d="M15 20v2"/><path d="M2 15h2"/><path d="M2 9h2"/><path d="M20 15h2"/><path d="M20 9h2"/><path d="M9 2v2"/><path d="M9 20v2"/></Icon>;
const ChevronRight = (props) => <Icon {...props}><path d="m9 18 6-6-6-6"/></Icon>;
const Calendar = (props) => <Icon {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></Icon>;
const RefreshCw = (props) => <Icon {...props}><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></Icon>;
const Lightbulb = (props) => <Icon {...props}><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></Icon>;
const MessageSquare = (props) => <Icon {...props}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></Icon>;
const Send = (props) => <Icon {...props}><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></Icon>;
const Loader2 = (props) => <Icon {...props}><path d="M21 12a9 9 0 1 1-6.219-8.56"/></Icon>;
const Sparkles = (props) => <Icon {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M9 5H5"/><path d="M3 5h2"/></Icon>;
const Target = (props) => <Icon {...props}><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></Icon>;
const Database = (props) => <Icon {...props}><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></Icon>;
const Users = (props) => <Icon {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></Icon>;
const TrendingUp = (props) => <Icon {...props}><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></Icon>;
const CheckCircle = (props) => <Icon {...props}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></Icon>;
const MoveRight = (props) => <Icon {...props}><path d="M18 8L22 12L18 16" /><path d="M2 12H22" /></Icon>;
const Brain = (props) => <Icon {...props}><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></Icon>;
const BarChart = (props) => <Icon {...props}><line x1="12" x2="12" y1="20" y2="10"/><line x1="18" x2="18" y1="20" y2="4"/><line x1="6" x2="6" y1="20" y2="16"/></Icon>;
const Workflow = (props) => <Icon {...props}><rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/></Icon>;

/* --- ESTILOS GLOBAIS BLINDADOS --- */
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap');
    
    html, body, #root {
      width: 100% !important;
      max-width: 100% !important;
      min-height: 100vh !important;
      margin: 0 !important;
      padding: 0 !important;
      overflow-x: hidden !important;
      display: block !important;
    }

    body {
      font-family: 'Outfit', sans-serif;
      background-color: #f4f3e1;
      color: #423b2c;
    }
    
    h1, h2, h3, h4, .font-heading {
      font-family: 'Outfit', sans-serif;
    }

    /* Container Centralizado Personalizado */
    .custom-container {
      width: 100%;
      max-width: 1280px; 
      margin-left: auto;
      margin-right: auto;
      padding-left: 1.5rem;
      padding-right: 1.5rem;
    }

    .hide-scrollbar::-webkit-scrollbar {
      display: none;
    }
    .hide-scrollbar {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    
    .glass-bg-base {
      background: radial-gradient(circle at 10% 20%, rgba(240, 203, 86, 0.15) 0%, transparent 40%),
                  radial-gradient(circle at 90% 80%, rgba(59, 95, 92, 0.1) 0%, transparent 40%),
                  radial-gradient(circle at 50% 50%, rgba(186, 71, 68, 0.05) 0%, transparent 60%);
    }

    .glass-panel {
      background: rgba(255, 255, 255, 0.25);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.5);
      box-shadow: 0 8px 32px 0 rgba(66, 59, 44, 0.05);
    }
    
    .glass-panel-dark {
      background: rgba(66, 59, 44, 0.05);
      backdrop-filter: blur(12px);
      -webkit-backdrop-filter: blur(12px);
      border: 1px solid rgba(66, 59, 44, 0.1);
    }
  `}</style>
);

// --- GEMINI API CONFIG ---
const apiKey = ""; 

// --- CONTEÚDO ---
const translations = {
  pt: {
    nav: { about: 'Sobre', experience: 'Experiência', cases: 'Cases', skills: 'Skills', articles: 'Artigos', contact: 'Contato', mobileCta: 'Fale Comigo' },
    intro: {
      tag: 'IA Product Manager',
      title: 'Olá, eu sou a Giuliette.',
      subtitle: 'Construo soluções digitais com empatia, estratégia e foco em impacto real.',
      aboutP1: 'Sou IA Product Manager com mais de 8 anos de experiência unindo visão de negócio e inteligência artificial para criar produtos que fazem sentido.',
      aboutP2: 'Tenho perfil analítico, comunicativo e orientado a resultados. Busco desafios em times globais que conectem tecnologia, pessoas e impacto de verdade.',
      ctaWork: 'Ver meus Cases',
      ctaContact: 'Vamos conversar?',
      statExp: 'Experiência',
      statEng: 'Inglês',
      profileImage: "https://i.imgur.com/sQGxunz.jpeg"
    },
    experience: {
      title: 'Minha Jornada',
      subtitle: 'Liderança e aprendizado contínuo.',
      readMore: 'Ver detalhes',
      close: 'Fechar',
      items: [
        { id: 1, year: "2024 - Hoje", company: "Bradesco", role: "PM | Hub de Soluções", period: "Set 2024 - Presente", details: ["Liderei a construção de um orquestrador de pagamentos B2B em parceria com uma big tech.", "Implementei e priorizei backlog técnico e funcional.", "Conduzi análise de mercado e benchmark para definição de KPIs."] },
        { id: 2, year: "2024", company: "Bradesco", role: "PM | Produto Cobrança", period: "Jul 2024 - Set 2024", details: ["Liderança do lançamento do produto DDA B2B na plataforma Global Solutions.", "Estruturei roadmap e backlog com foco em UX.", "Product Discovery e facilitação de decisões estratégicas."] },
        { id: 3, year: "2023 - 2024", company: "Bradesco", role: "PM | Inovação", period: "Ago 2023 - Set 2024", details: ["Desenvolvi soluções de inovação digital para folha de pagamento.", "Utilizei SCRUM para conduzir projetos alinhados aos OKRs.", "Apresentei defesas de projeto com projeção de ROI."] },
        { id: 4, year: "2021 - 2023", company: "banQi", role: "Product Manager", period: "2021 - 2023", details: ["Gestão do ciclo de vida do produto em fintech de inclusão financeira."] },
        { id: 5, year: "2018 - 2021", company: "DiDi (99)", role: "Analista/PM", period: "2018 - 2021", details: ["Atuação em times globais focada em eficiência operacional e produto."] }
      ]
    },
    cases: {
      title: 'Cases Selecionados',
      subtitle: <>Problemas reais,<br/>soluções estratégicas<br/>e resultados mensuráveis.</>,
      readCase: 'Ler Case',
      items: [
        { 
          title: "Nadia: Assistente Financeira", 
          category: "Fintech", 
          image: "https://miro.medium.com/v2/resize:fit:4000/format:webp/1*NVSoWTwAUaekoEajLXIK0g.png", 
          link: "https://medium.com/@giu.bortoletto/nadia-case-de-produto-d445589a4f69", 
          challenge: "Simplificar a gestão financeira para usuários desbancarizados.", 
          solution: "Chatbot humanizado que traduz dados em dicas.", 
          result: "Engajamento diário recorde.", 
          bigNumbers: ["+45% Engajamento", "-20% Suporte", "4.8 Rating"] 
        },
        { 
          title: "App Academia PM Fit", 
          category: "HealthTech", 
          image: "https://miro.medium.com/v2/resize:fit:4000/format:webp/1*KkUsJWfBI2AIz-z2jygZuA.png", 
          link: "https://medium.com/@giu.bortoletto/app-academia-pm-fit-case-de-produto-9749eef5cc8b", 
          challenge: "Reduzir churn de alunos nos primeiros 30 dias.", 
          solution: "Gamificação e planos de treino adaptativos.", 
          result: "Increased retention and LTV.", 
          bigNumbers: ["+30% Retenção", "+15% LTV", "90 NPS"] 
        },
        { 
          // Este é o case interno simulado
          title: "Athena AI: Otimização de Atendimento", 
          category: "AI & CS", 
          isInternal: true, // Flag para indicar navegação interna
          internalRoute: 'case-athena',
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
          challenge: "Escalar o atendimento ao cliente sem aumentar custos operacionais.", 
          solution: "Implementação de LLMs para triagem e resolução automática.", 
          result: "Redução drástica no TMA e aumento do CSAT.", 
          bigNumbers: ["60% Deflexão", "+20 NPS", "-30% Custos"] 
        }
      ]
    },
    skills: {
      hardTitle: 'Stack & Ferramentas',
      softTitle: 'Soft Skills',
      hardCategories: [
        { id: 'strategy', name: 'Estratégia', icon: Target, skills: ["Product Strategy", "Discovery", "User Research", "Roadmap"] },
        { id: 'tech', name: 'IA & Dados', icon: Database, skills: ["AI Product Mgmt", "Data Analysis", "KPIs & Metrics", "Python Basics"] },
        { id: 'execution', name: 'Execution', icon: Users, skills: ["Agile/Scrum", "Stakeholders", "Backlog", "Jira/Confluence"] }
      ],
      softList: [
        { title: "Adaptabilidade", desc: "Fluidez para atuar de startups a corporações." },
        { title: "Comunicação", desc: "Tradução de 'technês' para negócios." },
        { title: "Visão Sistêmica", desc: "Conexão do micro ao macro negócio." }
      ]
    },
    articles: {
      title: 'Artigos',
      linkText: 'Medium Profile',
      readFull: 'Ler',
      items: [
        { title: "E se pensar produto fosse pensar lugar?", source: "Mulheres de Produto", date: "Jul 2025", summary: "Produtos digitais como espaços acolhedores.", link: "https://medium.com/mulheres-de-produto/e-se-pensar-produto-fosse-pensar-lugar-823466ab0b93" },
        { title: "Métricas de CX úteis em Produto", source: "Mulheres de Produto", date: "Jul 2024", summary: "NPS, CSAT, CES guiando o backlog.", link: "https://medium.com/mulheres-de-produto/m%C3%A9tricas-de-cx-%C3%BAteis-em-produto-12860b8543d3" },
        { title: "Se o roadmap é um mapa...", source: "PM3 Blog", date: "Ago 2025", summary: "Construção colaborativa de roadmaps.", link: "https://pm3.com.br/blog/roadmap/" },
        { title: "Meus primeiros meses de PM", source: "Medium", date: "Set 2023", summary: "Desafios e aprendizados iniciais.", link: "https://medium.com/@giu.bortoletto/meus-primeiros-meses-em-um-time-de-produto-b448bd9040f4" },
        { title: "Migração de carreira para produto", source: "Medium", date: "Set 2023", summary: "Estrutura de estudos e networking.", link: "https://medium.com/@giu.bortoletto/meu-processo-de-migra%C3%A7%C3%A3o-de-carreira-para-produto-8aabae0fe6a0" },
        { title: "3 métricas de CX que eu adoro", source: "Medium", date: "Out 2023", summary: "Indicadores essenciais para PMs.", link: "https://medium.com/@giu.bortoletto/3-m%C3%A9tricas-de-cx-que-eu-adoro-fd6c660201c4" }
      ]
    },
    footer: { title: 'Vamos conversar?', text: 'Aberta a oportunidades globais.', btnContact: 'Email', copyright: '© 2025 Giuliette Bortoletto' }
  },
  en: {
    nav: { about: 'About', experience: 'Experience', cases: 'Cases', skills: 'Skills', articles: 'Articles', contact: 'Contact', mobileCta: 'Let\'s Talk' },
    intro: {
      tag: 'AI Product Manager',
      title: 'Hi, I\'m Giuliette.',
      subtitle: 'Building digital solutions with empathy, strategy, and real impact.',
      aboutP1: 'I am an AI Product Manager with over 8 years in digital products, leveraging data and AI.',
      aboutP2: 'I have an analytical, communicative, and results-oriented profile. I seek challenges in global teams connecting tech, people, and impact.',
      ctaWork: 'View Cases',
      ctaContact: 'Let\'s Talk',
      statExp: 'Experience',
      statEng: 'English',
      profileImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    experience: {
      title: 'My Journey',
      subtitle: 'A timeline of leadership and learning.',
      readMore: 'View Details',
      close: 'Close',
      items: [
        { id: 1, year: "2024 - Today", company: "Bradesco", role: "PM | Solutions Hub", period: "Sep 2024 - Present", details: ["Led B2B payment orchestrator with big tech.", "Prioritized technical/functional backlog.", "Market analysis and strategic KPIs."] },
        { id: 2, year: "2024", company: "Bradesco", role: "PM | Billing Product", period: "Jul 2024 - Sep 2024", details: ["Led B2B DDA launch on Global Solutions.", "Structured UX-focused roadmap.", "Product Discovery and strategic decisions."] },
        { id: 3, year: "2023 - 2024", company: "Bradesco", role: "PM | Innovation", period: "Aug 2023 - Sep 2024", details: ["Digital innovation for payroll/taxes.", "SCRUM for OKR-aligned projects.", "Project ROI projection."] },
        { id: 4, year: "2021 - 2023", company: "banQi", role: "Product Manager", period: "2021 - 2023", details: ["Product lifecycle management in fintech."] },
        { id: 5, year: "2018 - 2021", company: "DiDi (99)", role: "Analyst/PM", period: "2018 - 2021", details: ["Global teams, operational efficiency."] }
      ]
    },
    cases: {
      title: 'Selected Cases',
      subtitle: <>Real problems,<br/>strategic solutions,<br/>measurable results.</>,
      readCase: 'Read Case',
      items: [
        { title: "Nadia: Financial Assistant", category: "Fintech", image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", link: "https://medium.com/@giu.bortoletto/nadia-case-de-produto-d445589a4f69", challenge: "Simplifying finance for unbanked users.", solution: "Humanized chatbot translating data.", result: "Record daily engagement.", bigNumbers: ["+45% Engagement", "-20% Support", "4.8 Rating"] },
        { title: "App Academia PM Fit", category: "HealthTech", image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", link: "https://medium.com/@giu.bortoletto/app-academia-pm-fit-case-de-produto-9749eef5cc8b", challenge: "Reducing churn in first 30 days.", solution: "Gamification and adaptive plans.", result: "Increased retention and LTV.", bigNumbers: ["+30% Retention", "+15% LTV", "90 NPS"] },
        { 
          title: "Athena AI: Support Optimization", 
          category: "AI & CS", 
          isInternal: true, 
          internalRoute: 'case-athena',
          image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", 
          challenge: "Scaling customer support without increasing operational costs.", 
          solution: "LLM implementation for triage and automated resolution.", 
          result: "Drastic reduction in AHT and increased CSAT.", 
          bigNumbers: ["60% Deflection", "+20 NPS", "-30% Costs"] 
        }
      ]
    },
    skills: {
      hardTitle: 'Stack & Tools',
      softTitle: 'Soft Skills',
      hardCategories: [
        { id: 'strategy', name: 'Strategy', icon: Target, skills: ["Product Strategy", "Discovery", "User Research", "Roadmap"] },
        { id: 'tech', name: 'AI & Data', icon: Database, skills: ["AI Product Mgmt", "Data Analysis", "KPIs & Metrics", "Python Basics"] },
        { id: 'execution', name: 'Execution', icon: Users, skills: ["Agile/Scrum", "Stakeholders", "Backlog", "Jira/Confluence"] }
      ],
      softList: [
        { title: "Adaptability", desc: "Fluidity from startups to corps." },
        { title: "Communication", desc: "Translating 'tech' to business." },
        { title: "Systemic Vision", desc: "Connecting micro to macro." }
      ]
    },
    articles: {
      title: 'Articles',
      linkText: 'Medium Profile',
      readFull: 'Read',
      items: [
        { title: "What if thinking product meant thinking place?", source: "Mulheres de Produto", date: "Jul 2025", summary: "Digital products as welcoming spaces.", link: "https://medium.com/mulheres-de-produto/e-se-pensar-produto-fosse-pensar-lugar-823466ab0b93" },
        { title: "CX Metrics Useful in Product", source: "Mulheres de Produto", date: "Jul 2024", summary: "NPS, CSAT, CES guiding backlog.", link: "https://medium.com/mulheres-de-produto/m%C3%A9tricas-de-cx-%C3%BAteis-em-produto-12860b8543d3" },
        { title: "If the roadmap is a map...", source: "PM3 Blog", date: "Aug 2025", summary: "Collaborative roadmap building.", link: "https://pm3.com.br/blog/roadmap/" },
        { title: "My first months as PM", source: "Medium", date: "Sep 2023", summary: "Initial challenges and learnings.", link: "https://medium.com/@giu.bortoletto/meus-primeiros-meses-em-um-time-de-produto-b448bd9040f4" },
        { title: "Career transition to product", source: "Medium", date: "Sep 2023", summary: "Study structure and networking.", link: "https://medium.com/@giu.bortoletto/meu-processo-de-migra%C3%A7%C3%A3o-de-carreira-para-produto-8aabae0fe6a0" },
        { title: "3 CX metrics I love", source: "Medium", date: "Oct 2023", summary: "Essential indicators for PMs.", link: "https://medium.com/@giu.bortoletto/3-m%C3%A9tricas-de-cx-que-eu-adoro-fd6c660201c4" }
      ]
    },
    footer: { title: 'Let\'s Talk?', text: 'Open to global opportunities.', btnContact: 'Email', copyright: '© 2025 Giuliette Bortoletto' }
  }
};

/* --- CASE STUDY PAGE COMPONENT --- */
const CaseStudyPage = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f4f3e1] text-[#423b2c] animate-in slide-in-from-right-10 fade-in duration-500">
      
      {/* Header com Navegação */}
      <nav className="fixed top-0 left-0 w-full z-50 py-6 px-6 glass-panel-dark border-b border-[#3b5f5c]/10">
        <div className="custom-container flex justify-between items-center">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-[#3b5f5c] hover:text-[#ba4744] font-bold transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
              <ArrowLeft size={20} />
            </div>
            <span className="hidden md:inline">Voltar para Home</span>
          </button>
          
          <div className="text-sm font-bold uppercase tracking-widest text-[#423b2c]/50">Case Study: Athena</div>
        </div>
      </nav>

      {/* Hero do Case */}
      <header className="pt-40 pb-20 px-6 relative overflow-hidden">
        <div className="custom-container relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3b5f5c] text-white text-xs font-bold tracking-widest uppercase mb-8 shadow-lg">
            <Sparkles size={14} /> AI & Customer Success
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-[#423b2c] mb-8 leading-tight">
            Athena AI: Otimização de Atendimento
          </h1>
          
          <div className="flex flex-wrap gap-4 mb-12">
            {['LLM', 'Python', 'RAG', 'Zendesk API'].map(tag => (
              <span key={tag} className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-[#423b2c]/70 border border-[#423b2c]/10">
                {tag}
              </span>
            ))}
          </div>

          <div className="aspect-video w-full rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80" 
              className="w-full h-full object-cover" 
              alt="Athena AI Dashboard" 
            />
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="pb-32 px-6">
        <div className="custom-container max-w-5xl mx-auto space-y-24">
          
          {/* Seção 1: Contexto e Desafio */}
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-[#ba4744] flex items-center gap-3">
                <Target size={28} /> O Desafio
              </h2>
              <p className="text-lg text-[#423b2c]/80 leading-relaxed">
                A empresa enfrentava um crescimento exponencial de usuários, o que sobrecarregou o time de suporte. 
                O Tempo Médio de Atendimento (TMA) subiu para 48 horas e o NPS caiu 15 pontos. 
                Precisávamos escalar o atendimento sem triplicar o quadro de funcionários.
              </p>
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-[#423b2c]/5">
              <h3 className="font-bold text-[#423b2c] mb-4">Métricas Iniciais</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-500">TMA</span>
                  <span className="font-bold text-red-500">48h (Alto)</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-100 pb-2">
                  <span className="text-gray-500">Backlog</span>
                  <span className="font-bold text-red-500">2.5k tickets</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-500">NPS</span>
                  <span className="font-bold text-yellow-500">45 (Neutro)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Seção 2: A Solução */}
          <div className="glass-panel p-10 md:p-16 rounded-[3rem] bg-white/40">
            <h2 className="text-4xl font-bold mb-12 text-[#3b5f5c] text-center flex items-center justify-center gap-3">
              <Brain size={32} /> A Solução: Athena
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-[#f0cb56]">
                  <Database size={32} />
                </div>
                <h4 className="font-bold text-xl mb-3">Base de Conhecimento</h4>
                <p className="text-sm text-[#423b2c]/70">Centralização de FAQs, manuais e histórico de tickets em um Vector Database.</p>
              </div>
              
              <div className="text-center">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-[#3b5f5c]">
                  <Cpu size={32} />
                </div>
                <h4 className="font-bold text-xl mb-3">Motor RAG</h4>
                <p className="text-sm text-[#423b2c]/70">Recuperação de contexto relevante + GPT-4 para gerar respostas precisas e empáticas.</p>
              </div>
              
              <div className="text-center">
                 <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-md text-[#ba4744]">
                  <Workflow size={32} />
                </div>
                <h4 className="font-bold text-xl mb-3">Human-in-the-loop</h4>
                <p className="text-sm text-[#423b2c]/70">Casos complexos ou de sentimento negativo são roteados imediatamente para humanos.</p>
              </div>
            </div>
          </div>

          {/* Seção 3: Resultados */}
          <div>
            <h2 className="text-3xl font-bold mb-10 text-[#423b2c] flex items-center gap-3">
              <TrendingUp size={28} /> Impacto Gerado
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { label: 'Deflexão Automática', value: '60%', color: 'text-[#3b5f5c]' },
                { label: 'Aumento NPS', value: '+20 pts', color: 'text-[#f0cb56]' },
                { label: 'Redução de Custos', value: '-30%', color: 'text-[#ba4744]' },
                { label: 'Tempo de Resposta', value: '< 2min', color: 'text-[#423b2c]' },
              ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-2xl shadow-sm text-center border border-[#423b2c]/5 hover:scale-105 transition-transform">
                  <p className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color}`}>{stat.value}</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action Final */}
          <div className="text-center pt-10">
            <p className="text-xl text-[#423b2c]/70 mb-6 max-w-2xl mx-auto">
              Este projeto demonstrou como a IA generativa pode sair do hype e gerar valor tangível para o negócio e para o cliente.
            </p>
            <button 
              onClick={onBack}
              className="bg-[#3b5f5c] text-white px-10 py-4 rounded-full font-bold hover:bg-[#2a4543] transition-colors shadow-xl"
            >
              Voltar para o Portfólio
            </button>
          </div>

        </div>
      </main>
    </div>
  );
};


/* --- CHATBOT IA COMPONENT --- */
const AIChatAssistant = ({ contextData, lang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'assistant', text: lang === 'pt' ? 'Olá! Sou o Digital Twin da Giuliette. Pergunte-me sobre sua carreira!' : 'Hi! I am Giuliette\'s Digital Twin. Ask me about her career!' }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }), [messages, isOpen]);

  const handleSendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = input;
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setInput('');
    setIsLoading(true);
    try {
      const safeContext = {
        nav: contextData.nav,
        intro: {
          ...contextData.intro,
          aboutP1: lang === 'pt' ? "Sou IA Product Manager experiente em produtos digitais e inteligência artificial." : "I am an AI Product Manager experienced in digital products and artificial intelligence.",
        },
        experience: contextData.experience,
        cases: {
          ...contextData.cases,
          subtitle: lang === 'pt' ? "Problemas reais, soluções estratégicas e resultados mensuráveis." : "Real problems, strategic solutions, measurable results.",
        },
        skills: contextData.skills,
        articles: contextData.articles,
      };

      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: `Você é a assistente virtual de Giuliette Bortoletto. Contexto: ${JSON.stringify(safeContext)}. Responda a: ${userMessage}` }] }] })
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: 'assistant', text: data.candidates?.[0]?.content?.parts?.[0]?.text || "Erro ao processar." }]);
    } catch (error) { setMessages(prev => [...prev, { role: 'assistant', text: "Erro de conexão." }]); }
    finally { setIsLoading(false); }
  };

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="fixed bottom-6 right-6 z-50 bg-[#3b5f5c] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform duration-300 border border-[#f4f3e1] glass-panel bg-[#3b5f5c]/90">
        {isOpen ? <X size={24} /> : <div className="relative"><Sparkles size={24} /><span className="absolute top-0 right-0 w-3 h-3 bg-[#ba4744] rounded-full animate-ping"></span></div>}
      </button>
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-[320px] md:w-[380px] h-[500px] bg-white/90 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 border border-white/20">
          <div className="bg-[#3b5f5c] p-4 flex items-center gap-3 border-b border-[#f4f3e1]/10">
            <div className="w-8 h-8 bg-[#f4f3e1] rounded-full flex items-center justify-center"><Sparkles size={16} className="text-[#3b5f5c]" /></div>
            <h3 className="text-[#f4f3e1] font-bold text-sm">Giuliette AI</h3>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f4f3e1]/50 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${msg.role === 'user' ? 'bg-[#3b5f5c] text-white' : 'glass-panel text-[#423b2c] border border-[#423b2c]/5'}`}>{msg.text}</div>
              </div>
            ))}
            {isLoading && <div className="flex justify-start"><div className="glass-panel p-3 rounded-2xl text-[#423b2c] text-xs flex gap-2 items-center"><Loader2 size={12} className="animate-spin" /> Pensando...</div></div>}
            <div ref={messagesEndRef} />
          </div>
          <div className="p-3 bg-white/50 border-t border-[#423b2c]/10">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 border border-[#423b2c]/10">
              <input type="text" value={input} onChange={(e) => setInput(e.target.value)} onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()} placeholder="..." className="flex-1 bg-transparent outline-none text-sm text-[#423b2c]" />
              <button onClick={handleSendMessage} disabled={isLoading} className="text-[#3b5f5c] hover:text-[#ba4744]"><Send size={16} /></button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

/* --- COMPONENTES PRINCIPAIS --- */

const Navigation = ({ lang, toggleLang, t }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="custom-container flex justify-between items-center">
          <a href="#" className={`glass-panel px-5 py-2 rounded-full text-2xl font-bold tracking-tighter text-[#423b2c] transition-all hover:bg-white/50 ${scrolled ? 'opacity-0 md:opacity-100' : 'opacity-100'}`}>
            Giuliette<span className="text-[#ba4744]">.</span>
          </a>
          
          <div className={`hidden md:flex items-center gap-1 glass-panel px-2 py-2 rounded-full shadow-sm transition-all duration-500`}>
            {['experience', 'cases', 'skills', 'articles'].map((item) => (
              <a key={item} href={`#${item}`} className="px-5 py-2 text-sm font-medium text-[#423b2c] hover:bg-white/50 hover:shadow-sm rounded-full transition-all duration-300">
                {t.nav[item]}
              </a>
            ))}
            <div className="w-px h-6 bg-[#423b2c]/10 mx-2"></div>
            <button onClick={toggleLang} className="flex items-center gap-1 px-4 py-2 text-xs font-bold text-[#3b5f5c] border border-[#3b5f5c]/20 rounded-full hover:bg-[#3b5f5c] hover:text-white transition-all">
              {lang.toUpperCase()}
            </button>
            <a href="#contato" className="ml-1 bg-[#423b2c] text-[#f4f3e1] px-6 py-2 rounded-full text-sm font-medium hover:bg-[#ba4744] transition-all">
              {t.nav.contact}
            </a>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-[#423b2c] p-2 bg-white/50 backdrop-blur-md rounded-full shadow-sm"><Menu size={24} /></button>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 glass-bg-base flex flex-col items-center justify-center space-y-8 animate-in slide-in-from-top-10 backdrop-blur-xl">
          <button onClick={() => setIsOpen(false)} className="absolute top-8 right-8 text-[#423b2c]"><X size={32} /></button>
          {['experience', 'cases', 'skills', 'articles'].map(item => (
            <a key={item} href={`#${item}`} onClick={() => setIsOpen(false)} className="text-3xl font-bold text-[#423b2c] hover:text-[#ba4744]">{t.nav[item]}</a>
          ))}
          <button onClick={() => {toggleLang(); setIsOpen(false);}} className="text-xl font-bold text-[#3b5f5c] border border-[#3b5f5c] px-6 py-2 rounded-full">{lang.toUpperCase()}</button>
        </div>
      )}
    </>
  );
};

const IntroSection = ({ t }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden glass-bg-base w-full">
      <div className="custom-container relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="order-1 md:order-1 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel-dark text-[#ba4744] text-xs font-bold tracking-widest uppercase mb-6 border-none">
              <Zap size={14} /> {t.intro.tag}
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-[#423b2c] leading-tight mb-6">
              {t.intro.title}
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-[#423b2c] mb-8 font-medium">
              {t.intro.subtitle}
            </h2>

            <div className="space-y-6 text-lg text-[#423b2c]/70 leading-relaxed mb-10 max-w-lg">
              <p>{t.intro.aboutP1}</p>
              <p>{t.intro.aboutP2}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#cases" className="group flex items-center justify-center gap-3 bg-[#423b2c] text-[#f4f3e1] px-8 py-4 rounded-full text-lg font-bold hover:bg-[#ba4744] transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                {t.intro.ctaWork} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contato" className="group flex items-center justify-center gap-3 glass-panel text-[#423b2c] px-8 py-4 rounded-full text-lg font-bold hover:bg-white transition-all">
                {t.intro.ctaContact}
              </a>
            </div>
          </div>

          <div className="order-2 md:order-2 relative mt-8 md:mt-0">
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative animate-in fade-in zoom-in duration-1000 delay-200">
              <img 
                src={t.intro.profileImage} 
                alt="Giuliette Bortoletto" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#423b2c]/20 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-12 -left-4 md:-left-8 animate-in slide-in-from-left-10 duration-700 delay-500 hover:scale-105 transition-transform z-20">
              <div className="flex items-center gap-4 glass-panel p-3 pr-6 rounded-full shadow-xl bg-white/10 border-white/20">
                <div className="w-12 h-12 bg-[#f0cb56] rounded-full flex items-center justify-center text-[#423b2c] font-bold text-xl shadow-inner">
                  +8
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider leading-none mb-1">Anos de</span>
                  <span className="text-sm font-bold text-white leading-none">{t.intro.statExp}</span>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-32 -right-4 md:-right-8 animate-in slide-in-from-right-10 duration-700 delay-700 hover:scale-105 transition-transform z-20">
               <div className="flex items-center gap-4 glass-panel p-3 pl-6 rounded-full shadow-xl flex-row-reverse bg-white/10 border-white/20">
                <div className="w-12 h-12 bg-[#3b5f5c] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-inner">
                  C1
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold text-white/80 uppercase tracking-wider leading-none mb-1">Nível</span>
                  <span className="text-sm font-bold text-white leading-none">{t.intro.statEng}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-[#423b2c]/20 hidden md:block">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

const Experience = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="experience" className="py-24 bg-[#f4f3e1] w-full">
      <div className="custom-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#423b2c] mb-4">{t.title}</h2>
            <p className="text-[#423b2c]/60 text-lg max-w-md">{t.subtitle}</p>
          </div>
          <div className="flex items-center gap-2 text-[#ba4744] text-sm font-bold uppercase tracking-widest">
            <RefreshCw size={16} className="animate-spin-slow" /> Timeline
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-[3rem] left-0 w-full h-px bg-[#423b2c]/10"></div>
          
          <div className="flex overflow-x-auto gap-12 pb-16 pt-4 px-4 snap-x hide-scrollbar">
            {t.items.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <div key={item.id} className="relative group min-w-[280px] snap-center cursor-pointer" onClick={() => setActiveIndex(isActive ? null : index)}>
                  <div className={`w-4 h-4 rounded-full border-2 absolute top-[2.55rem] left-0 transition-all duration-300 z-10 ${isActive ? 'bg-[#f0cb56] border-[#423b2c] scale-125' : 'bg-[#f4f3e1] border-[#423b2c]/40 group-hover:bg-[#423b2c]'}`}></div>
                  
                  <span className={`text-6xl font-bold transition-all duration-300 block mb-8 ${isActive ? 'text-[#423b2c]' : 'text-[#423b2c]/10 group-hover:text-[#423b2c]/30'}`}>
                    {item.year.split(' ')[0]}
                  </span>

                  <div className={`transition-all duration-300 ${isActive ? 'opacity-100 translate-y-0' : 'opacity-60 group-hover:opacity-100'}`}>
                    <h3 className="text-xl font-bold text-[#423b2c] mb-1">{item.company}</h3>
                    <p className="text-[#3b5f5c] font-medium mb-4">{item.role}</p>
                    
                    {isActive && (
                      <div className="mt-4 glass-panel p-6 rounded-2xl animate-in fade-in slide-in-from-top-4 bg-white/40">
                        <ul className="space-y-3">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="text-sm text-[#423b2c]/80 flex items-start gap-2">
                              <span className="mt-1.5 w-1.5 h-1.5 bg-[#ba4744] rounded-full flex-shrink-0"></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {!isActive && (
                      <span className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-[#ba4744] mt-2 group-hover:translate-x-2 transition-transform">
                        {t.readMore} <ChevronRight size={12} />
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

const Skills = ({ t }) => {
  const softSkillIcons = [RefreshCw, Lightbulb, Globe];
  const softSkillColors = ["#f0cb56", "#3b5f5c", "#ba4744"];

  return (
    <section id="skills" className="py-24 bg-white rounded-[3rem] shadow-sm relative z-10 w-full">
      <div className="custom-container">
        
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#423b2c]">{t.hardTitle}</h2>
          <p className="text-lg text-[#423b2c]/60">Ferramentas e metodologias que domino.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div className="flex flex-col gap-6">
            {t.hardCategories.map((cat, i) => (
              <div key={i} className="glass-panel-dark p-8 rounded-3xl hover:shadow-lg transition-all duration-300 border border-[#423b2c]/5 group">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#3b5f5c] shadow-sm group-hover:scale-110 transition-transform duration-300">
                    <cat.icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#423b2c]">{cat.name}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span key={skill} className="px-4 py-2 bg-white rounded-lg text-sm font-bold text-[#423b2c]/70 hover:text-[#3b5f5c] hover:shadow-sm transition-all cursor-default border border-[#423b2c]/5">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="h-full">
             <div className="bg-[#f4f3e1]/30 p-8 md:p-10 rounded-[2.5rem] h-full border border-[#423b2c]/5 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[#ba4744] flex items-center gap-3 mb-10 pl-2">
                  <User size={28}/> {t.softTitle}
                </h3>
                <div className="space-y-12">
                  {t.softList.map((skill, i) => {
                    const Icon = softSkillIcons[i] || User;
                    return (
                      <div key={i} className="flex gap-6 items-start group">
                          <div className="shrink-0 pt-1">
                            <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-white shadow-sm group-hover:scale-110 transition-transform duration-300">
                                <Icon size={32} style={{ color: softSkillColors[i] }} strokeWidth={2} />
                            </div>
                          </div>
                          <div>
                            <h4 className="font-bold text-xl text-[#423b2c] mb-2 group-hover:text-[#3b5f5c] transition-colors">{skill.title}</h4>
                            <p className="text-base text-[#423b2c]/60 leading-relaxed">{skill.desc}</p>
                          </div>
                      </div>
                    )
                  })}
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Cases = ({ t, onViewCase }) => {
  return (
    <section id="cases" className="py-32 bg-[#f4f3e1] w-full">
      <div className="custom-container">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <span className="text-[#3b5f5c] text-sm font-bold uppercase tracking-widest mb-4 block">{t.title}</span>
          <h2 className="text-4xl md:text-6xl font-bold text-[#423b2c] mb-6 leading-tight">
            {t.subtitle}
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <div key={index} className={`group relative bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl border border-[#423b2c]/5 ${item.isPlaceholder ? 'opacity-70 grayscale' : ''}`}>
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#423b2c]/20 group-hover:bg-transparent transition-colors z-10"></div>
                <img src={item.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" alt={item.title} />
                <div className="absolute top-6 left-6 z-20">
                  <span className="glass-panel text-[#423b2c] text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">{item.category}</span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#423b2c] mb-6 group-hover:text-[#ba4744] transition-colors">{item.title}</h3>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <p className="text-xs font-bold text-[#ba4744] uppercase mb-1">Desafio</p>
                    <p className="text-sm text-[#423b2c]/80 line-clamp-3">{item.challenge}</p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#3b5f5c] uppercase mb-1 flex items-center gap-1"><CheckCircle size={10} /> Solução</p>
                    <p className="text-sm text-[#423b2c]/80 line-clamp-2">{item.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 border-t border-[#423b2c]/10 pt-6">
                  {item.bigNumbers.map((num, i) => (
                    <div key={i} className="text-center">
                      <span className="block text-sm font-bold text-[#423b2c]">{num.split(' ')[0]}</span>
                      <span className="block text-[10px] text-[#423b2c]/50 uppercase">{num.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>

                {!item.isPlaceholder && (
                  item.isInternal ? (
                    <button 
                      onClick={() => onViewCase(item.internalRoute)}
                      className="absolute bottom-6 right-6 w-12 h-12 bg-[#f0cb56] rounded-full flex items-center justify-center text-[#423b2c] shadow-lg translate-y-20 group-hover:translate-y-0 transition-transform duration-300 z-30 cursor-pointer"
                    >
                      <ArrowRight size={20} />
                    </button>
                  ) : (
                    <a href={item.link} target="_blank" className="absolute bottom-6 right-6 w-12 h-12 bg-[#f0cb56] rounded-full flex items-center justify-center text-[#423b2c] shadow-lg translate-y-20 group-hover:translate-y-0 transition-transform duration-300">
                      <ArrowRight size={20} />
                    </a>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Articles = ({ t }) => {
  return (
    <section id="articles" className="py-32 bg-[#423b2c] text-[#f4f3e1] w-full">
      <div className="custom-container">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#f4f3e1]">{t.title}</h2>
          <a href="#" className="hidden md:flex items-center gap-2 text-[#3b5f5c] font-bold border-b-2 border-[#3b5f5c] pb-1 hover:text-[#f0cb56] hover:border-[#f0cb56] transition-colors">
            {t.linkText} <MoveRight size={18} />
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((item, index) => (
            <a key={index} href={item.link} target="_blank" className="group block glass-panel p-8 rounded-3xl hover:bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl bg-white/10 border-white/5 hover:border-white/20">
              <div className="flex justify-between items-start mb-6">
                <span className="text-[10px] font-bold bg-white/10 px-3 py-1 rounded-full text-white/80 group-hover:bg-[#3b5f5c] group-hover:text-white transition-colors">{item.source}</span>
                <span className="text-xs font-mono text-white/40 group-hover:text-[#423b2c]/40">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold text-[#f4f3e1] mb-4 leading-snug group-hover:text-[#423b2c] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#f4f3e1]/60 line-clamp-3 mb-6 group-hover:text-[#423b2c]/70">
                {item.summary}
              </p>
              <div className="flex items-center gap-2 text-sm font-bold text-[#ba4744] opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                {t.readFull} <ArrowRight size={16} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = ({ t }) => {
  return (
    <footer id="contato" className="bg-[#f4f3e1] text-[#423b2c] py-24 relative overflow-hidden border-t border-[#423b2c]/10 w-full">
      <div className="custom-container text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-bold mb-12 tracking-tight opacity-90">{t.title}</h2>
        <p className="text-xl md:text-2xl text-[#423b2c]/60 mb-16 max-w-2xl mx-auto font-light">{t.text}</p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6 mb-24">
          <a href="mailto:contato@giuliette.com" className="group bg-[#f0cb56] text-[#423b2c] px-10 py-5 rounded-full text-xl font-bold hover:scale-105 transition-transform flex items-center justify-center gap-3">
            <Mail className="group-hover:rotate-12 transition-transform" /> {t.btnContact}
          </a>
          <a href="#" className="group bg-transparent border-2 border-[#f4f3e1]/20 text-[#423b2c] px-10 py-5 rounded-full text-xl font-bold hover:bg-[#423b2c] hover:text-[#f4f3e1] transition-all flex items-center justify-center gap-3">
            <Linkedin /> LinkedIn
          </a>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-[#423b2c]/10 text-sm text-[#423b2c]/40">
          <p>{t.copyright}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <span className="hover:text-[#f0cb56] cursor-pointer">Instagram</span>
            <span className="hover:text-[#f0cb56] cursor-pointer">Medium</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

const App = () => {
  const [lang, setLang] = useState('pt');
  const [currentView, setCurrentView] = useState('landing');
  const t = translations[lang];

  const toggleLang = () => {
    setLang(prev => prev === 'pt' ? 'en' : 'pt');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  if (currentView === 'case-athena') {
    return (
      <div className="min-h-screen bg-[#f4f3e1] text-[#423b2c] font-sans selection:bg-[#ba4744] selection:text-[#f4f3e1] w-full">
        <GlobalStyles />
        <CaseStudyPage onBack={() => setCurrentView('landing')} />
        <Footer t={t.footer} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f4f3e1] text-[#423b2c] font-sans selection:bg-[#ba4744] selection:text-[#f4f3e1] w-full">
      <GlobalStyles />
      <Navigation lang={lang} toggleLang={toggleLang} t={t} />
      <main className="w-full">
        <IntroSection t={t} />
        <Experience t={t.experience} />
        <Skills t={t.skills} />
        <Cases t={t.cases} onViewCase={setCurrentView} />
        <Articles t={t.articles} />
      </main>
      <Footer t={t.footer} />
      <AIChatAssistant contextData={translations[lang]} lang={lang} />
    </div>
  );
};

export default App;
