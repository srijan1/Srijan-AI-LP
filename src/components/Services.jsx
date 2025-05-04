
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code, 
  Smartphone, 
  Bot, 
  Sparkles, 
  Globe, 
  ShoppingCart, 
  BarChart, 
  MessageSquare 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Web Applications',
      description: 'Custom web apps built with modern technologies to solve your business challenges.',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: 'WhatsApp Bots',
      description: 'Automated WhatsApp solutions to engage with your customers 24/7.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      icon: <Sparkles className="h-8 w-8" />,
      title: 'AI Agents',
      description: 'Intelligent AI solutions that automate tasks and provide insights.',
      color: 'text-purple-500',
      bgColor: 'bg-purple-500/10',
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: 'Web Design',
      description: 'Stunning, responsive websites that capture your brand essence.',
      color: 'text-blue-500',
      bgColor: 'bg-blue-500/10',
    },
    {
      icon: <ShoppingCart className="h-8 w-8" />,
      title: 'E-commerce',
      description: 'Full-featured online stores with secure payment processing.',
      color: 'text-green-500',
      bgColor: 'bg-green-500/10',
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: 'Analytics',
      description: 'Data-driven insights to optimize your digital performance.',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-500/10',
    },
    {
      icon: <MessageSquare className="h-8 w-8" />,
      title: 'Consulting',
      description: 'Strategic guidance to navigate your digital transformation journey.',
      color: 'text-pink-500',
      bgColor: 'bg-pink-500/10',
    },
  ];

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
    <section id="services" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital <span className="gradient-text">Services</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            We offer a comprehensive range of digital solutions to help your business thrive in the digital landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="service-card"
            >
              <div className={`p-3 rounded-lg inline-block mb-4 ${service.bgColor}`}>
                <div className={service.color}>{service.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-foreground/70">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
