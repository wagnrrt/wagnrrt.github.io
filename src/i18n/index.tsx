import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  pt: {
    translation: {
      hero: {
        greeting: 'Olá, meu nome é Wagner',
        role: 'e sou um',
        desc: 'Apaixonado por programação e sempre\nansioso para explorar novas tecnologias e\nexpandir minhas habilidades.',
      },
      about: {
        terminal: {
          p1: 'Atualmente estou estudando desenvolvimento back-end, com foco em Node.js, JavaScript e TypeScript. Meu principal interesse é entender como as aplicações funcionam por trás das cenas — desde o tratamento de dados até a lógica que conecta tudo.',
          p2: 'Programação é algo que genuinamente aprecio. Gosto de explorar como os sistemas são estruturados, entender por que certas decisões são tomadas e prestar atenção aos detalhes que influenciam o comportamento do software.',
          p3: 'Nesta fase, meu foco é construir fundamentos sólidos. Estou aprimorando minhas habilidades de codificação, aprofundando meu conhecimento sobre conceitos de back-end e aprendendo através de prática e estudo consistentes.',
          p4: 'Meu objetivo é um crescimento técnico constante, desenvolvendo uma mentalidade sólida para construir sistemas confiáveis e escrever código cada vez melhor.'
        },
        terminalPreview: {
          p1: 'Desenvolvedor back-end focado em Node.js, JavaScript e TypeScript. Construo a lógica e arquitetura que alimenta aplicações, garantindo que tudo funcione solidamente.',
          p2: 'Sou genuinamente apaixonado por programação. Gosto de entender como os sistemas funcionam internamente — o fluxo de dados, a estrutura, os detalhes que fazem a diferença. Quanto mais aprendo, mais quero explorar.',
          p3: 'Sempre buscando evoluir tecnicamente e aplicar o que aprendo em projetos que realmente importam.'
        }
      },
      projects: {
        luminaWeather: 'Aplicativo de clima moderno com frontend React + TypeScript e backend API Fastify. Inclui previsões de 15 dias, detalhes por hora, gráficos interativos e cache Redis.',
        taskTracker: 'Gerenciador de tarefas CLI construído com TypeScript. Adicione, atualize, exclua e rastreie tarefas com gerenciamento de status, tudo armazenado em formato JSON.'
      },
      contact: 'Construindo meu caminho como desenvolvedor.\nAberto a oportunidades, colaborações\ne troca de conhecimento.',
      footer: 'Feito por wagnrrt © Copyright 2026.'
    }
  },
  en: {
    translation: {
      hero: {
        greeting: 'Hi, my name is Wagner',
        role: 'and I\'m a',
        desc: 'Passionate about programming and always\neager to explore new technologies and\nexpand my skills.',
      },
      about: {
        terminal: {
          p1: 'I\'m currently studying back-end development, focusing on Node.js, JavaScript, and TypeScript. My main interest is understanding how applications work behind the scenes — from data handling to the logic that connects everything.',
          p2: 'Programming is something I genuinely enjoy. I like exploring how systems are structured, understanding why certain decisions are made, and paying attention to the details that influence how software behaves.',
          p3: 'At this stage, my focus is on building strong fundamentals. I\'m improving my coding skills, deepening my understanding of back-end concepts, and learning through consistent practice and study.',
          p4: 'My goal is steady technical growth, developing a solid mindset for building reliable systems and writing better code over time.'
        },
        terminalPreview: {
          p1: 'Back-end developer focused on Node.js, JavaScript, and TypeScript. I build the logic and architecture that powers applications, ensuring everything runs solidly.',
          p2: 'I\'m genuinely passionate about programming. I enjoy understanding how systems work under the hood — the data flow, the structure, the details that make a difference. The more I learn, the more I want to explore.',
          p3: 'Always looking to evolve technically and apply what I learn to projects that truly matter.'
        }
      },
      projects: {
        luminaWeather: 'Modern weather app with React + TypeScript frontend and Fastify API backend. Includes 15-day forecasts, hourly details, interactive charts, and Redis caching.',
        taskTracker: 'CLI task manager built with TypeScript. Add, update, delete and track tasks with status management, all stored in JSON format.'
      },
      contact: 'Building my path as a developer.\nOpen to opportunities, collaborations,\nand knowledge exchange.',
      footer: 'Made by wagnrrt © Copyright 2026.'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'pt',
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
