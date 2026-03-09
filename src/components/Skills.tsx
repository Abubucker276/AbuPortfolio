import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Palette, Smartphone, Brain, Globe, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    {
      icon: <Code2 size={40} />,
      title: 'HTML',
      description: 'Semantic markup and modern HTML5',
    },
    {
      icon: <Palette size={40} />,
      title: 'CSS',
      description: 'Advanced styling and animations',
    },
    {
      icon: <Zap size={40} />,
      title: 'JavaScript',
      description: 'Modern ES6+ and frameworks',
    },
    {
      icon: <Smartphone size={40} />,
      title: 'Flutter',
      description: 'Cross-platform mobile apps',
    },
    {
      icon: <Globe size={40} />,
      title: 'Mobile App Development',
      description: 'iOS and Android applications',
    },
    {
      icon: <Brain size={40} />,
      title: 'AI Integration',
      description: 'Machine learning and AI solutions',
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.skill-card'),
      { opacity: 0, scale: 0.8, y: 50 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.1,
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
      id="skills"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                {skill.title}
              </h3>
              <p className="text-gray-400">{skill.description}</p>
              <div className="mt-6 h-2 bg-gray-800 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transform origin-left group-hover:scale-x-100 scale-x-75 transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
