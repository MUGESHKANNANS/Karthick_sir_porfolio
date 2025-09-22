import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    alert('Thank you for your message! I will get back to you soon.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Get In <span className="text-primary dark:text-accent">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Let's connect! Whether you have questions about my research, want to collaborate, 
              or just want to say hello, I'd love to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary dark:text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Email</p>
                      <a
                        href="mailto:karthickpri.in@gmail.com"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors duration-300 break-all inline-block py-1"
                        aria-label="Send email to karthickpri.in@gmail.com"
                      >
                        karthickpri.in@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-primary dark:text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Phone</p>
                      <a
                        href="tel:+919688590579"
                        className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition-colors duration-300 inline-block py-1"
                        aria-label="Call phone number +91 96885 90579"
                      >
                        +91 96885 90579
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary/10 dark:bg-accent/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary dark:text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">Location</p>
                      <p className="text-gray-600 dark:text-gray-300">Coimbatore, Tamil Nadu</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                  Connect on Social Media
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/in/karthick-panneerselvam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors duration-300"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a
                    href="https://github.com/karthick-panneerselvam"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800 text-white rounded-lg flex items-center justify-center hover:bg-gray-900 transition-colors duration-300"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary to-secondary dark:from-gray-800 dark:to-gray-700 rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Live Chat Available!</h3>
                <p className="text-sm opacity-90 mb-4">
                  Connect with me over live chat for instant responses
                </p>
                <button className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg text-sm font-semibold transition-colors duration-300">
                  Start Chat
                </button>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary dark:focus:ring-accent focus:border-transparent transition-all duration-300 resize-none text-gray-900 dark:text-white"
                    placeholder="Your message here..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-secondary text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;