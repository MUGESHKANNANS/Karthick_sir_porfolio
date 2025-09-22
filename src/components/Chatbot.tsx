import React, { useState } from 'react';
import { MessageCircle, X, Minimize2 } from 'lucide-react';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);

  return (
    <>
      {/* Chatbot Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-16 h-16 bg-primary hover:bg-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 flex items-center justify-center z-50"
          aria-label="Open chatbot"
        >
          <MessageCircle className="w-8 h-8" />
        </button>
      )}

      {/* Chatbot Window */}
      {isOpen && (
        <div className={`fixed bottom-6 right-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl z-50 transition-all duration-300 ${
          isMinimized ? 'h-16 w-80' : 'h-96 w-80'
        }`}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-primary text-white rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4" />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Dr. Karthick AI Assistant</h3>
                <p className="text-xs opacity-80">Ask me anything!</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
                aria-label="Minimize chatbot"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded transition-colors duration-200"
                aria-label="Close chatbot"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Chatbot Content */}
          {!isMinimized && (
            <div className="h-80">
              <iframe
                src="https://chatgpt.com/share/67658be6-5a10-8008-b05d-e29c14ae8dbc"
                className="w-full h-full border-none rounded-b-2xl"
                title="Dr. Karthick AI Assistant"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Chatbot;