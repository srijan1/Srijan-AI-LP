import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import './portfolio.css';

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
      imageUrl: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', // Example image
      tags: ['React', 'Node.js', 'MongoDB'],
    },
    {
      id: 2,
      title: 'Fitness Tracking App',
      categories: ['mobile', 'all'],
      description: 'Mobile application for tracking workouts and nutrition.',
      imageUrl: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80', // Example image
      tags: ['Flutter', 'Firebase'],
    },
    {
      id: 3,
      title: 'Customer Support Bot',
      categories: ['bots', 'all'],
      description: 'WhatsApp bot for handling customer inquiries 24/7.',
      imageUrl: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', // Example image
      tags: ['WhatsApp API', 'NLP'],
    },
    {
      id: 4,
      title: 'Content Recommendation Engine',
      categories: ['ai', 'all'],
      description: 'AI-powered system for personalized content recommendations.',
      imageUrl: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80', // Example image
      tags: ['Python', 'Machine Learning'],
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      categories: ['web', 'all'],
      description: 'Property listing and management web application.',
      imageUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=773&q=80', // Example image
      tags: ['Vue.js', 'Express', 'PostgreSQL'],
    },
    {
      id: 6,
      title: 'Delivery Tracking App',
      categories: ['mobile', 'all'],
      description: 'Real-time package tracking for delivery services.',
      imageUrl: 'https://images.unsplash.com/photo-1614649024146-21f576b07e69?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80', // Example image
      tags: ['Flutter', 'Google Maps API'],
    },
    {
      id: 7,
      title: 'Food Delivery Website',
      categories: ['web', 'all'],
      description: 'Online platform for ordering food from local restaurants.',
      imageUrl: 'https://images.unsplash.com/photo-1594179047519-f347310d3322?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80', // Example image
      tags: ['React', 'Node.js', 'Firebase'],
    },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(
        project =>
          Array.isArray(project.categories) &&
          project.categories
            .map(c => c.trim().toLowerCase())
            .includes(activeCategory.trim().toLowerCase())
      );

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Explore our recent projects and see how we've helped businesses achieve their digital goals.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
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
          // Removed container animation props to allow items to re-render correctly on filter change
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map(project => {
            const cardContent = (
              <motion.div
                key={project.id} // Keep key here for React's list management
                variants={itemVariants}
                className="group relative overflow-hidden rounded-xl bg-card border border-muted card-hover h-full flex flex-col" // Added h-full and flex flex-col for consistent layout within link
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={project.imageUrl}
                    alt={`${project.title} project screenshot`}
                  />
                </div>

                <div className="p-6 flex-grow flex flex-col"> {/* Added flex-grow and flex flex-col */}
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    {/* Conditionally hide arrow if it's the clickable link */}
                    {project.id !== 7 && (
                      <div className="p-2 rounded-full bg-primary/20 text-primary">
                        <ArrowRight size={16} />
                      </div>
                    )}
                  </div>

                  <p className="text-foreground/70 mb-4 flex-grow">{project.description}</p> {/* Added flex-grow */}

                  <div className="flex flex-wrap gap-2 mt-auto"> {/* Added mt-auto to push tags down */}
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
            );

            // If it's project 7, wrap it in a link
            if (project.id === 7) {
              return (
                <a
                  href="https://kalracaterers.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  key={project.id} // Key on the outer element when conditional
                  className="block" // Make the anchor a block element
                >
                  {cardContent}
                </a>
              );
            }

            // Otherwise, return the card content directly
            return cardContent;
          })}
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
