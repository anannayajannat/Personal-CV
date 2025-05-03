export default function About() {
    return (
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
  
        <p className="text-lg mb-6">
          I'm a developer passionate about creating intuitive, accessible, and scalable web applications.
          I enjoy working across the stack and constantly exploring new technologies.
        </p>
  
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <ul className="list-disc list-inside grid grid-cols-2 sm:grid-cols-3 gap-2">
            <li>JavaScript</li>
            <li>TypeScript</li>
            <li>React</li>
            <li>Next.js</li>
            <li>Tailwind CSS</li>
            <li>Node.js</li>
            <li>Python</li>
            <li>Git</li>
            <li>Firebase</li>
          </ul>
        </div>
  
        <div>
          <h2 className="text-2xl font-semibold mb-2">Interests</h2>
          <p className="text-lg">
            Open-source, DevOps automation, UI/UX design, AI tools, and writing technical blogs.
          </p>
        </div>
      </section>
    );
  }
  