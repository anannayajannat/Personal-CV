// components/Navbar.tsx
export default function Navbar() {
    return (
      <nav className="w-full bg-white px-6 py-4 shadow sticky top-0 z-50">
        <ul className="flex justify-center gap-6 text-gray-800 font-medium">
          <li><a href="#home" className="hover:text-blue-600">Home</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#research" className="hover:text-blue-600">Research</a></li>
          <li><a href="#publications" className="hover:text-blue-600">Publications</a></li>
          <li><a href="#achievements" className="hover:text-blue-600">Achievements</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
          <li><a href="#download" className="text-blue-600">Download CV</a></li>
        </ul>
      </nav>
    );
  }
  