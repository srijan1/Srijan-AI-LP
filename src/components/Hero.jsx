import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Bot, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
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
    <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div
            className="lg:w-1/2"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="inline-block mb-4 px-4 py-1 rounded-full bg-muted/50 border border-muted">
              <span className="text-sm font-medium text-primary">Digital Solutions Agency</span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              We Build <span className="gradient-text">Digital Experiences</span> That Transform Businesses
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg text-foreground/80 mb-8 max-w-xl">
              Your partner for cutting-edge web apps, mobile solutions, WhatsApp bots, and AI agents. We turn your ideas into digital reality.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button size="lg" className="group">
              <a href="#contact">Start a Project</a>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="mt-12">
              {/* <p className="text-sm text-foreground/60 mb-4">Trusted by innovative companies</p>
              <div className="flex flex-wrap items-center gap-8">
                <div className="text-foreground/40 font-semibold">Kalra Catters</div>
                <div className="text-foreground/40 font-semibold">COMPANY 2</div>
                <div className="text-foreground/40 font-semibold">COMPANY 3</div>
              </div> */}
            </motion.div>
          </motion.div>
          
          <motion.div
            className="lg:w-1/2 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-30"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden border border-muted">
                <img  alt="Digital agency showcase" className="w-full h-auto rounded-t-xl" src="https://images.unsplash.com/photo-1524221629551-6dd14def5ffd" />
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="h-3 w-3 rounded-full bg-red-500"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-xs text-foreground/60">Srijan.ai Agency</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-primary/20 text-primary">
                        <Code size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Web Applications</div>
                        <div className="text-xs text-foreground/60">React, Vue, Node.js</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-secondary/20 text-secondary">
                        <Smartphone size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-medium">Mobile Apps</div>
                        <div className="text-xs text-foreground/60">iOS, Android, Cross-platform</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-accent/20 text-accent">
                        <Bot size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-medium">WhatsApp Bots & AI</div>
                        <div className="text-xs text-foreground/60">Automation & Intelligence</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div 
              className="absolute -top-6 -right-6 p-3 bg-card rounded-lg border border-muted shadow-lg"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <Sparkles className="h-6 w-6 text-primary" />
            </motion.div>
            
            <motion.div 
              className="absolute -bottom-4 -left-4 p-3 bg-card rounded-lg border border-muted shadow-lg"
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 1 }}
            >
              <Code className="h-6 w-6 text-secondary" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
