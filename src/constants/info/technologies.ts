export const TECH_CATEGORIES = [
  {
    category: 'Frontend',
    icon: '🖥️',
    techs: [
      { name: 'React.js', level: 'Avançado' },
      { name: 'Next.js', level: 'Avançado' },
      { name: 'TypeScript', level: 'Avançado' },
      { name: 'Tailwind CSS', level: 'Avançado' },
      { name: 'Vite.js', level: 'Intermediário' },
      { name: 'JavaScript (ES6+)', level: 'Avançado' },
    ],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    techs: [
      { name: 'Node.js', level: 'Avançado' },
      { name: 'Fastify', level: 'Avançado' },
      { name: 'NestJS', level: 'Intermediário' },
      { name: 'Express.js', level: 'Intermediário' },
      { name: 'Python / FastAPI', level: 'Intermediário' },
      { name: 'REST APIs', level: 'Avançado' },
    ],
  },
  {
    category: 'Banco de Dados',
    icon: '🗄️',
    techs: [
      { name: 'PostgreSQL', level: 'Avançado' },
      { name: 'Redis', level: 'Intermediário' },
      { name: 'MongoDB', level: 'Básico' },
      { name: 'Prisma ORM', level: 'Avançado' },
      { name: 'TypeORM', level: 'Intermediário' },
    ],
  },
  {
    category: 'DevOps & Cloud',
    icon: '☁️',
    techs: [
      { name: 'Docker', level: 'Avançado' },
      { name: 'GitHub Actions', level: 'Intermediário' },
      { name: 'AWS (EC2, S3, RDS, Lambda)', level: 'Intermediário' },
      { name: 'Google Cloud Platform', level: 'Intermediário' },
      { name: 'Kubernetes', level: 'Básico' },
      { name: 'Terraform', level: 'Básico' },
      { name: 'CI/CD', level: 'Intermediário' },
    ],
  },
  {
    category: 'Testes & Qualidade',
    icon: '🧪',
    techs: [
      { name: 'Jest', level: 'Intermediário' },
      { name: 'Vitest', level: 'Intermediário' },
      { name: 'Testing Library', level: 'Intermediário' },
      { name: 'TDD', level: 'Intermediário' },
    ],
  },
  {
    category: 'Segurança & Arquitetura',
    icon: '🔐',
    techs: [
      { name: 'JWT / OAuth', level: 'Avançado' },
      { name: 'RBAC', level: 'Avançado' },
      { name: 'DDD', level: 'Avançado' },
      { name: 'Clean Architecture', level: 'Avançado' },
      { name: 'OWASP Top 10', level: 'Intermediário' },
    ],
  },
];

// Mantendo compatibilidade com o código existente
export const TECHNOLOGIES = TECH_CATEGORIES.flatMap((category) =>
  category.techs.map((tech) => ({
    title: tech.name,
    description: `Nível: ${tech.level}`,
    image: '',
    category: category.category,
    level: tech.level,
  })),
);
