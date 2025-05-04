import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'bots', name: 'WhatsApp Bots' },
    { id: 'ai', name: 'AI Agents' },
  ];

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      categories: ['web', 'all'],
      description: 'A full-featured online store with inventory management.',
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      categories: ['mobile', 'all'],
      description: 'Mobile application for tracking workouts and nutrition.',
      tags: ['Flutter', 'Firebase'],
    },
    {
      id: 3,
      title: 'Customer Support Bot',
      categories: ['bots', 'all'],
      description: 'WhatsApp bot for handling customer inquiries 24/7.',
      tags: ['WhatsApp API', 'NLP'],
    },
    {
      id: 4,
      title: 'Content Recommendation Engine',
      categories: ['ai', 'all'],
      description: 'AI-powered system for personalized content recommendations.',
      tags: ['Python', 'Machine Learning'],
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      categories: ['web', 'all'],
      description: 'Property listing and management web application.',
      tags: ['Vue.js', 'Express', 'PostgreSQL'],
    },
    {
      id: 6,
      title: 'Delivery Tracking App',
      categories: ['mobile', 'all'],
      description: 'Real-time package tracking for delivery services.',
      tags: ['Flutter', 'Google Maps API'],
    },
    {
      id: 7,
      title: 'Food Delivery Website',
      categories: ['web', 'all'],
      description: 'A full-featured online store with inventory management.',
      tags: ['React', 'Node.js', 'Firebase'],
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(
        project => Array.isArray(project.categories) && project.categories.map(c => c.trim().toLowerCase()).includes(activeCategory.trim().toLowerCase())
      );
  
  console.log('activeCategory:', activeCategory, 'filteredProjects:', filteredProjects);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Portfolio</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="mb-2"
            >
              {category.name}
            </Button>
          ))}
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-xl bg-card border border-muted card-hover"
            >
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  alt={`${project.title} project`} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                  src="https://images.unsplash.com/photo-1648134859182-98df6e93ef58" 
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="p-2 rounded-full bg-primary/20 text-primary">
                    <ArrowRight size={16} />
                  </div>
                </div>

                <p className="text-foreground/70 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 text-xs rounded-full bg-muted text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Portfolio;
