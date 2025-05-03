import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';

type Props = {
  emoji?: string;
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  acknowledgement?: string;
};

export default function ProjectCard({
  emoji = '🛠',
  name,
  description,
  tech,
  github,
  demo,
  acknowledgement,
}: Props) {
  return (
    <div className="border border-gray-300 dark:border-gray-700 p-5 rounded-lg shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800">
      <h3 className="text-xl font-semibold flex items-center gap-2">
        <span className="text-2xl">{emoji}</span>
        {name}
      </h3>

      <p className="mt-2 text-gray-700 dark:text-gray-300">{description}</p>

      {acknowledgement && (
        <p className="mt-2 text-sm italic text-gray-500 dark:text-gray-400">
          <strong>Acknowledgements:</strong> {acknowledgement}
        </p>
      )}

      <ul className="flex flex-wrap gap-2 mt-3 text-sm">
        {tech.map((item) => (
          <li
            key={item}
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 px-2 py-1 rounded text-xs"
          >
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-4 flex gap-4 items-center">
        {github && (
          <Link
            href={github}
            target="_blank"
            className="flex items-center gap-1 text-blue-600 hover:underline"
          >
            <FaGithub />
            GitHub
          </Link>
        )}
        {demo && (
          <Link href={demo} target="_blank" className="text-blue-600 hover:underline">
            Live Demo
          </Link>
        )}
      </div>
    </div>
  );
}
