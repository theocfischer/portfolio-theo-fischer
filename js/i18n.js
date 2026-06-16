(() => {
  'use strict';

  const translations = {
    pt: {
      meta: {
        title: 'Theo de Campos Fischer | Portfólio',
        description: 'Portfólio de Theo de Campos Fischer, Técnico em Informática com projetos em JavaScript, Node.js, SQL e Python.'
      },
      accessibility: {
        skipContent: 'Pular para o conteúdo',
        backHome: 'Voltar ao início',
        mainNavigation: 'Navegação principal',
        primaryLinks: 'Links principais',
        quickSummary: 'Resumo rápido',
        profileSummary: 'Resumo do perfil'
      },
      language: { select: 'Selecionar idioma', menuLabel: 'Idioma do portfólio' },
      theme: { toLight: 'Alternar para tema claro', toDark: 'Alternar para tema escuro' },
      header: { role: 'Web · Dados · Sistemas' },
      nav: { about: 'Sobre', projects: 'Projetos', skills: 'Habilidades', journey: 'Trajetória', contact: 'Contato' },
      menu: { open: 'Abrir menu', close: 'Fechar menu' },
      hero: {
        availability: 'Buscando vaga júnior em web, dados e sistemas',
        eyebrow: 'Técnico em Informática · Porto Alegre/RS',
        title: 'Interfaces, dados e sistemas simples com JavaScript, Node.js, SQL e Python.',
        description: 'Técnico em Informática pelo IFRS. Usei Python e Jupyter no estágio da FURG para tratar dados ambientais e venho publicando projetos web com login, CRUD, sessões, APIs e banco.',
        proofProjects: 'projetos selecionados',
        proofEnglish: 'inglês certificado',
        proofFurg: 'dados reais no estágio',
        proofNode: 'login, CRUD e sessões',
        proofIfrs: 'técnico formado em 2025'
      },
      profile: {
        role: 'Técnico em Informática',
        focusLabel: 'Estudando agora',
        focusValue: 'TypeScript e React',
        stackLabel: 'Base técnica',
        stackFront: 'Front-end · JavaScript',
        stackBackend: 'Back-end · Node.js',
        stackData: 'Dados · Python',
        stackDatabase: 'Banco de dados · SQL',
        photoAlt: 'Foto de Theo de Campos Fischer'
      },
      actions: {
        resume: 'Currículo (PT)',
        github: 'Ver código',
        demo: 'Ver demo',
        copyEmail: 'Copiar e-mail',
        email: 'E-mail',
        repositoryPlanned: 'Repositório em organização'
      },
      about: {
        eyebrow: 'IFRS · FURG · GitHub ativo',
        title: 'Técnico pelo IFRS, estágio com dados na FURG e projetos publicados no GitHub.',
        paragraphOne: 'No estágio na FURG, tratei bases públicas da Lagoa dos Patos com Python e Jupyter. O resultado virou gráficos e um pôster apresentado na Mostra Científica do IFRS.',
        paragraphTwo: 'Nos projetos web, foquei em coisas que aparecem no dia a dia: login, sessões, CRUD, APIs, banco de dados e validação de regras. Agora estou reforçando TypeScript e React.',
        factOneLabel: 'Formação',
        factOneValue: 'Técnico em Informática para Internet pelo IFRS',
        factTwoLabel: 'Localização',
        factTwoValue: 'Porto Alegre/RS · remoto Brasil',
        factThreeLabel: 'Objetivo',
        factThreeValue: 'Vaga júnior em tecnologia'
      },
      projects: {
        eyebrow: 'Projetos selecionados',
        title: 'Projetos que já coloquei para rodar.',
        intro: 'Uma amostra do que já pratiquei: dados com Python, sistemas web, SQL e protótipos documentados.',
        featured: 'Destaque',
        technologiesLabel: 'Tecnologias do projeto',
        expandImage: 'Ampliar imagem',
        closeImage: 'Fechar imagem',
        lightboxLabel: 'Visualização ampliada do projeto'
      },
      skills: {
        eyebrow: 'Habilidades',
        title: 'Habilidades com contexto, não só lista.',
        intro: 'Separei as ferramentas pelo contexto em que usei. TypeScript e React seguem como estudo atual.',
        tabsLabel: 'Categorias de habilidades',
        tabWeb: 'Web & Sistemas',
        tabData: 'Dados & Automação',
        tabDatabase: 'Banco & Ferramentas',
        tabSupport: 'Suporte & Infra',
        panelLabel: 'Onde usei',
        learning: 'Em estudo',
        categories: {
          web: {
            title: 'Construção de interfaces e aplicações web',
            description: 'Base para criar páginas responsivas, integrar front-end e back-end e estruturar aplicações com rotas, sessões e APIs.',
            items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'APIs REST', 'JSON', 'Postman / Insomnia', 'TypeScript', 'React'],
            learningItems: ['TypeScript', 'React'],
            examples: ['ProjetoQuadrasIFRS: login, sessões, CRUD e validação de conflitos.', 'Radar de Candidaturas: filtros, indicadores e fluxo de vagas.']
          },
          data: {
            title: 'Tratamento, análise e visualização de dados',
            description: 'Ferramentas usadas no estágio e em projetos para limpar dados, explorar padrões, criar gráficos e automatizar tarefas.',
            items: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook', 'Excel', 'Power Query', 'ETL básico', 'Visualização de dados'],
            learningItems: [],
            examples: ['Estágio na FURG: limpeza e análise de dados ambientais.', 'Projetos DIO: notebooks, anomalias e documentação.']
          },
          database: {
            title: 'Bancos relacionais e ferramentas de desenvolvimento',
            description: 'Conhecimentos para modelar, consultar e integrar bancos relacionais, versionar projetos e testar APIs durante o desenvolvimento.',
            items: ['SQL', 'MySQL', 'SQLite', 'Modelagem relacional', 'Consultas e JOINs', 'Git', 'GitHub', 'VS Code', 'XAMPP'],
            learningItems: [],
            examples: ['ProjetoQuadrasIFRS: MySQL, consultas e regras de conflito.', 'Career/Radar: integração entre API, dados e tela.']
          },
          support: {
            title: 'Base técnica para sistemas e suporte',
            description: 'Conhecimentos de manutenção e infraestrutura que ajudam a diagnosticar problemas de software, hardware e rede.',
            items: ['Windows', 'Linux básico', 'Hardware', 'Redes TCP/IP', 'DNS', 'DHCP', 'Manutenção preventiva', 'Suporte ao usuário'],
            learningItems: [],
            examples: ['Base do técnico no IFRS: redes, hardware e manutenção.', 'Prática com ambiente local: XAMPP, Node, VS Code e terminal.']
          }
        }
      },
      journey: {
        eyebrow: 'Trajetória',
        title: 'Formação, estágio e estudos recentes.',
        intro: 'O caminho até aqui: IFRS, dados ambientais na FURG e projetos web para praticar Node, SQL, Python e organização de código.',
        itemOneTitle: 'Técnico em Informática para Internet · IFRS',
        itemOneText: 'Base em HTML, CSS, JavaScript, banco de dados, redes, manutenção e projetos integradores.',
        itemTwoTitle: 'Estágio em análise de dados ambientais · FURG',
        itemTwoText: 'Tratamento de bases públicas da Lagoa dos Patos, geração de gráficos e organização dos resultados em notebook e pôster.',
        itemThreeTitle: 'Cursos e projetos independentes',
        itemThreeText: 'Cursos recentes em IA, dados, hardware e Excel, junto com prática contínua em projetos no GitHub.',
        currentPeriod: '2025 até hoje',
        certificationsLabel: 'Certificações e cursos',
        certificationOne: 'EF SET · Inglês C2',
        certificationTwo: 'Alura · IA & Dados',
        certificationThree: 'DIO · GenAI, Dados & Cibersegurança',
        certificationFour: 'Cisco · Hardware',
        certificationFive: 'Fundação Bradesco · Excel'
      },
      contact: {
        eyebrow: 'Contato',
        title: 'Me chama no e-mail ou no LinkedIn.',
        text: 'Técnico recém-formado pelo IFRS, com estágio em dados e projetos web publicados. Aberto a vagas júnior e conversas técnicas por e-mail ou LinkedIn.',
        availability: 'Open to work · tecnologia júnior',
        statusLabel: 'Status profissional',
        emailLabel: 'Meu e-mail',
        copied: 'E-mail copiado para a área de transferência.',
        copyError: 'Não consegui copiar automaticamente. E-mail: {email}'
      },
      footer: { text: 'Construído do zero, sem frameworks.', backTop: 'Voltar ao topo ↑', backTopLabel: 'Voltar ao topo' }
    },

    en: {
      meta: {
        title: 'Theo de Campos Fischer | Portfolio',
        description: 'Portfolio of Theo de Campos Fischer, an IT Technician with projects in JavaScript, Node.js, SQL and Python.'
      },
      accessibility: {
        skipContent: 'Skip to content',
        backHome: 'Back to the top',
        mainNavigation: 'Main navigation',
        primaryLinks: 'Main links',
        quickSummary: 'Quick summary',
        profileSummary: 'Profile summary'
      },
      language: { select: 'Select language', menuLabel: 'Portfolio language' },
      theme: { toLight: 'Switch to light theme', toDark: 'Switch to dark theme' },
      header: { role: 'Web · Data · Systems' },
      nav: { about: 'About', projects: 'Projects', skills: 'Skills', journey: 'Journey', contact: 'Contact' },
      menu: { open: 'Open menu', close: 'Close menu' },
      hero: {
        availability: 'Looking for a junior role in web, data or systems',
        eyebrow: 'IT Technician · Porto Alegre, Brazil',
        title: 'Interfaces, data and simple systems with JavaScript, Node.js, SQL and Python.',
        description: 'I am an IT Technician from IFRS. At FURG, I used Python and Jupyter to work with environmental data, and I have been publishing web projects with login, CRUD, sessions, APIs and databases.',
        proofProjects: 'selected projects',
        proofEnglish: 'certified English',
        proofFurg: 'real internship data',
        proofNode: 'login, CRUD and sessions',
        proofIfrs: 'technical diploma in 2025'
      },
      profile: {
        role: 'IT Technician',
        focusLabel: 'Currently learning',
        focusValue: 'TypeScript and React',
        stackLabel: 'Technical foundation',
        stackFront: 'Front-end · JavaScript',
        stackBackend: 'Back-end · Node.js',
        stackData: 'Data · Python',
        stackDatabase: 'Databases · SQL',
        photoAlt: 'Photo of Theo de Campos Fischer'
      },
      actions: {
        resume: 'Resume (EN)',
        github: 'View code',
        demo: 'Live demo',
        copyEmail: 'Copy e-mail',
        email: 'E-mail',
        repositoryPlanned: 'Repository being organized'
      },
      about: {
        eyebrow: 'IFRS · FURG · active GitHub',
        title: 'IFRS technical education, a data internship at FURG and projects published on GitHub.',
        paragraphOne: 'At FURG, I worked with public datasets from Lagoa dos Patos using Python and Jupyter. The result became charts and a poster presented at the IFRS Scientific Exhibition.',
        paragraphTwo: 'In my web projects, I focused on things that show up in real systems: login, sessions, CRUD, APIs, databases and rule validation. I am now strengthening TypeScript and React.',
        factOneLabel: 'Education',
        factOneValue: 'Technical Diploma in Web Development and IT from IFRS',
        factTwoLabel: 'Location',
        factTwoValue: 'Porto Alegre, Brazil · remote in Brazil',
        factThreeLabel: 'Goal',
        factThreeValue: 'Junior technology role'
      },
      projects: {
        eyebrow: 'Selected projects',
        title: 'Projects I have actually built.',
        intro: 'A sample of what I have practiced: Python data work, web systems, SQL and documented prototypes.',
        featured: 'Featured',
        technologiesLabel: 'Project technologies',
        expandImage: 'Enlarge image',
        closeImage: 'Close image',
        lightboxLabel: 'Enlarged project image'
      },
      skills: {
        eyebrow: 'Skills',
        title: 'Technologies I have used.',
        intro: 'I separated the skills I have used in projects, internship work or courses. TypeScript and React are still in progress.',
        tabsLabel: 'Skill categories',
        tabWeb: 'Web & Systems',
        tabData: 'Data & Automation',
        tabDatabase: 'Databases & Tools',
        tabSupport: 'Support & Infrastructure',
        panelLabel: 'Used in projects',
        learning: 'Learning',
        categories: {
          web: {
            title: 'Building interfaces and web applications',
            description: 'A foundation for responsive pages, front-end and back-end integration, routes, sessions and APIs.',
            items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'REST APIs', 'JSON', 'Postman / Insomnia', 'TypeScript', 'React'],
            learningItems: ['TypeScript', 'React'],
            examples: ['ProjetoQuadrasIFRS: login, sessions, CRUD and conflict validation.', 'Application Tracker: filters, indicators and job-search flow.']
          },
          data: {
            title: 'Data cleaning, analysis and visualization',
            description: 'Tools used during my internship and projects to clean data, explore patterns, create charts and automate tasks.',
            items: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook', 'Excel', 'Power Query', 'Basic ETL', 'Data visualization'],
            learningItems: [],
            examples: ['FURG internship: environmental data cleaning and analysis.', 'DIO projects: notebooks, anomalies and documentation.']
          },
          database: {
            title: 'Relational databases and development tools',
            description: 'Knowledge used to model, query and integrate relational databases, version projects and test APIs.',
            items: ['SQL', 'MySQL', 'SQLite', 'Relational modeling', 'Queries and JOINs', 'Git', 'GitHub', 'VS Code', 'XAMPP'],
            learningItems: [],
            examples: ['ProjetoQuadrasIFRS: MySQL, queries and conflict rules.', 'Career/Radar projects: connecting API, data and interface.']
          },
          support: {
            title: 'Technical base for systems and support',
            description: 'Maintenance and infrastructure knowledge that helps diagnose software, hardware and network issues.',
            items: ['Windows', 'Basic Linux', 'Hardware', 'TCP/IP networking', 'DNS', 'DHCP', 'Preventive maintenance', 'User support'],
            learningItems: [],
            examples: ['Technical course foundation: networking, hardware and maintenance.', 'Local setup practice: XAMPP, Node, VS Code and terminal.']
          }
        }
      },
      journey: {
        eyebrow: 'Journey',
        title: 'Education, internship and recent study.',
        intro: 'The path so far: IFRS, environmental data work at FURG and web projects used to practice Node, SQL, Python and code organization.',
        itemOneTitle: 'Technical Diploma in Web Development and IT · IFRS',
        itemOneText: 'Foundation in HTML, CSS, JavaScript, databases, networking, maintenance and integrated technical projects.',
        itemTwoTitle: 'Environmental data analysis internship · FURG',
        itemTwoText: 'Cleaning public Lagoa dos Patos datasets, creating charts and organizing the results in a notebook and poster.',
        itemThreeTitle: 'Independent courses and projects',
        itemThreeText: 'Recent courses in AI, data, hardware and Excel, alongside continued practice through GitHub projects.',
        currentPeriod: '2025 to present',
        certificationsLabel: 'Certificates and courses',
        certificationOne: 'EF SET · English C2',
        certificationTwo: 'Alura · AI & Data',
        certificationThree: 'DIO · GenAI, Data & Cybersecurity',
        certificationFour: 'Cisco · Hardware',
        certificationFive: 'Fundação Bradesco · Excel'
      },
      contact: {
        eyebrow: 'Contact',
        title: 'Reach me by e-mail or LinkedIn.',
        text: 'Recently graduated as an IT technician, with a data internship and published web projects. Open to junior roles and technical conversations by e-mail or LinkedIn.',
        availability: 'Open to work · entry-level tech roles',
        statusLabel: 'Professional status',
        emailLabel: 'My e-mail',
        copied: 'E-mail copied to the clipboard.',
        copyError: 'I could not copy it automatically. E-mail: {email}'
      },
      footer: { text: 'Built from scratch, without frameworks.', backTop: 'Back to top ↑', backTopLabel: 'Back to top' }
    },

    es: {
      meta: {
        title: 'Theo de Campos Fischer | Portafolio',
        description: 'Portafolio de Theo de Campos Fischer, Técnico en Informática con proyectos en JavaScript, Node.js, SQL y Python.'
      },
      accessibility: {
        skipContent: 'Saltar al contenido',
        backHome: 'Volver al inicio',
        mainNavigation: 'Navegación principal',
        primaryLinks: 'Enlaces principales',
        quickSummary: 'Resumen rápido',
        profileSummary: 'Resumen del perfil'
      },
      language: { select: 'Seleccionar idioma', menuLabel: 'Idioma del portafolio' },
      theme: { toLight: 'Cambiar al tema claro', toDark: 'Cambiar al tema oscuro' },
      header: { role: 'Web · Datos · Sistemas' },
      nav: { about: 'Sobre mí', projects: 'Proyectos', skills: 'Habilidades', journey: 'Trayectoria', contact: 'Contacto' },
      menu: { open: 'Abrir menú', close: 'Cerrar menú' },
      hero: {
        availability: 'Busco oportunidad júnior en web, datos o sistemas',
        eyebrow: 'Técnico en Informática · Porto Alegre, Brasil',
        title: 'Interfaces, datos y sistemas simples con JavaScript, Node.js, SQL y Python.',
        description: 'Soy Técnico en Informática por el IFRS. En mis prácticas en FURG, usé Python y Jupyter para trabajar con datos ambientales de Lagoa dos Patos. También desarrollé proyectos con login, CRUD, sesiones, APIs y bases de datos.',
        proofProjects: 'proyectos seleccionados',
        proofEnglish: 'inglés certificado',
        proofFurg: 'datos reales en prácticas',
        proofNode: 'login, CRUD y sesiones',
        proofIfrs: 'técnico formado en 2025'
      },
      profile: {
        role: 'Técnico en Informática',
        focusLabel: 'Estudiando ahora',
        focusValue: 'TypeScript y React',
        stackLabel: 'Base técnica',
        stackFront: 'Front-end · JavaScript',
        stackBackend: 'Back-end · Node.js',
        stackData: 'Datos · Python',
        stackDatabase: 'Bases de datos · SQL',
        photoAlt: 'Foto de Theo de Campos Fischer'
      },
      actions: {
        resume: 'CV en inglés',
        github: 'Ver código',
        demo: 'Ver demo',
        copyEmail: 'Copiar e-mail',
        email: 'E-mail',
        repositoryPlanned: 'Repositorio en organización'
      },
      about: {
        eyebrow: 'IFRS · FURG · GitHub activo',
        title: 'Base técnica en el IFRS, prácticas con datos en FURG y proyectos publicados en GitHub.',
        paragraphOne: 'Durante mis prácticas en FURG, trabajé con bases públicas sobre Lagoa dos Patos, traté datos incompletos con Python y preparé gráficos presentados en la Muestra Científica del IFRS.',
        paragraphTwo: 'También creé sistemas con Node.js, Express y MySQL, trabajando con login, sesiones, CRUD, APIs y reglas de conflicto. Ahora estoy reforzando TypeScript y React.',
        factOneLabel: 'Formación',
        factOneValue: 'Técnico en Informática para Internet por el IFRS',
        factTwoLabel: 'Ubicación',
        factTwoValue: 'Porto Alegre, Brasil · remoto en Brasil',
        factThreeLabel: 'Objetivo',
        factThreeValue: 'Oportunidad júnior en tecnología'
      },
      projects: {
        eyebrow: 'Proyectos seleccionados',
        title: 'Proyectos que ya puse a funcionar.',
        intro: 'Una muestra de lo que ya practiqué: datos con Python, sistemas web, SQL y prototipos documentados.',
        featured: 'Destacado',
        technologiesLabel: 'Tecnologías del proyecto',
        expandImage: 'Ampliar imagen',
        closeImage: 'Cerrar imagen',
        lightboxLabel: 'Vista ampliada del proyecto'
      },
      skills: {
        eyebrow: 'Habilidades',
        title: 'Habilidades con contexto, no solo una lista.',
        intro: 'Dividí las habilidades entre lo que usé en proyectos, prácticas o cursos. TypeScript y React todavía están en estudio.',
        tabsLabel: 'Categorías de habilidades',
        tabWeb: 'Web & Sistemas',
        tabData: 'Datos & Automatización',
        tabDatabase: 'Bases de datos & Herramientas',
        tabSupport: 'Soporte & Infraestructura',
        panelLabel: 'Dónde lo usé',
        learning: 'En estudio',
        categories: {
          web: {
            title: 'Construcción de interfaces y aplicaciones web',
            description: 'Base para páginas responsivas, integración entre front-end y back-end, rutas, sesiones y APIs.',
            items: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'APIs REST', 'JSON', 'Postman / Insomnia', 'TypeScript', 'React'],
            learningItems: ['TypeScript', 'React'],
            examples: ['ProjetoQuadrasIFRS: login, sesiones, CRUD y validación de conflictos.', 'Radar de Candidaturas: filtros, indicadores y flujo de vacantes.']
          },
          data: {
            title: 'Tratamiento, análisis y visualización de datos',
            description: 'Herramientas usadas en mis prácticas y proyectos para limpiar datos, explorar patrones, crear gráficos y automatizar tareas.',
            items: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Jupyter Notebook', 'Excel', 'Power Query', 'ETL básico', 'Visualización de datos'],
            learningItems: [],
            examples: ['Prácticas en FURG: limpieza y análisis de datos ambientales.', 'Proyectos DIO: notebooks, anomalías y documentación.']
          },
          database: {
            title: 'Bases relacionales y herramientas de desarrollo',
            description: 'Conocimientos para modelar, consultar e integrar bases relacionales, versionar proyectos y probar APIs.',
            items: ['SQL', 'MySQL', 'SQLite', 'Modelado relacional', 'Consultas y JOINs', 'Git', 'GitHub', 'VS Code', 'XAMPP'],
            learningItems: [],
            examples: ['ProjetoQuadrasIFRS: MySQL, consultas y reglas de conflicto.', 'Career/Radar: integración entre API, datos e interfaz.']
          },
          support: {
            title: 'Base técnica para sistemas y soporte',
            description: 'Conocimientos de mantenimiento e infraestructura para diagnosticar problemas de software, hardware y red.',
            items: ['Windows', 'Linux básico', 'Hardware', 'Redes TCP/IP', 'DNS', 'DHCP', 'Mantenimiento preventivo', 'Soporte al usuario'],
            learningItems: [],
            examples: ['Base técnica en IFRS: redes, hardware y mantenimiento.', 'Práctica con entorno local: XAMPP, Node, VS Code y terminal.']
          }
        }
      },
      journey: {
        eyebrow: 'Trayectoria',
        title: 'Formación, prácticas y estudios recientes.',
        intro: 'El camino hasta ahora: IFRS, datos ambientales en FURG y proyectos web para practicar Node, SQL, Python y organización de código.',
        itemOneTitle: 'Técnico en Informática para Internet · IFRS',
        itemOneText: 'Base en HTML, CSS, JavaScript, bases de datos, redes, mantenimiento y proyectos técnicos integradores.',
        itemTwoTitle: 'Prácticas en análisis de datos ambientales · FURG',
        itemTwoText: 'Tratamiento de bases públicas de Lagoa dos Patos, creación de gráficos y organización de resultados en notebook y póster.',
        itemThreeTitle: 'Cursos y proyectos independientes',
        itemThreeText: 'Cursos recientes en IA, datos, hardware y Excel, junto con práctica continua en proyectos de GitHub.',
        currentPeriod: '2025 hasta hoy',
        certificationsLabel: 'Certificaciones y cursos',
        certificationOne: 'EF SET · Inglés C2',
        certificationTwo: 'Alura · IA y Datos',
        certificationThree: 'DIO · GenAI, Datos y Ciberseguridad',
        certificationFour: 'Cisco · Hardware',
        certificationFive: 'Fundação Bradesco · Excel'
      },
      contact: {
        eyebrow: 'Contacto',
        title: 'Contáctame por e-mail o LinkedIn.',
        text: 'Técnico recién formado por el IFRS, con prácticas en datos y proyectos web publicados. Abierto a vacantes júnior y conversaciones técnicas por e-mail o LinkedIn.',
        availability: 'Open to work · tecnología júnior',
        statusLabel: 'Estado profesional',
        emailLabel: 'Mi e-mail',
        copied: 'E-mail copiado al portapapeles.',
        copyError: 'No pude copiarlo automáticamente. E-mail: {email}'
      },
      footer: { text: 'Construido desde cero, sin frameworks.', backTop: 'Volver arriba ↑', backTopLabel: 'Volver arriba' }
    }
  };

  const languageMeta = {
    pt: { flag: 'assets/icons/flags/br.svg', code: 'PT', htmlLang: 'pt-BR', resume: 'assets/docs/Theo_Fischer_Curriculo.pdf' },
    en: { flag: 'assets/icons/flags/us.svg', code: 'EN', htmlLang: 'en', resume: 'assets/docs/Theo_Fischer_Resume_EN.pdf' },
    es: { flag: 'assets/icons/flags/es.svg', code: 'ES', htmlLang: 'es', resume: 'assets/docs/Theo_Fischer_Resume_EN.pdf' }
  };

  let currentLanguage = 'pt';

  function readPath(source, path) {
    return path.split('.').reduce((value, key) => value?.[key], source);
  }

  function t(path, fallback = '') {
    return readPath(translations[currentLanguage], path) ?? readPath(translations.pt, path) ?? fallback;
  }

  function translateElements() {
    document.querySelectorAll('[data-i18n]').forEach((element) => {
      const value = t(element.dataset.i18n);
      if (typeof value === 'string') element.textContent = value;
    });

    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => {
      const value = t(element.dataset.i18nAriaLabel);
      if (typeof value === 'string') element.setAttribute('aria-label', value);
    });

    document.querySelectorAll('[data-i18n-alt]').forEach((element) => {
      const value = t(element.dataset.i18nAlt);
      if (typeof value === 'string') element.setAttribute('alt', value);
    });

    document.querySelectorAll('[data-i18n-content]').forEach((element) => {
      const value = t(element.dataset.i18nContent);
      if (typeof value === 'string') element.setAttribute('content', value);
    });
  }

  function updateLanguageControls() {
    const meta = languageMeta[currentLanguage];
    document.documentElement.lang = meta.htmlLang;
    document.title = t('meta.title');

    const flag = document.querySelector('[data-current-language-flag]');
    const code = document.querySelector('[data-current-language-code]');
    if (flag) flag.src = meta.flag;
    if (code) code.textContent = meta.code;

    const resumeLink = document.querySelector('[data-resume-link]');
    if (resumeLink) resumeLink.setAttribute('href', meta.resume);

    document.querySelectorAll('[data-language]').forEach((button) => {
      const isSelected = button.dataset.language === currentLanguage;
      button.setAttribute('aria-checked', String(isSelected));
      button.tabIndex = isSelected ? 0 : -1;
    });

    const menuToggle = document.querySelector('[data-menu-toggle]');
    if (menuToggle) {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-label', isOpen ? t('menu.close') : t('menu.open'));
    }
  }

  function setLanguage(language, { persist = true } = {}) {
    if (!translations[language]) language = 'pt';
    currentLanguage = language;
    if (persist) {
      try { localStorage.setItem('portfolio-language', language); } catch { /* Storage may be unavailable. */ }
    }

    translateElements();
    updateLanguageControls();
    window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language } }));
  }

  function detectInitialLanguage() {
    const queryLanguage = new URLSearchParams(window.location.search).get('lang');
    if (queryLanguage && translations[queryLanguage]) return queryLanguage;

    try {
      const savedLanguage = localStorage.getItem('portfolio-language');
      if (savedLanguage && translations[savedLanguage]) return savedLanguage;
    } catch { /* Storage may be unavailable. */ }

    return 'pt';
  }

  function setupLanguagePicker() {
    const picker = document.querySelector('[data-language-picker]');
    const trigger = document.querySelector('[data-language-trigger]');
    const menu = document.querySelector('[data-language-menu]');
    if (!picker || !trigger || !menu) return;

    const options = [...menu.querySelectorAll('[data-language]')];

    function focusOption(index) {
      if (!options.length) return;
      const normalizedIndex = (index + options.length) % options.length;
      options.forEach((option, optionIndex) => {
        option.tabIndex = optionIndex === normalizedIndex ? 0 : -1;
      });
      options[normalizedIndex].focus();
    }

    function getFocusedIndex() {
      const focusedIndex = options.indexOf(document.activeElement);
      if (focusedIndex >= 0) return focusedIndex;
      const selectedIndex = options.findIndex((option) => option.getAttribute('aria-checked') === 'true');
      return selectedIndex >= 0 ? selectedIndex : 0;
    }

    function openMenu({ focus = 'selected' } = {}) {
      menu.hidden = false;
      trigger.setAttribute('aria-expanded', 'true');
      const selectedIndex = Math.max(0, options.findIndex((option) => option.getAttribute('aria-checked') === 'true'));
      if (focus === 'first') focusOption(0);
      else if (focus === 'last') focusOption(options.length - 1);
      else focusOption(selectedIndex);
    }

    function closeMenu({ focusTrigger = false } = {}) {
      menu.hidden = true;
      trigger.setAttribute('aria-expanded', 'false');
      if (focusTrigger) trigger.focus();
    }

    trigger.addEventListener('click', () => {
      const shouldOpen = menu.hidden;
      if (shouldOpen) openMenu();
      else closeMenu();
    });

    trigger.addEventListener('keydown', (event) => {
      if (!['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      if (event.key === 'ArrowUp' || event.key === 'End') openMenu({ focus: 'last' });
      else openMenu({ focus: 'first' });
    });

    menu.addEventListener('click', (event) => {
      const button = event.target.closest('[data-language]');
      if (!button) return;
      setLanguage(button.dataset.language);
      closeMenu({ focusTrigger: true });
    });

    menu.addEventListener('keydown', (event) => {
      if (menu.hidden) return;
      const currentIndex = getFocusedIndex();

      if (event.key === 'ArrowDown') {
        event.preventDefault();
        focusOption(currentIndex + 1);
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        focusOption(currentIndex - 1);
      } else if (event.key === 'Home') {
        event.preventDefault();
        focusOption(0);
      } else if (event.key === 'End') {
        event.preventDefault();
        focusOption(options.length - 1);
      } else if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        const option = options[currentIndex];
        if (option) {
          setLanguage(option.dataset.language);
          closeMenu({ focusTrigger: true });
        }
      } else if (event.key === 'Tab') {
        closeMenu();
      }
    });

    document.addEventListener('click', (event) => {
      if (!picker.contains(event.target)) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && !menu.hidden) closeMenu({ focusTrigger: true });
    });
  }

  Object.defineProperties(window, {
    PortfolioI18n: {
      value: {
        t,
        setLanguage,
        get language() { return currentLanguage; }
      },
      configurable: false,
      writable: false
    }
  });

  setupLanguagePicker();
  setLanguage(detectInitialLanguage(), { persist: false });
})();
