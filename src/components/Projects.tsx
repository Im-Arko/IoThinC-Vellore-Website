import React, { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Play } from 'lucide-react';

const Projects: React.FC = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: 'Smart Campus IoT',
      description: 'Comprehensive IoT solution for campus monitoring with real-time data analytics and automated systems.',
      tech: ['ESP32', 'Python', 'MongoDB', 'React'],
      image: 'https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Live',
      category: 'IoT Infrastructure'
    },
    {
      title: 'AI-Powered Security System',
      description: 'Advanced security monitoring with facial recognition and behavioral analysis using machine learning.',
      tech: ['TensorFlow', 'OpenCV', 'Raspberry Pi', 'Flask'],
      image: 'https://images.pexels.com/photos/2882509/pexels-photo-2882509.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'In Development',
      category: 'AI/ML'
    },
    {
      title: 'Environmental Monitoring',
      description: 'Real-time air quality and weather monitoring system with predictive analytics for environmental insights.',
      tech: ['Arduino', 'LoRaWAN', 'Node.js', 'Chart.js'],
      image: 'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Completed',
      category: 'Environmental Tech'
    },
    {
      title: 'Smart Healthcare Wearable',
      description: 'Wearable device for continuous health monitoring with emergency alert system and data visualization.',
      tech: ['nRF52', 'Flutter', 'Firebase', 'TensorFlow Lite'],
      image: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'Beta Testing',
      category: 'Healthcare IoT'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Live': return 'text-lime-400 border-lime-400';
      case 'In Development': return 'text-cyan-400 border-cyan-400';
      case 'Completed': return 'text-purple-400 border-purple-400';
      case 'Beta Testing': return 'text-yellow-400 border-yellow-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  return (
    <section id="projects" className="py-20 bg-gray-800 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-cyan-900/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Projects</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our cutting-edge projects that demonstrate the power of IoT, AI, and emerging technologies 
            in solving real-world challenges.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 hover:border-cyan-400/50 transform transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 ${
                inView 
                  ? `translate-y-0 opacity-100 delay-${index * 150}` 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  <span className={`px-3 py-1 text-xs font-semibold border rounded-full backdrop-blur-sm ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="mb-3">
                  <span className="text-xs text-cyan-400 font-mono uppercase tracking-wide">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 text-xs bg-gray-700 text-gray-300 rounded-full hover:bg-cyan-500/20 hover:text-cyan-400 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 text-cyan-400 hover:text-white transition-colors group/btn">
                    <Play className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Demo</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group/btn">
                    <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Code</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors group/btn">
                    <ExternalLink className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    <span className="text-sm font-medium">Live</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-12 transform transition-all duration-1000 delay-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-cyan-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;