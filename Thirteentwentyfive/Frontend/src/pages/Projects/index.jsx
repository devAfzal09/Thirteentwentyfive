import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      title: 'Grok 4 Assistant',
      description: 'Advanced AI chatbot with real-time reasoning, image analysis, and tool integration.',
      tech: 'React, Node.js, AI/ML',
      link: '#',
    },
    {
      title: 'Particle Universe Simulator',
      description: 'Interactive web app visualizing quantum particles and cosmic simulations.',
      tech: 'Three.js, WebGL, Framer Motion',
      link: '#',
    },
    {
      title: 'Animated Portfolio Engine',
      description: 'Dynamic portfolio builder with smooth transitions and hover animations.',
      tech: 'React, Tailwind, Framer Motion',
      link: '#',
    },
    {
      title: 'AI Image Generator Dashboard',
      description: 'User-friendly interface for generating and editing AI-powered images.',
      tech: 'Next.js, Stable Diffusion API',
      link: '#',
    },
    {
      title: 'Real-Time Code Collaborator',
      description: 'Live coding environment with syntax highlighting and multiplayer support.',
      tech: 'Socket.io, Monaco Editor',
      link: '#',
    },
    {
      title: 'Futuristic Data Visualizer',
      description: 'Interactive charts and graphs with physics-based animations.',
      tech: 'D3.js, React Spring',
      link: '#',
    },
  ];

  return (
    <>
      {/* Animated Background Layers */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[linear-gradient(120deg,#fbc2eb,#fff1c1,#fddcdf,#e6c8ff)]">
        {/* Floating Pastel Glow Orbs */}
        <div className="absolute inset-0">
          <div className="orb orb-1" />
          <div className="orb orb-2" />
          <div className="orb orb-3" />
          <div className="orb orb-4" />
          <div className="orb orb-5" />
        </div>

        {/* Soft Animated Wave at Bottom */}
        <svg className="absolute bottom-0 w-full" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="#fbc2eb"
            fillOpacity="0.4"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,176C960,192,1056,192,1152,181.3C1248,171,1344,149,1392,138.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,208C384,203,480,181,576,170.7C672,160,768,160,864,165.3C960,171,1056,181,1152,186.7C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.path
            fill="#e6c8ff"
            fillOpacity="0.3"
            animate={{
              d: [
                "M0,256L48,245.3C96,235,192,213,288,208C384,203,480,213,576,218.7C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,218.7C96,213,192,203,288,197.3C384,192,480,192,576,202.7C672,213,768,235,864,245.3C960,256,1056,256,1152,245.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,256L48,245.3C96,235,192,213,288,208C384,203,480,213,576,218.7C672,224,768,224,864,213.3C960,203,1056,181,1152,181.3C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
              ],
            }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="relative min-h-screen py-26 px-6">
        <div className="container mx-auto max-w-7xl">
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-5xl md:text-7xl font-bold text-center mb-20 text-gray-800"
          >
            My Projects
          </motion.h1>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -20, scale: 1.05 }}
                transition={{
                  type: "tween",
                  ease: "easeOut",
                  duration: 0.2, // Super fast & smooth hover
                  delay: index * 0.1 // Only applies to entrance animation
                }}
                className="group relative bg-white/70 backdrop-blur-md rounded-2xl overflow-hidden border border-white/50 shadow-xl cursor-pointer [will-change:transform] hover:border-pink-300/80 hover:shadow-pink-200/50 hover:shadow-2xl"
              >
                {/* Placeholder Image */}
                <div className="h-64 bg-gradient-to-br from-pink-200/60 via-yellow-100/60 to-purple-200/60 relative overflow-hidden">
                  <div className="absolute inset-0 bg-white/20 group-hover:bg-white/5 transition-opacity duration-500" />
                </div>

                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">{project.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <p className="text-sm text-pink-600 mb-8 font-medium">{project.tech}</p>

                  {/* Smooth CTA on Hover */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileHover={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="absolute inset-0 flex items-end justify-center pb-12 bg-gradient-to-t from-white/90 via-white/20 to-transparent pointer-events-none"
                  >
                    <a
                      href={project.link}
                      className="px-8 py-4 bg-pink-500 text-white rounded-full font-semibold hover:bg-pink-600 transition-colors duration-300 shadow-xl pointer-events-auto"
                    >
                      View Project →
                    </a>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .orb {
          position: absolute;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(251, 194, 235, 0.5), transparent 70%);
          filter: blur(80px);
          animation: float 25s infinite linear;
        }
        .orb-1 { width: 600px; height: 600px; top: -10%; left: -10%; background: radial-gradient(circle, rgba(251, 194, 235, 0.6), transparent); animation-delay: 0s; }
        .orb-2 { width: 800px; height: 800px; bottom: -20%; right: -15%; background: radial-gradient(circle, rgba(255, 241, 193, 0.5), transparent); animation-delay: -5s; }
        .orb-3 { width: 500px; height: 500px; top: 20%; right: 5%; background: radial-gradient(circle, rgba(253, 220, 223, 0.5), transparent); animation-delay: -10s; }
        .orb-4 { width: 700px; height: 700px; bottom: 15%; left: 10%; background: radial-gradient(circle, rgba(230, 200, 255, 0.5), transparent); animation-delay: -15s; }
        .orb-5 { width: 550px; height: 550px; top: 40%; left: 30%; background: radial-gradient(circle, rgba(255, 200, 220, 0.4), transparent); animation-delay: -8s; }

        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(80px, -120px) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
      `}</style>
    </>
  );
}