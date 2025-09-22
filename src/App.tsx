import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import ResearchPapers from './components/ResearchPapers';
import Events from './components/Events';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Chatbot from './components/Chatbot';
import Loader from './components/Loader';
import { ThemeProvider } from './contexts/ThemeContext';

function App() {
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme ? JSON.parse(savedTheme) : false;
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  // SEO Meta tags
  useEffect(() => {
    document.title = "Dr. Karthick Panneerselvam - AI & ML Expert | Associate Professor";
    
    // Meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Dr. Karthick Panneerselvam - Associate Professor specializing in AI & ML, Computer Vision, and Deep Learning. Academic excellence with industry experience.');
    } else {
      const meta = document.createElement('meta');
      meta.name = 'description';
      meta.content = 'Dr. Karthick Panneerselvam - Associate Professor specializing in AI & ML, Computer Vision, and Deep Learning. Academic excellence with industry experience.';
      document.head.appendChild(meta);
    }

    // Open Graph meta tags
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    ogTitle.content = 'Dr. Karthick Panneerselvam - AI & ML Expert';
    document.head.appendChild(ogTitle);

    const ogDescription = document.createElement('meta');
    ogDescription.setAttribute('property', 'og:description');
    ogDescription.content = 'Associate Professor specializing in Artificial Intelligence, Machine Learning, and Computer Vision research.';
    document.head.appendChild(ogDescription);
  }, []);

  if (isLoading) {
    return <Loader isLoading={isLoading} />;
  }

  return (
    <ThemeProvider>
      <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
        <Header isDark={isDark} toggleTheme={toggleTheme} />
        <main>
          <Hero />
          <About />
          <Skills />
          <Education />
          <Experience />
          <ResearchPapers />
          <Events />
          <Contact />
        </main>
        <Footer />
        <Chatbot />
      </div>
    </ThemeProvider>
  );
}

export default App;