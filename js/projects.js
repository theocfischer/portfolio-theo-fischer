(() => {
  'use strict';

  const { escapeHTML } = window.PortfolioUtils;

  const projectData = [
    {
      id: 'lagoa-dos-patos',
      highlight: true,
      image: 'assets/images/projects/banner-mostra-cientifica.webp',
      imageFit: 'contain',
      imageWidth: 1100,
      imageHeight: 1467,
      github: 'https://github.com/theocfischer/analise-dados-ambientais-lagoa-dos-patos',
      technologies: {
        pt: ['Python', 'pandas', 'NumPy', 'Jupyter', 'Matplotlib', 'Dados ambientais'],
        en: ['Python', 'pandas', 'NumPy', 'Jupyter', 'Matplotlib', 'Environmental data'],
        es: ['Python', 'pandas', 'NumPy', 'Jupyter', 'Matplotlib', 'Datos ambientales']
      },
      content: {
        pt: {
          title: 'Análise de Dados Ambientais: Lagoa dos Patos',
          subtitle: 'Estágio na FURG · Dados',
          status: 'Concluído',
          description: 'Projeto do estágio obrigatório na FURG. Tratei bases públicas sobre a Lagoa dos Patos, gerei análises e organizei os resultados em notebook e pôster.',
          details: ['Tratamento de bases reais com falhas e formatos diferentes', 'Análise de pH, salinidade, oxigênio, turbidez e transparência', 'Resultados apresentados na Mostra Científica do IFRS'],
          imageAlt: 'Pôster da Mostra Científica sobre a análise da qualidade da água da Lagoa dos Patos'
        },
        en: {
          title: 'Environmental Data Analysis: Lagoa dos Patos',
          subtitle: 'FURG internship · Data',
          status: 'Completed',
          description: 'Project from my required internship at FURG. I cleaned public Lagoa dos Patos datasets, generated analyses and organized the results in a notebook and poster.',
          details: ['Cleaning real datasets with missing values and different formats', 'Analysis of pH, salinity, dissolved oxygen, turbidity and transparency', 'Results presented at the IFRS Scientific Exhibition'],
          imageAlt: 'Scientific exhibition poster about water-quality analysis in Lagoa dos Patos'
        },
        es: {
          title: 'Análisis de Datos Ambientales: Lagoa dos Patos',
          subtitle: 'Prácticas en FURG · Datos',
          status: 'Finalizado',
          description: 'Proyecto de mis prácticas obligatorias en FURG. Traté bases públicas de Lagoa dos Patos, generé análisis y organicé los resultados en notebook y póster.',
          details: ['Tratamiento de bases reales con datos faltantes y formatos distintos', 'Análisis de pH, salinidad, oxígeno, turbidez y transparencia', 'Resultados presentados en la Muestra Científica del IFRS'],
          imageAlt: 'Póster de la muestra científica sobre la calidad del agua de Lagoa dos Patos'
        }
      }
    },
    {
      id: 'radar-candidaturas',
      highlight: false,
      image: 'assets/images/projects/radar-candidaturas.webp',
      imageWidth: 1600,
      imageHeight: 1000,
      github: 'https://github.com/theocfischer/radar-de-candidaturas',
      demo: 'https://radar-de-candidaturas-demo.vercel.app/',
      technologies: {
        pt: ['JavaScript', 'Node.js', 'Express', 'SQL', 'API REST', 'Dashboard'],
        en: ['JavaScript', 'Node.js', 'Express', 'SQL', 'REST API', 'Dashboard'],
        es: ['JavaScript', 'Node.js', 'Express', 'SQL', 'API REST', 'Dashboard']
      },
      content: {
        pt: {
          title: 'Radar de Candidaturas',
          subtitle: 'Projeto pessoal · Full stack',
          status: 'Concluido',
          description: 'Comecei esse projeto porque minha busca por vaga virou coisa demais para controlar no bloco de notas. A ideia é reunir empresas, vagas, etapas, filtros e indicadores em uma tela própria.',
          details: ['Cadastro de empresas, vagas e etapas do processo', 'Filtros e indicadores para acompanhar a busca', 'Repositório em organização antes da publicação'],
          imageAlt: 'Tela do Radar de Candidaturas com indicadores, filtros e lista de vagas'
        },
        en: {
          title: 'Application Tracker',
          subtitle: 'Personal project · Full stack',
          status: 'Completed',
          description: 'I started this project because my own job search became too much to track in notes. The idea is to bring companies, jobs, stages, filters and indicators into one screen.',
          details: ['Company, job and hiring-stage records', 'Filters and indicators to track the search', 'Repository being organized before publication'],
          imageAlt: 'Application Tracker screen with indicators, filters and a job list'
        },
        es: {
          title: 'Radar de Candidaturas',
          subtitle: 'Proyecto personal · Full stack',
          status: 'Finalizado',
          description: 'Empecé este proyecto porque mi propia búsqueda de empleo se volvió demasiado grande para controlarla en notas. La idea es reunir empresas, vacantes, etapas, filtros e indicadores en una pantalla.',
          details: ['Registro de empresas, vacantes y etapas del proceso', 'Filtros e indicadores para seguir la búsqueda', 'Repositorio en organización antes de la publicación'],
          imageAlt: 'Pantalla del Radar de Candidaturas con indicadores, filtros y lista de vacantes'
        }
      }
    },
    {
      id: 'projeto-quadras',
      highlight: false,
      image: 'assets/images/projects/projeto-quadras.webp',
      imageWidth: 1280,
      imageHeight: 720,
      github: 'https://github.com/theocfischer/ProjetoQuadrasIFRS',
      technologies: {
        pt: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'bcrypt', 'Sessões'],
        en: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'bcrypt', 'Sessions'],
        es: ['Node.js', 'Express', 'MySQL', 'JavaScript', 'bcrypt', 'Sesiones']
      },
      content: {
        pt: {
          title: 'ProjetoQuadrasIFRS',
          subtitle: 'Projeto acadêmico · Web',
          status: 'Concluído',
          description: 'Sistema acadêmico de agendamento de quadras, com cadastro, login, sessões, regras de conflito, CRUD e banco de dados MySQL.',
          details: ['Autenticação com bcrypt e controle de sessão', 'CRUD de solicitações de agendamento', 'Validação de conflito de horários com MySQL'],
          imageAlt: 'Tela de login do Sistema de Agendamento IFRS'
        },
        en: {
          title: 'ProjetoQuadrasIFRS',
          subtitle: 'Academic project · Web',
          status: 'Completed',
          description: 'An academic sports-court booking system with registration, login, sessions, conflict rules, CRUD operations and a MySQL database.',
          details: ['Authentication with bcrypt and session control', 'CRUD for booking requests', 'Schedule-conflict validation with MySQL'],
          imageAlt: 'Login screen from the IFRS sports-court booking system'
        },
        es: {
          title: 'ProjetoQuadrasIFRS',
          subtitle: 'Proyecto académico · Web',
          status: 'Finalizado',
          description: 'Sistema académico de reserva de canchas con registro, login, sesiones, reglas de conflicto, CRUD y base de datos MySQL.',
          details: ['Autenticación con bcrypt y control de sesión', 'CRUD de solicitudes de reserva', 'Validación de conflictos de horario con MySQL'],
          imageAlt: 'Pantalla de inicio de sesión del sistema de reservas del IFRS'
        }
      }
    },
    {
      id: 'assistente-financeiro',
      highlight: false,
      wideAtTablet: true,
      image: 'assets/images/projects/assistente-financeiro.webp',
      imageWidth: 1600,
      imageHeight: 1000,
      github: 'https://github.com/theocfischer/edu-financeiro-agente-ia',
      technologies: {
        pt: ['Python', 'Streamlit', 'IA aplicada', 'Segurança digital', 'Documentação'],
        en: ['Python', 'Streamlit', 'Applied AI', 'Digital safety', 'Documentation'],
        es: ['Python', 'Streamlit', 'IA aplicada', 'Seguridad digital', 'Documentación']
      },
      content: {
        pt: {
          title: 'Assistente Financeiro Educacional',
          subtitle: 'Bootcamp Bradesco/DIO · Python',
          status: 'Concluído',
          description: 'Protótipo em Python e Streamlit para responder dúvidas de organização financeira e segurança digital usando uma base local de conhecimento.',
          details: ['Interface simples para perguntas e respostas', 'Base local de conhecimento estruturada', 'Documentação do projeto no GitHub'],
          imageAlt: 'Tela do Edu, assistente financeiro educacional desenvolvido com Streamlit'
        },
        en: {
          title: 'Educational Finance Assistant',
          subtitle: 'Bradesco/DIO Bootcamp · Python',
          status: 'Completed',
          description: 'A Python and Streamlit prototype for answering questions about personal finance and digital safety using a local knowledge base.',
          details: ['Simple question-and-answer interface', 'Structured local knowledge base', 'Project documentation on GitHub'],
          imageAlt: 'Screen of Edu, an educational finance assistant built with Streamlit'
        },
        es: {
          title: 'Asistente Financiero Educativo',
          subtitle: 'Bootcamp Bradesco/DIO · Python',
          status: 'Finalizado',
          description: 'Prototipo en Python y Streamlit para responder preguntas sobre organización financiera y seguridad digital usando una base local de conocimiento.',
          details: ['Interfaz simple de preguntas y respuestas', 'Base local de conocimiento estructurada', 'Documentación del proyecto en GitHub'],
          imageAlt: 'Pantalla de Edu, un asistente financiero educativo creado con Streamlit'
        }
      }
    }
  ];

  const projectList = document.querySelector('[data-projects-list]');

  function getProjectContent(project) {
    const language = window.PortfolioI18n?.language || 'pt';
    return project.content[language] || project.content.pt;
  }

  function getProjectTechnologies(project) {
    const language = window.PortfolioI18n?.language || 'pt';
    return project.technologies?.[language] || project.technologies?.pt || [];
  }

  function createTagList(tags = [], limit = Infinity) {
    return tags.slice(0, limit).map((tag) => `<li>${escapeHTML(tag)}</li>`).join('');
  }

  function createDetails(details = []) {
    if (!details.length) return '';
    return `<ul class="project-details">${details.map((detail) => `<li>${escapeHTML(detail)}</li>`).join('')}</ul>`;
  }

  function createProjectCard(project) {
    const i18n = window.PortfolioI18n;
    const content = getProjectContent(project);
    const highlighted = Boolean(project.highlight);
    const hasRepository = Boolean(project.github);
    const hasDemo = Boolean(project.demo);
    const statusClass = /desenvolvimento|development|desarrollo/i.test(content.status) ? ' badge-progress' : '';
    const cardClasses = [
      'project-card',
      highlighted ? 'highlight' : 'compact',
      project.wideAtTablet ? 'project-card--wide' : '',
      'reveal'
    ].filter(Boolean).join(' ');

    const demoAction = hasDemo
      ? `<a class="btn btn-primary" href="${escapeHTML(project.demo)}" target="_blank" rel="noopener noreferrer">${escapeHTML(i18n?.t('actions.demo', 'Ver demo') || 'Ver demo')}</a>`
      : '';

    const repositoryAction = hasRepository
      ? `<a class="btn btn-secondary" href="${escapeHTML(project.github)}" target="_blank" rel="noopener noreferrer">${escapeHTML(i18n?.t('actions.github', 'Ver código') || 'Ver código')}</a>`
      : `<span class="btn btn-disabled" aria-disabled="true">${escapeHTML(i18n?.t('actions.repositoryPlanned', 'Repositório em organização') || 'Repositório em organização')}</span>`;

    const projectActions = `<div class="project-actions">${demoAction}${repositoryAction}</div>`;

    const expandLabel = `${i18n?.t('projects.expandImage', 'Ampliar imagem') || 'Ampliar imagem'}: ${content.title}`;

    return `
      <article class="${cardClasses}" data-project-id="${escapeHTML(project.id)}">
        <div class="project-media ${project.imageFit === 'contain' ? 'is-contain' : ''}">
          <button class="project-image-button" type="button" data-project-image="${escapeHTML(project.image)}" data-project-caption="${escapeHTML(content.title)}" aria-label="${escapeHTML(expandLabel)}">
            <img src="${escapeHTML(project.image)}" alt="${escapeHTML(content.imageAlt)}" loading="lazy" decoding="async" width="${project.imageWidth || 1600}" height="${project.imageHeight || 1000}">
            <span class="project-image-hint" aria-hidden="true">
              <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"></circle><path d="m20 20-4-4M11 8v6M8 11h6"></path></svg>
            </span>
          </button>
        </div>
        <div class="project-content">
          <div class="project-topline">
            <div class="project-statuses">
              ${highlighted ? `<span class="badge badge-featured">${escapeHTML(i18n?.t('projects.featured', 'Destaque') || 'Destaque')}</span>` : ''}
              <span class="badge${statusClass}">${escapeHTML(content.status)}</span>
            </div>
            <span class="project-context">${escapeHTML(content.subtitle)}</span>
          </div>
          <h3>${escapeHTML(content.title)}</h3>
          <p>${escapeHTML(content.description)}</p>
          ${createDetails(content.details)}
          <ul class="tag-list" aria-label="${escapeHTML(i18n?.t('projects.technologiesLabel', 'Tecnologias do projeto') || 'Tecnologias do projeto')}">
            ${createTagList(getProjectTechnologies(project), highlighted ? 6 : 5)}
          </ul>
          ${projectActions}
        </div>
      </article>
    `;
  }

  function renderProjects() {
    if (!projectList) return;
    const featuredProject = projectData.find((project) => project.highlight);
    const secondaryProjects = projectData.filter((project) => project !== featuredProject);

    projectList.innerHTML = `
      ${featuredProject ? `<div class="featured-project">${createProjectCard(featuredProject)}</div>` : ''}
      <div class="project-grid">${secondaryProjects.map(createProjectCard).join('')}</div>
    `;

    projectList.querySelectorAll('img').forEach((image) => {
      image.addEventListener('error', () => image.closest('.project-media')?.remove(), { once: true });
    });

    window.dispatchEvent(new CustomEvent('portfolio:projectsrendered', { detail: { root: projectList } }));
  }

  window.addEventListener('portfolio:languagechange', renderProjects);
  renderProjects();
})();
