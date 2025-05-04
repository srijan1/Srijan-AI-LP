
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart',
      content: 'Srijan.ai transformed our business with their innovative web application. Their team was professional, responsive, and delivered beyond our expectations.',
      rating: 5,
      image: 'female-ceo-professional-headshot',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Marketing Director, GrowthBrand',
      content: 'The mobile app developed by Srijan.ai helped us increase customer engagement by 200%. Their attention to detail and user experience expertise is unmatched.',
      rating: 5,
      image: 'asian-male-marketing-professional',
    },
    {
      id: 3,
      name: 'Elena Rodriguez',
      role: 'Founder, RetailPlus',
      content: 'The WhatsApp bot Srijan.ai created for us handles over 70% of customer inquiries automatically. It\'s been a game-changer for our customer service team.',
      rating: 5,
      image: 'latina-business-founder-portrait',
    }
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
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="gradient-text">Testimonials</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative bg-card rounded-xl p-8 border border-muted card-hover"
            >
              <div className="absolute -top-4 -right-4 p-3 bg-primary rounded-full text-primary-foreground">
                <Quote size={20} />
              </div>
              
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img  alt={`${testimonial.name} portrait`} className="w-16 h-16 rounded-full object-cover" src="https://images.unsplash.com/photo-1697256200022-f61abccad430" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-6">"{testimonial.content}"</p>
              
              <div className="flex">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
