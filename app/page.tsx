'use client';

import Image from 'next/image';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { SiGooglescholar } from 'react-icons/si';

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-10 text-gray-800">
      {/* Profile Header */}
      <section className="flex flex-col md:flex-row gap-6 items-center">
        <Image
          src="/profile.jpg"
          alt="Profile"
          width={200}
          height={300}
          className="rounded-md object-cover"
        />
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold">Sanjida Jannat Anannaya</h1>
          <p className="text-lg">Research Assistant</p>
          <a
            href="https://iar.ac.in/"
            className="text-blue-500 font-semibold hover:underline block"
          >
            Institute of Advanced Research
          </a>
          <p className="text-sm text-gray-500">
            Quantum Machine Learning | Software Engineering
          </p>
          <p className="text-sm text-gray-500">Dhaka, Bangladesh</p>
          <div className="flex justify-center md:justify-start gap-4 mt-2 text-blue-600 text-xl">
            <a href="mailto:anannaya.jannat@gmail.com"><FaEnvelope /></a>
            <a href="https://github.com/anannayajannat"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sanjida-jannat-anannaya-074a721b2/"><FaLinkedin /></a>
            <a href="https://www.researchgate.net/profile/Sanjida_Anannaya"><SiGooglescholar /></a>
          </div>
          {/* Resume Button */}
          {/* <a
            href="#download" // Replace with actual resume file URL
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded shadow text-sm font-medium"
          >
            View Resume
          </a> */}
        </div>
      </section>

      {/* About */}
      <section className="mt-10">
        <p>
        I’m an enthusiastic and passionate about Software Engineering, with with hands-on experience in Machine Learning,
Deep Learning, and Quantum Computing. I am dedicated to building impactful solutions that bridge the gap between
progressive research and experiential applications and determined to build a successful career as a Software Engineer
in a reputed organization.
        </p>
      </section>

      {/* Experience */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">🧑‍💼 WORK EXPERIENCE</h2>

        <div className="mb-6">
          <h3 className="font-semibold">Research Assistant</h3>
          <p className="text-sm text-gray-600">
            Institute of Advanced Research - <a
            href="https://ece.northsouth.edu/people/dr-sumaiya-tabassum-nimi/"
            className="text-blue-500 font-semibold hover:underline block"
          >
            Dr. Sumaiya Tabassum Nimi 
          </a> · 2025 - Present · Dhaka, Bangladesh
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Developed a hybrid deep learning pipeline utilizing quantum computing.</li>
            <li>Implemented advanced methods, enhancing model reliability across diverse test scenarios.</li>
            <li>Conducted detailed analysis on feature representations, channel attention block module tuning.</li>
            <li>Collaborated on experimental design.</li>
            <li>Contributed in documentation, literature review and paper preparation for publication.</li>
          </ul>
        </div>

        <div className="mb-6">
          <h3 className="font-semibold">Undergraduate Teaching Assistant</h3>
          <p className="text-sm text-gray-600">
            United International University · Dhaka, Bangladesh
          </p>
          <ul className="list-disc ml-5 mt-2 space-y-1">
            <li>Managed to facilitate course content and materials with the lab faculty.</li>
            <li> Checked and evaluated assessments, and judged lab projects.</li>
            <li>Courses supervised: Programming in C++, Object-Oriented Programming, and, Data Structure Algorithm.</li>
          </ul>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-12">
        <h2 className="text-xl font-semibold mb-4">🛠️ PROFESSIONAL SKILLS</h2>
        <div className="flex flex-wrap gap-2 mt-2">
          {[
            'C', 'C++', 'Java', 'Python', 'JavaScript', 'PHP', 'MySQL', 
            'PostgreSQL', 'PennyLane', 'PyTorch', 'TensorFlow', 'Keras',
            'Scikit-Learn', 'Matplotlib', 'Numpy', 'Pandas', 'ReactJS', 'Node.js', 
            'Express.js', 'Spring Boot',  'RestAPI', 'Docker', 'Git', 'GitHub', 'LaTeX',
          ].map((skill) => (
            <span
              key={skill}
              className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

    {/* Education */}
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">🎓 EDUCATION</h2>

      {/* B.Sc. */}
      <div className="mb-4">
        <h3 className="font-semibold">B.Sc. in Computer Science and Engineering</h3>
        <p className="text-sm text-gray-600">
          United International University · 2020 - 2024 · Dhaka, Bangladesh
        </p>
        <p className="text-sm">CGPA: 3.71/4.00 · Major: Data Science, Software Engineering.</p>
      </div>

      {/* HSC */}
      <div className="mb-4">
        <h3 className="font-semibold">Higher Secondary Certificate (HSC)</h3>
        <p className="text-sm text-gray-600">
          Barguna Govt. College · 2016 - 2018 · Barguna, Barisal, Bangladesh
        </p>
        <p className="text-sm">GPA: 5.00/5.00</p>
      </div>

      {/* SSC */}
      <div>
        <h3 className="font-semibold">Secondary School Certificate (SSC)</h3>
        <p className="text-sm text-gray-600">
          Barguna Govt. Girls’ High School · 2014 - 2015 · Barguna, Barisal, Bangladesh
        </p>
        <p className="text-sm">GPA: 5.00/5.00</p>
      </div>
    </section>




      
      {/* Projects */}
      <section id="projects" className="py-16">
  <h2 className="text-xl font-semibold mb-4">💻 University Projects</h2>

  <div className="mt-2">
    <h3 className="text-lg font-semibold">Brew-Breeze Shop — Full-Stack Coffee Bakery App 
        </h3> <p className="text-sm text-gray-700">
        Spring 2024 - Summer 2024   </p>
    <p className="text-sm text-gray-600">
    
      A productivity platform tailored 
    A full-stack monolithic web application designed for a coffee dessert shop, enabling users to browse products,
customer interactions, add items to cart, and manage orders with an admin dashboard using Spring Boot (JAVA)
backend and React.js (Vite) frontend, following a clean MVC architecture, implementing JWT-based authentication,
role-based access, and RESTful APIs.. Utilized PostgreSQL with JPA for data management and REST APIs for
frontend-backend integration
    </p>
    <p className="text-xs mt-1 text-gray-500">
      Tech Stack: Spring Boot, Java, Maven, React (Vite), PostgreSQL, HTML, CSS, JS
    </p>
    <a
      href="https://github.com/anannayajannat/Brew-Breeze/tree/4cf5f94f48766c81bc6d8dda65297d917b3bd084"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm hover:underline mt-1 inline-block"
    >
      <FaGithub/></a>
    
  </div>

  <div className="mt-2">
    <h3 className="text-lg font-semibold">NorthStarLight — Microservices E-Commerce for Shoes</h3>
    <p className="text-sm text-gray-700">
        Summer 2023 - Fall 2024   </p>
        
        <p className="text-sm text-gray-600">
    
      A productivity platform tailored 
    A modular, microservices-based e-commerce platform for shoes, featuring services for authentication, cart,
products, orders, users, and an API gateway. Built with Node.js and PostgreSQL, each service is independently
deployable, supports RESTful APIs, and integrates with a unified frontend. Supports Dockerized deployment, JWT
auth, centralized logging, and scalable service orchestration.
    </p>
    <p className="text-xs mt-1 text-gray-500">
      Tech Stack: Node.js, Express, PostgreSQL, JWT, Drizzle ORM, React (Vite), Docker Compose
    </p>
    <a
      href="https://github.com/anannayajannat/NorthStarLight/tree/169f60e8b6c8b6bf3ee31eac7a3487e2c06837d1"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm hover:underline mt-1 inline-block"
    >
     <FaGithub/>
    </a>
  </div>
  
  {/* CodeKoro */}
  <div>
    <h3 className="text-lg font-semibold">CodeKoro — UIU Competitive Programming Online Judge</h3>
    <p className="text-sm text-gray-700">2023</p>
    <p className="text-sm text-gray-600">
      Built a university-specific competitive programming platform for UIU students, enabling
      practice, real-time contests, and performance tracking. Features include diverse problem
      sets, live rankings, and detailed feedback to foster coding skills and employability.
    </p>
    <p className="text-xs mt-1 text-gray-500">
      Tech stack: React.js, Node.js, Django, Git, PostgreSQL, Figma, Trello (Scrum)
    </p>
  </div>

  {/* PrintKoro */}
  <div>
    <h3 className="text-lg font-semibold">PrintKoro — Smart Self-Service Printing Platform</h3>
    <p className="text-sm text-gray-700">2023</p>
    <p className="text-sm text-gray-600">
      Developed an innovative self-service printing system allowing users to upload and print
      documents via QR codes without sharing files with third parties. The solution ensures secure
      file storage, real-time print status, multi-language support, and cashless payment through a
      mobile app.
    </p>
    <p className="text-xs mt-1 text-gray-500">
      Tech stack: Android SDK, Django, Node.js, Figma, Jira
    </p>
  </div>

  {/* Smart Prison System */}
  <div>
    <h3 className="text-lg font-semibold">
      Smart Prison System — Automated Inmate Management Platform
    </h3>
    <p className="text-sm text-gray-700">2023</p>
    <p className="text-sm text-gray-600">
      Designed a smart system to automate prison operations such as meal distribution, health
      tracking, work assignments, and visitor control. Integrated Arduino, ESP32, NFC, sensors, and
      vending mechanisms to enhance security, efficiency, and resource allocation in correctional
      facilities.
    </p>
    <p className="text-xs mt-1 text-gray-500">Tech stack: Arduino, ESP32, NFC, IoT Sensors</p>
  </div>

  <div className="mt-2">
    <h3 className="text-lg font-semibold">Student Surface — UIU Student Support Platform</h3>
    <p className="text-sm text-gray-700">
        Summer 2022 - Fall 2022   </p>
    <p className="text-sm text-gray-600"> 
      A productivity platform tailored for UIU students, 
      offering access to tutorial resources, problem-solving mentors, 
      a student community, academic achievements, job opportunities, 
      and personal portfolios — all in one centralized portal.
    </p>
    <p className="text-xs mt-1 text-gray-500">Tools: HTML, CSS, PHP, SQL Database, Javascript </p>
    <a
      href="https://github.com/anannayajannat/Student-Surface"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 text-sm hover:underline mt-1 inline-block"
    >
     <FaGithub/>
    </a>
  </div>

</section>

      {/* Publications */}
      <section id="publications" className=" mt-2">
  <h2 className="text-xl font-semibold mb-4">📑 Publications</h2>

  <ul className="list-disc ml-5 space-y-4">
    <li>
      <span className="font-medium">ElectroSortNet:</span> A Novel CNN Approach for E-Waste Classification and IoT-Driven Separation System.  
      <span className="text-gray-700"> In 3rd ICAEEE, Nov 2023 – Feb 2024.</span>
      <p className="text-sm text-gray-700">
      Supervised by: Prof. Dr. Mohammad Motaharul Islam
    </p>
      <a
      href="https://scholar.google.com/citations?view_op=view_citation&hl=en&user=jdS2fJ0AAAAJ&citation_for_view=jdS2fJ0AAAAJ:u5HHmVD_uO8C"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline flex items-center gap-4 text-blue-600 text-sm" >
      <SiGooglescholar/> Paper Link
    </a>
    </li>
    
    <li>
      <span className="font-medium">Innovative Online Judge:</span> An Innovative Online Judge for UIU’s Competitive Programming.  
      <span className="text-gray-700"> Presented in Final Year Defense, Mar 2024 – Oct 2024.</span>
      <p className="text-sm text-gray-700">
      Supervised by: Prof. Dr. Suman Ahmmed
    </p>
      <a
      href="https://github.com/anannayajannat/Codekoro-FYDP"
      target="_blank"
      rel="noopener noreferrer"
      className="hover:underline flex items-center gap-4 text-blue-600 text-sm">
      <FaGithub/>Paper Link
    </a>
    </li>
    
  </ul>

</section>


      {/* Research Projects */}
      <section id="research" className="py-16">
  <h2 className="text-xl font-semibold mb-4">🌐 Research Projects</h2>

  <div className="mt-2">
    <h3 className="text-lg font-semibold">
      Quantum Assisted Deep Learning Addressing the Generalization and Adaptation Challenges
    </h3>
    <p className="text-sm text-gray-700">
      Supervised by: Dr. NIMI | In Progress, Institute for Advanced Research (IAR)
    </p>
    <p className="text-sm text-gray-700">
      Designed a modular hybrid deep learning architecture integrating quantum layers for improved generalization and adaptation.
    </p>
    <p className="text-xs mt-1 text-gray-500">
      Tools: TensorFlow, PennyLane, Scikit-Learn, Matplotlib
    </p>
  </div>

  {/* AGY Launcher */}
  <div>
    <h3 className="text-lg font-semibold">
      AGY Launcher: Designing an Accessible Smartphone Launcher for Elderly Users
    </h3>
    <p className="text-sm text-gray-700">Supervised by: Lecturer Tamzid Hossain | Reviewed in CSCW ’2025 | Type: Journal Paper</p>
    <p className="text-sm text-gray-600">
      Enhancing usability and independence for elderly users through simplified and intuitive smartphone interfaces.
    </p>
    
    <p className="text-xs mt-1 text-gray-500">
      Tools: Figma, Miro, User Design Guide, Python, Scikit-Learn, TensorFlow, Transfer Learning
    </p>
  </div>

  {/* Mushroom Classification */}
  <div>
    <h3 className="text-lg font-semibold">
      A Novel Deep Learning Approach Towards Classification of Edible, Non-Edible and Poisonous Mushrooms
    </h3>
    <p className="text-sm text-gray-700">Supervised by Lecturer Raiyan Rahman |
     Reviewed in ICCA ’2024 | Type: Conference Paper</p>
    <p className="text-sm text-gray-600">
      Developed a deep learning model to accurately classify mushrooms, improving safety and reliability in edible mushroom identification.
    </p>
    
    <p className="text-xs mt-1 text-gray-500">
      Tools: Figma, Jira, User Design Guide, Python, Scikit-Learn, TensorFlow, Transfer Learning
    </p>
  </div>


  <div className="mt-4">
    <h3 className="text-lg font-semibold">
      Bagging-Based Ensemble Learning for Multiclass Pox Skin Lesion Detection
    </h3>
    <p className="text-sm text-gray-700">
      Accepted in ICCIT 2024
    </p>
    <p className="text-sm text-gray-700">
      Developed an ensemble framework combining ML models and pretrained CNNs for accurate classification of pox skin lesions.
    </p>
    <p className="text-xs mt-1 text-gray-500">
      Tools: Python, Scikit-Learn, TensorFlow, Transfer Learning
    </p>
  </div>

  <div className="mt-4">
    <h3 className="text-lg font-semibold">
      "Can I enjoy my hobbies like before?” – A Randomized To-Do App Study
    </h3>
    <p className="text-sm text-gray-700">
      Supervised by: Dr. Jannatun Noor Mukta & Lecturer Mr. Iftekharul Abedeen | 
      Submitted to CHI LBW 2025
    </p>
    <p className="text-sm text-gray-700">
      Explored hobby engagement improvement through randomized to-do app interactions and habit tracking.
    </p>
    <p className="text-xs mt-1 text-gray-500">
      Tools: Figma, React Native, User Study Design
    </p>
  </div>

  {/* Personalized Food Recommender */}
  <div>
    <h3 className="text-lg font-semibold">
      "Can AI help me with healthy eating?" Designing a Personalized LLM-based Food Recommender System
    </h3>
    <p className="text-sm text-gray-700">Supervised by: Dr. Jannatun Noor Mukta & Mr. Iftekharul Abedeen | Reviewd in UIST-2025</p>
    <p className="text-sm text-gray-600">
      Leveraging large language models to provide personalized, nutritionally balanced food recommendations based on user preferences and dietary requirements.
    </p>
     <p className="text-xs mt-1 text-gray-500">
      Tools: Python, Hugging Face Transformers, Pandas, Numpy, Streamlit
    </p>
  </div>

  {/* Cybersecurity Transformer */}
  <div>
    <h3 className="text-lg font-semibold">
      Leveraging CodeBERT for Automated Detection of Web Vulnerabilities, SQL Injections, and Malicious PDFs: A Transformer-Based Approach for Enhanced Cybersecurity
    </h3>
    <p className="text-sm text-gray-700">| Supervised by: Mir Moynuddin Ahmed Shibly | In Progress</p>
    <p className="text-sm text-gray-600">
      Developed a transformer-based model to automatically detect security vulnerabilities in web applications and files, enhancing threat prevention and cybersecurity reliability.
    </p>
    <p className="text-xs mt-1 text-gray-500">
      Tools: Python, CodeBERT, Transformers, SQL, PDF parsing libraries
    </p>
  </div>

  <div className="mt-4">
    <h3 className="text-lg font-semibold">
      Advanced Predictive Analytics for Healthcare
    </h3>
    <p className="text-sm text-gray-700">
      Enhancing Patient Outcomes Through EHR-Based Modeling | In Progress
    </p>
    <p className="text-sm text-gray-700">
      Designing predictive pipelines using longitudinal EHR data for outcome prediction and risk stratification.
    </p>
    <p className="text-xs mt-1 text-gray-500">
      Tools: Python, Pandas, Scikit-Learn, XGBoost
    </p>
  </div>
</section>


      {/* Achievements */}
      <section id="achievements" className="py-16">
  <h2 className="text-xl font-semibold mb-4">🏆 Award & Honors</h2>
  <ul className="list-disc ml-5 space-y-2">
    <li>Smart Prison — 1st Runner-up, UIU CSE Project Show (Electronics Lab Project), Nov 2023</li>
    <li>PrintKoro — 2nd Runner-up, UIU CSE Project Show (System Analysis and Design Lab), July 2023</li>
    <li>25%, 50% & 100% Scholarship - UIU Scholarship Award Program, Spring 2020 - Fall 2024 </li>
    <li>General & Talentpool ScholarShip - SSC & HSC - Board Scholarship Program</li>
    
  </ul>
</section>


        {/* Download CV */}
        <section id="download" className="mt-12">
  <h2 className="text-xl font-semibold mb-4">📄 DOWNLOAD MY CV</h2>
  <div className="flex gap-x-4">
    <a
      href="\CV_SJAnannaya.pdf"
      download
      className="px-4 py-2 bg-purple-100/20 text-blue-800 rounded border border-blue-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
    >
      General CV
    </a>
    <a
      href="\Acamedic_CV_SJAnannaya.pdf"
      download
      className="px-4 py-2 bg-purple-100/20 text-blue-800 rounded border border-blue-300 hover:bg-blue-600 hover:text-white transition-colors duration-300"
    >
      Academic CV
    </a>
  </div>
</section>




        <section id="certifications" className="py-16">
        <h2 className="text-xl font-semibold mb-4">📜 Certifications & Courses</h2>
        <ul className="list-disc ml-5 space-y-2 text-sm text-gray-600">
            <li><span className="font-medium">BOHUBRIHI:</span> Full Stack Web Development (MERN) — 2024</li>
            <li><span className="font-medium">Coursera:</span> Google Cloud Services and Spring Boot — Ongoing</li>
        </ul>
        </section>


            {/* Contact */}
        <section id="contact" className="mt-12">
            <h2 className="text-xl font-semibold mb-4">📩 CONNECT WITH ME / ANY QUERIES</h2>
            <p>
            Feel free to reach out for collaborations, discussions, or questions! Email:{' '}
            <a href="mailto:anannaya.jannat@gmail.com" className="text-blue-500 underline">
                anannaya.jannat@gmail.com
            </a>
            </p>
        </section>

      
    </main>
  );
}
