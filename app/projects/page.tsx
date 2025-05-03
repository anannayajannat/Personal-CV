'use client';
import ProjectCard from '../../components/ProjectCard';

const projects = [
  {
    name: 'Portfolio Website',
    description: 'A responsive personal portfolio built with Next.js and Tailwind CSS.',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/username/portfolio',
    demo: 'https://username.github.io/portfolio',
  },
  {
    name: 'AI Food Recommender',
    description: 'ML-powered app recommending food based on personal health data.',
    tech: ['Python', 'TensorFlow', 'Flask'],
    github: 'https://github.com/username/food-recommender',
  },
  {
    name: 'Online Judge System',
    description: 'An efficient multi-server online judge built with caching layers.',
    tech: ['Node.js', 'Redis', 'Docker'],
    github: 'https://github.com/username/online-judge',
  },
];

export default function Projects() {
  return (
    <section className="max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <ProjectCard key={i} {...proj} />
        ))}
      </div>
    </section>
  );
}
