import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import emailjs from 'emailjs-com';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS integration
    emailjs.send(
      'service_xy0f47t', // replace with your EmailJS service ID
      'template_weqp23l', // replace with your EmailJS template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'admin@srijan-ai.in',
      },
      'F1b418B_ntCArQxz3' // replace with your EmailJS user/public key
    )
    .then(() => {
      toast({
        title: 'Message sent!',
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setIsSubmitting(false);
    })
    .catch(() => {
      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
      });
      setIsSubmitting(false);
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'admin@srijan-ai.in',
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+91 8753923287',
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'New Delhi , India',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
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
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-background/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3 variants={itemVariants} className="text-2xl font-bold mb-6">Contact Information</motion.h3>
            
            <motion.div variants={itemVariants} className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className={`p-3 rounded-lg mr-4 ${item.bgColor}`}>
                    <div className={item.color}>{item.icon}</div>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium">{item.title}</h4>
                    <p className="text-foreground/70">{item.content}</p>
                  </div>
                </div>
              ))}
            </motion.div>
            
            <motion.div variants={itemVariants}>
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/ai_srijan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.31.975.975 1.247 2.242 1.31 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.31 3.608-.975.975-2.242 1.247-3.608 1.31-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.31-.975-.975-1.247-2.242-1.31-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.31-3.608.975-.975 2.242-1.247 3.608-1.31 1.266-.058 1.646-.07 4.85-.07zm0-2.163C8.756 0 8.332.014 7.052.072 5.772.13 4.548.404 3.515 1.437 2.482 2.47 2.208 3.694 2.15 4.974.014 8.332 0 8.756 0 12s.014 3.668.072 4.948c.058 1.28.332 2.504 1.365 3.537 1.033 1.033 2.257 1.307 3.537 1.365 1.28.058 1.704.072 4.948.072s3.668-.014 4.948-.072c1.28-.058 2.504-.332 3.537-1.365 1.033-1.033 1.307-2.257 1.365-3.537.058-1.28.072-1.704.072-4.948s-.014-3.668-.072-4.948c-.058-1.28-.332-2.504-1.365-3.537-1.033-1.033-2.257-1.307-3.537-1.365C15.668.014 15.244 0 12 0z" />
                    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z" />
                  </svg>
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@AISrijan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19.615 3.184C21.403 3.184 22.5 4.281 22.5 6.07v11.86c0 1.789-1.097 2.886-2.885 2.886H4.385C2.597 20.816 1.5 19.719 1.5 17.93V6.07c0-1.789 1.097-2.886 2.885-2.886h15.23zM9.75 8.25v7.5l6.75-3.75-6.75-3.75z" />
                  </svg>
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/ai_srijan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 transition-colors"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                  </svg>
                </a>

                    {/* Facebook */}
    <a
      href="https://www.facebook.com/profile.php?id=61575960299255"
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full bg-muted/50 hover:bg-primary/20 transition-colors"
    >
      <svg
        className="h-5 w-5"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.324-.593 1.324-1.324V1.325C24 .593 23.407 0 22.675 0z" />
      </svg>
    </a>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-xl blur opacity-20"></div>
              <div className="relative bg-card rounded-xl p-8 border border-muted">
                <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-muted bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-muted bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-md border border-muted bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="4"
                      className="w-full px-4 py-3 rounded-md border border-muted bg-background/50 focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
