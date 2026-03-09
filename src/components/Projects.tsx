import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Briefcase, Globe, Smartphone, MessageSquare } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio with 3D animations and smooth transitions',
      icon: <Briefcase size={32} />,
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Business Landing Page',
      description: 'Professional landing page with conversion optimization',
      icon: <Globe size={32} />,
      gradient: 'from-blue-500 to-purple-600',
    },
    {
      title: 'Mobile App UI',
      description: 'Beautiful cross-platform mobile application interface',
      icon: <Smartphone size={32} />,
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'AI Chatbot Website',
      description: 'Intelligent chatbot with natural language processing',
      icon: <MessageSquare size={32} />,
      gradient: 'from-pink-500 to-red-600',
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.project-card'),
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card glass-card rounded-2xl overflow-hidden group cursor-pointer"
            >
              <div className={`relative h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="relative text-white transform group-hover:scale-110 transition-transform duration-300">
                  {project.icon}
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6">{project.description}</p>
                <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group/btn">
                  <span className="font-semibold">View Project</span>
                  <ExternalLink size={20} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
