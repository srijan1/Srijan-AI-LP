
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  PenTool, 
  Code as CodeIcon, 
  Rocket, 
  Repeat 
} from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: 'Discovery',
      description: 'We start by understanding your business goals, target audience, and project requirements.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: <PenTool className="h-8 w-8" />,
      title: 'Design',
      description: 'Our designers create intuitive, engaging interfaces that align with your brand identity.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: <CodeIcon className="h-8 w-8" />,
      title: 'Development',
      description: 'Our developers build your solution using the latest technologies and best practices.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: 'Launch',
      description: 'We deploy your solution and ensure everything runs smoothly in the production environment.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: <Repeat className="h-8 w-8" />,
      title: 'Support',
      description: 'We provide ongoing maintenance and support to keep your digital solution running optimally.',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="process" className="py-20 bg-gradient-to-b from-background/95 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="gradient-text">Process</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We follow a structured approach to deliver high-quality digital solutions that meet your business needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
          
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col md:flex-row items-center gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                <p className="text-foreground/70">{step.description}</p>
              </div>
              
              <div className="relative z-10">
                <div className={`p-6 rounded-full ${step.bgColor} ${step.color} border border-muted shadow-lg`}>
                  {step.icon}
                </div>
              </div>
              
              <div className="md:w-1/2"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Process;
