import React, { useState } from 'react';
import { FileText, ExternalLink, Calendar, Award } from 'lucide-react';

interface ResearchPaper {
  id: number;
  title: string;
  authors: string;
  conference: string;
  year: number;
  type: 'conference' | 'journal' ;
  pdfUrl?: string;
  abstract: string;
  keywords: string[];
  award?: string;
}

const ResearchPapers: React.FC = () => {
  const [selectedType, setSelectedType] = useState<string>('conference');

  const papers: ResearchPaper[] = [
    {
    id: 1,
    title: "Deep Learning Approaches for Real-Time Object Detection in Autonomous Vehicles",
    authors: "Dr. Karthick Panneerselvam, Dr. A. Kumar, Dr. S. Patel",
    conference: "IEEE International Conference on Computer Vision and Pattern Recognition (CVPR)",
    year: 2024,
    type: "conference",
    pdfUrl: "#",
    abstract: "This paper presents novel deep learning architectures for real-time object detection in autonomous vehicle systems, achieving 95% accuracy with reduced computational overhead.",
    keywords: ["Deep Learning", "Object Detection", "Autonomous Vehicles", "Computer Vision"],
    award: "Best Paper Award"
  },
  {
    id: 2,
    title: "Multi-objective Load Balancing based on Adaptive Osprey Optimization Algorithm",
    authors: "Karthick Panneerselvam, P Prathap Nayudu, M Sheerin Banu, PM Rekha",
    conference: "International Journal of Information Technology",
    year: 2024,
    type: "journal",
    pdfUrl: "#",
    abstract: "This study proposes a novel multi-objective load balancing approach based on adaptive osprey optimization algorithm (AO2) within computing environments, optimizing energy consumption, cost, and time.",
    keywords: ["Load Balancing", "Optimization Algorithm", "Distributed Systems", "Energy Efficiency", "Virtual Machines"]
  },
  {
    id: 3,
    title: "Effective and Efficient Video Compression by the Deep Learning Techniques",
    authors: "V. L. Helen Josephine, Karthick Panneerselvam, K. Mahesh",
    conference: "Computer Systems Science & Engineering",
    year: 2022,
    type: "journal",
    pdfUrl: "#",
    abstract: "This paper presents deep learning-based approaches for effective and efficient video compression, improving compression rates while maintaining video quality.",
    keywords: ["Deep Learning", "Video Compression", "Multimedia", "Computer Systems"],
    citations: 9
  },
  {
    id: 4,
    title: "Optimizing RPL for Load Balancing and Congestion Mitigation in IoT Network",
    authors: "Aastha Maheshwari, Karthick Panneerselvam",
    conference: "Wireless Personal Communications",
    year: 2024,
    type: "journal",
    pdfUrl: "#",
    abstract: "This study proposes an optimized RPL objective function for IoT networks, addressing load balancing and congestion mitigation using fuzzy multi-criteria decision-making methods.",
    keywords: ["IoT", "RPL", "Load Balancing", "Congestion Control", "Wireless Networks"]
  },
  {
    id: 5,
    title: "Improving the Security of Video Embedding Using the CFP-SPE Method",
    authors: "Meroda Tesfaye, Karthick Panneerselvam, K. Rajalakshmi, V. L. Helen Josephine, Dhivya Rajan, L. Visalatchi, K. Mahesh",
    conference: "Journal of Engineering",
    year: 2022,
    type: "journal",
    pdfUrl: "#",
    abstract: "This paper introduces the CFP-SPE method for enhancing video embedding security. The approach integrates encryption and feature-preserving mechanisms to safeguard video content against unauthorized access.",
    keywords: ["Video Security", "Embedding", "Encryption", "CFP-SPE", "Data Protection"]
  },
  {
    id: 6,
    title: "Food Board: A Restaurant Management System",
    authors: "Dilip Bastola, Karthick Panneerselvam, Anmol Pradhan, Nigam Bhattrai, Dhruba Hari Ranabhat, Ashish Gautam",
    conference: "International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
    year: 2022,
    type: "journal",
    pdfUrl: "https://doi.org/10.22214/ijraset.2022.42637",
    abstract: "This research presents Food Board, a restaurant management system aimed at streamlining operations such as order management, billing, and customer service.",
    keywords: ["Restaurant Management", "Food Board", "Billing System", "Order Management", "Automation"]
  },
  {
    id: 7,
    title: "Multi-Class Remote Sensing Image Retrieval Using Optimized Convolution Neural Network with Weighted Distances",
    authors: "P. Sornalatha, K. Mahesh, Karthick Panneerselvam",
    conference: "Journal of the Indian Society of Remote Sensing",
    year: 2025,
    type: "journal",
    pdfUrl: "#",
    abstract: "This research proposes an optimized CNN with weighted distances for retrieving multi-class high-resolution remote sensing images, improving accuracy and efficiency.",
    keywords: ["Remote Sensing", "CNN", "Image Retrieval", "Satellite Imagery", "Deep Learning"]
  },
  {
    id: 8,
    title: "Enhancing the Compressed Video Quality through a Neural Network Approach",
    authors: "Karthick Panneerselvam, K. Rajalakshmi, P. Sornalatha",
    conference: "2025 4th International Conference on Sentiment Analysis and Deep Learning (ICSADL)",
    year: 2025,
    type: "conference",
    pdfUrl: "#",
    abstract: "This paper explores enhancing compressed video quality using an Enhanced Generative Adversarial Network (EGAN), reducing artifacts and improving consistency compared to conventional neural networks.",
    keywords: ["Video Compression", "Neural Networks", "EGAN", "Deep Learning", "GAN"]
  },
  {
    id: 9,
    title: "Novel Anchor Generation Based Residual Network for Object Tracking in Video-Surveillance Applications",
    authors: "D. Mohanapriya, K. Rajalakshmi, V. L. Helen Josephine, Karthick Panneerselvam",
    conference: "SN Computer Science",
    year: 2025,
    type: "journal",
    pdfUrl: "#",
    abstract: "This study introduces a novel anchor generation-based residual network (ResNet-30) for robust object tracking in video-surveillance applications, addressing occlusion, lighting variations, and shadows.",
    keywords: ["Object Tracking", "Video Surveillance", "Residual Networks", "Deep Learning", "ResNet-30"]
  },
  {
    id: 10,
    title: "A Fusion Approach of Machine Learning and Deep Learning Techniques for Stock Market Prediction",
    authors: "Rishabh Saxena, Karthick Panneerselvam",
    conference: "Proceedings of the KILBY 100 7th International Conference on Computing Sciences",
    year: 2023,
    type: "conference",
    pdfUrl: "#",
    abstract: "This research presents a hybrid approach combining ML and DL algorithms for predicting stock market trends, achieving improved forecasting accuracy for investors and traders.",
    keywords: ["Stock Market Prediction", "Machine Learning", "Deep Learning", "CNN", "LSTM", "Financial Forecasting"]
  },
  {
    id: 11,
    title: "TRAVEL AND TOURISM MANAGEMENT SYSTEM",
    authors: "Tikendra Kumar, Karthick Panneerselvam, Juluri Vinay Kumar, Mundlapati Ramanadh Phani Rahul",
    conference: "International Journal of Creative Research Thoughts (IJCRT)",
    year: 2022,
    type: "journal",
    pdfUrl: "https://www.ijcrt.org/",
    abstract: "This research presents a Travel and Tourism Management System designed to streamline travel planning, bookings, and customer management.",
    keywords: ["Travel Management", "Tourism System", "Booking Management", "Automation", "Customer Experience"]
  },
  {
    id: 12,
    title: "Improving the Security of Video Embedding Using the CFP-SPE Method",
    authors: "Karthick Panneerselvam, K. Rajalakshmi, V. L. Helen Josephine, Dhivya Rajan, L. Visalatchi, K. Mahesh, Meroda Tesfaye",
    conference: "Research Article",
    year: 2022,
    type: "journal",
    pdfUrl: "#",
    abstract: "This study enhances the security of video embedding by integrating encryption and decryption into the CFP-SPE embedding process, ensuring secure and confidential data transfer.",
    keywords: ["Video Security", "Video Embedding", "CFP-SPE", "Encryption", "Data Protection"]
  }
  ];

  const filteredPapers = selectedType === 'all' 
    ? papers 
    : papers.filter(paper => paper.type === selectedType);

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'conference':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'journal':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'workshop':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <section id="research" className="py-20 bg-white dark:bg-gray-900 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Research <span className="text-primary dark:text-accent">Publications</span>
            </h2>
            <div className="w-24 h-1 bg-primary dark:bg-accent mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cutting-edge research in AI, ML, and Computer Vision with publications in top-tier conferences and journals
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'conference', 'journal'].map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  selectedType === type
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
                }`}
              >
                {type.charAt(0).toUpperCase() + type.slice(1)}
                {type === 'all' && ` (${papers.length})`}
                {type !== 'all' && ` (${papers.filter(p => p.type === type).length})`}
              </button>
            ))}
          </div>

          {/* Research Papers Grid */}
          <div className="grid gap-8">
            {filteredPapers.map((paper, index) => (
              <div
                key={paper.id}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-700 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <FileText className="w-8 h-8" />
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(paper.type)}`}>
                        {paper.type.charAt(0).toUpperCase() + paper.type.slice(1)}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span className="text-sm">{paper.year}</span>
                      </div>
                      {paper.award && (
                        <div className="flex items-center text-yellow-600 dark:text-yellow-400">
                          <Award className="w-4 h-4 mr-1" />
                          <span className="text-sm font-medium">{paper.award}</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                      {paper.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-3">
                      <strong>Authors:</strong> {paper.authors}
                    </p>
                    
                    <p className="text-primary dark:text-accent font-semibold mb-4">
                      {paper.conference}
                    </p>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                      {paper.abstract}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {paper.keywords.map((keyword, keyIndex) => (
                        <span
                          key={keyIndex}
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                        >
                          {keyword}
                        </span>
                      ))}
                    </div>
                    
                    {/* {paper.pdfUrl && (
                      <a
                        href={paper.pdfUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-primary hover:bg-secondary text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View Paper
                      </a>
                    )} */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPapers.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                No papers found for the selected category.
              </p>
            </div>
          )}

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-primary to-secondary dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Research Impact</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold mb-2">{papers.length}+</div>
                  <div className="text-sm opacity-90">Published Papers</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Citations</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">15+</div>
                  <div className="text-sm opacity-90">Collaborations</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchPapers;