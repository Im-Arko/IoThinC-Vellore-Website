import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, User } from 'lucide-react';

const Team: React.FC = () => {
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

  const teamMembers = [
    {
      name: 'Alex Chen',
      role: 'President',
      department: 'Computer Science',
      year: '4th Year',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['IoT Architecture', 'Python', 'Leadership'],
      social: { github: '#', linkedin: '#', email: '#' }
    },
    {
      name: 'Priya Sharma',
      role: 'Vice President',
      department: 'Electronics & Communication',
      year: '3rd Year',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Hardware Design', 'Embedded Systems', 'PCB Design'],
      social: { github: '#', linkedin: '#', email: '#' }
    },
    {
      name: 'Raj Patel',
      role: 'Technical Lead',
      department: 'Information Technology',
      year: '4th Year',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Full Stack', 'ML/AI', 'Cloud Computing'],
      social: { github: '#', linkedin: '#', email: '#' }
    },
    {
      name: 'Sarah Kim',
      role: 'Research Head',
      department: 'Computer Science',
      year: '3rd Year',
      image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Data Science', 'Research', 'Analytics'],
      social: { github: '#', linkedin: '#', email: '#' }
    },
    {
      name: 'Mike Johnson',
      role: 'Hardware Lead',
      department: 'Electronics & Communication',
      year: '2nd Year',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['Arduino', 'Sensors', 'Prototyping'],
      social: { github: '#', linkedin: '#', email: '#' }
    },
    {
      name: 'Lisa Wang',
      role: 'Software Lead',
      department: 'Information Technology',
      year: '2nd Year',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400',
      skills: ['React', 'Node.js', 'Mobile Dev'],
      social: { github: '#', linkedin: '#', email: '#' }
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/5 via-transparent to-lime-900/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`text-center mb-16 transform transition-all duration-1000 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-lime-400">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            The brilliant minds driving innovation and leading the future of IoT technology at VIT Vellore.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-cyan-400/50 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 ${
                inView 
                  ? `translate-y-0 opacity-100 delay-${index * 100}` 
                  : 'translate-y-10 opacity-0'
              }`}
            >
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-400 transition-colors">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="text-center mb-4">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                  {member.name}
                </h3>
                <p className="text-cyan-400 text-sm font-semibold mb-1">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.department}</p>
                <p className="text-gray-500 text-xs">{member.year}</p>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {member.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 text-xs bg-gray-700 text-gray-300 rounded-full group-hover:bg-cyan-500/20 group-hover:text-cyan-400 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex justify-center space-x-4">
                <a href={member.social.github} className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all">
                  <Github className="h-5 w-5" />
                </a>
                <a href={member.social.linkedin} className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={member.social.email} className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className={`text-center mt-16 transform transition-all duration-1000 delay-700 ${
          inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
            <h3 className="text-2xl font-bold text-white mb-4">Join Our Team</h3>
            <p className="text-gray-400 mb-6">
              We're always looking for passionate individuals to join our mission of advancing IoT technology.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-lime-500 text-white px-8 py-3 rounded-full font-semibold hover:from-cyan-600 hover:to-lime-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;