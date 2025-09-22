import React, { useState } from 'react';
import { Calendar, MapPin, Users, Award, X, ExternalLink } from 'lucide-react';

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  role: string;
  description: string;
  image: string;
  category: string;
  highlights: string[];
  attendees?: number;
}

const Events: React.FC = () => {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const events: Event[] = [
    {
      id: 1,
      title: "Hands-on Workshop on Resume Building & LinkedIn Networking",
      date: "April 23, 2025",
      location: "KPR Institute of Engineering and Technology, Coimbatore",
      role: "organizer",
      description: "Conducted for the Department of Computer Science and Engineering (Artificial Intelligence and Machine Learning), focusing on crafting impactful resumes and leveraging LinkedIn for professional networking.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "workshop",
      highlights: [
        "Hands-on session for students and faculty",
        "Resume crafting strategies",
        "LinkedIn profile optimization"
      ],
      attendees: 150
    },
    {
      id: 2,
      title: "Five-Day Online Workshop on Full Stack Sprint – Learn, Build, Deploy",
      date: "February 17-21, 2025",
      location: "KPR Institute of Engineering and Technology, Coimbatore",
      role: "organizer",
      description: "Organized a five-day online workshop covering full-stack web development, including learning, building, and deploying applications.",
      image: "https://images.pexels.com/photos/1181676/pexels-photo-1181676.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "workshop",
      highlights: [
        "Focused on practical implementation",
        "Covered frontend, backend, and deployment",
        "Hands-on coding sessions"
      ],
      attendees: 200
    },
    {
      id: 3,
      title: "Short-Term Course on React Outreach: Empowering Tomorrow’s Web Developers",
      date: "November 18-23, 2024",
      location: "Lovely Professional University, Punjab",
      role: "speaker",
      description: "Delivered sessions on modern React practices to empower students and professionals in web development.",
      image: "https://images.pexels.com/photos/540518/pexels-photo-540518.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "course",
      highlights: [
        "Focused on React ecosystem",
        "Empowered young web developers",
        "Hands-on demonstrations"
      ],
      attendees: 180
    },
    {
      id: 4,
      title: "One-Week FDP and Research Conclave on Artificial Intelligence in Affective Computing Research",
      date: "June 10-14, 2024",
      location: "CMR Institute of Technology, Bengaluru",
      role: "resource person",
      description: "Served as a resource person for the session 'Ethics in Affective Computing Research' on June 13, 2024, as part of the one-week FDP and Research Conclave.",
      image: "https://images.pexels.com/photos/256658/pexels-photo-256658.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "FDP",
      highlights: [
        "Focus on affective computing research",
        "Delivered session on AI ethics",
        "Networking with researchers"
      ],
      attendees: 120
    },
    {
      id: 5,
      title: "Short-Term Outreach Program on Advanced Web Development with Node.js",
      date: "March 27 - April 2, 2024",
      location: "Lovely Professional University, Punjab",
      role: "speaker",
      description: "Conducted short-term outreach program on advanced Node.js web development practices.",
      image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "outreach",
      highlights: [
        "Node.js advanced concepts",
        "Hands-on coding sessions",
        "Web application deployment"
      ],
      attendees: 100
    },
    {
      id: 6,
      title: "Web Development Training Program",
      date: "January 24, 2024",
      location: "Modern Group of Colleges, Mukerian, Punjab",
      role: "trainer",
      description: "Delivered a training program on fundamental and advanced aspects of web development.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "training",
      highlights: [
        "Full web development stack",
        "Practical exercises",
        "Student engagement"
      ],
      attendees: 80
    },
    {
      id: 7,
      title: "Session on Cloud Computing",
      date: "October 13, 2021",
      location: "Ananda College, Devakottai",
      role: "speaker",
      description: "Delivered a session on the fundamentals and applications of cloud computing for students.",
      image: "https://images.pexels.com/photos/1181316/pexels-photo-1181316.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "seminar",
      highlights: [
        "Introduction to cloud platforms",
        "Industry relevance",
        "Interactive Q&A"
      ],
      attendees: 100
    },
    {
      id: 8,
      title: "Five-Day FDP Training Program on UGC NET/SET",
      date: "June 18-22, 2020",
      location: "Patrician College of Arts and Science, Chennai",
      role: "trainer",
      description: "Conducted training program for faculty and students preparing for UGC NET/SET examinations.",
      image: "https://images.pexels.com/photos/256455/pexels-photo-256455.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "FDP",
      highlights: [
        "Focused on UGC NET/SET preparation",
        "Guidance for exam strategies",
        "Faculty and student participation"
      ],
      attendees: 60
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'organizer':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'speaker':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'resource person':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'trainer':
        return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'workshop':
        return <Calendar className="w-5 h-5" />;
      case 'seminar':
        return <Calendar className="w-5 h-5" />;
      case 'course':
        return <Users className="w-5 h-5" />;
      case 'FDP':
        return <Award className="w-5 h-5" />;
      case 'outreach':
        return <Users className="w-5 h-5" />;
      case 'training':
        return <Users className="w-5 h-5" />;
      default:
        return <Calendar className="w-5 h-5" />;
    }
  };

  const categories = Array.from(new Set(events.map(e => e.category)));

  return (
    <section id="events" className="py-20 bg-gray-50 dark:bg-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Academic <span className="text-primary dark:text-accent">Events</span>
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Showcasing participation in conferences, workshops, and academic events as speaker, organizer, and award recipient
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', ...categories].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 ${
                  selectedCategory === category
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 shadow-md'
                }`}
              >
                {getCategoryIcon(category)}
                {category.charAt(0).toUpperCase() + category.slice(1)}
                {category === 'all' && ` (${events.length})`}
                {category !== 'all' && ` (${events.filter(e => e.category === category).length})`}
              </button>
            ))}
          </div>

          {/* Events Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div
                key={event.id}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 overflow-hidden cursor-pointer group"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getRoleColor(event.role)}`}>
                      {event.role.charAt(0).toUpperCase() + event.role.slice(1)}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-primary dark:text-accent">
                      {getCategoryIcon(event.category)}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.date}</span>
                    </div>
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{event.location}</span>
                    </div>
                    {event.attendees && (
                      <div className="flex items-center text-gray-600 dark:text-gray-400">
                        <Users className="w-4 h-4 mr-2" />
                        <span className="text-sm">{event.attendees}+ attendees</span>
                      </div>
                    )}
                  </div>
                  
                  <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                    {event.description.length > 100 
                      ? `${event.description.substring(0, 100)}...` 
                      : event.description}
                  </p>
                  
                  <button className="text-primary dark:text-accent font-semibold text-sm hover:underline flex items-center">
                    View Details
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No events found for the selected category.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />
              <button
                onClick={() => setSelectedEvent(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 dark:bg-gray-800/90 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors duration-300"
              >
                <X className="w-6 h-6" />
              </button>
              <div className="absolute bottom-4 left-4">
                <span className={`px-4 py-2 rounded-full text-sm font-medium ${getRoleColor(selectedEvent.role)}`}>
                  {selectedEvent.role.charAt(0).toUpperCase() + selectedEvent.role.slice(1)}
                </span>
              </div>
            </div>
            
            <div className="p-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                {selectedEvent.title}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-3">
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-5 h-5 mr-3" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <MapPin className="w-5 h-5 mr-3" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  {selectedEvent.attendees && (
                    <div className="flex items-center text-gray-600 dark:text-gray-400">
                      <Users className="w-5 h-5 mr-3" />
                      <span>{selectedEvent.attendees}+ attendees</span>
                    </div>
                  )}
                </div>
                
                <div className="flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white shadow-lg">
                    {getCategoryIcon(selectedEvent.category)}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                {selectedEvent.description}
              </p>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  Key Highlights
                </h3>
                <ul className="space-y-2">
                  {selectedEvent.highlights.map((highlight, index) => (
                    <li key={index} className="flex items-center text-gray-700 dark:text-gray-300">
                      <div className="w-2 h-2 bg-primary dark:bg-accent rounded-full mr-3"></div>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;