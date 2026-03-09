import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    gsap.fromTo(
      sectionRef.current.querySelectorAll('.about-item'),
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="min-h-screen py-20 px-6 relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="about-item text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="about-item flex justify-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 rounded-full blur-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400/50 ring-2 ring-blue-500/30 shadow-2xl shadow-cyan-500/50">
                <img
                  src="/Developer_Image.png"
                  alt="ABUBUCKER"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="about-item space-y-6">
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Professional Developer
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm a passionate freelance developer specializing in creating stunning web and mobile applications. With expertise in modern technologies and frameworks, I bring ideas to life through clean, efficient code.
              </p>
              <p className="text-gray-300 leading-relaxed mb-4">
                My focus is on delivering high-quality digital solutions that not only look great but also provide exceptional user experiences. From concept to deployment, I ensure every project meets the highest standards.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I stay updated with the latest industry trends and technologies to provide cutting-edge solutions including AI integration, responsive design, and modern development practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
