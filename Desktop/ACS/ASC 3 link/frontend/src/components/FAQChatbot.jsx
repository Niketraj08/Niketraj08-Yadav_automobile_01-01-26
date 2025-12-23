import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FiMessageCircle, FiX, FiChevronDown, FiChevronUp, FiSend, FiLoader } from "react-icons/fi";

const faqs = [
  {
    id: 1,
    question: "What services does AstraCognix offer?",
    answer: "We offer comprehensive digital solutions including Custom Software Development, Web Development, Mobile App Development, UI/UX Design, Digital Marketing, and Support & Maintenance. Each service is tailored to meet your specific business needs."
  },
  {
    id: 2,
    question: "How long does it take to complete a project?",
    answer: "Project timelines vary based on complexity and scope. A typical web application takes 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation."
  },
  {
    id: 3,
    question: "What technologies do you specialize in?",
    answer: "Our tech stack includes React, Node.js, Express, MongoDB, PostgreSQL, AWS, Docker, TypeScript, Next.js, and GraphQL. We stay updated with the latest technologies to deliver cutting-edge solutions."
  },
  {
    id: 4,
    question: "Do you provide ongoing support after project completion?",
    answer: "Yes! We offer comprehensive Support & Maintenance services with 24/7 monitoring, performance tuning, security updates, and continuous improvements to keep your applications running smoothly."
  },
  {
    id: 5,
    question: "What's your development process?",
    answer: "We follow an agile methodology: Discovery & Planning → Design & Prototyping → Development & Testing → Launch & Support. Each phase includes regular communication, demos, and iterative improvements."
  },
  {
    id: 6,
    question: "How do you ensure project quality?",
    answer: "We implement rigorous quality assurance with code reviews, automated testing, performance monitoring, and security-first practices. All projects undergo thorough testing before launch."
  },
  {
    id: 7,
    question: "Can you work with existing systems?",
    answer: "Absolutely! We specialize in system integration and can work with your existing infrastructure. We handle API integrations, data migration, and legacy system modernization."
  },
  {
    id: 8,
    question: "What's your pricing model?",
    answer: "We offer flexible pricing based on project scope and complexity. Options include fixed-price projects, time & materials, or retainer-based ongoing development. Contact us for a customized quote."
  }
];

const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [message, setMessage] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      type: 'bot',
      content: "👋 Hi! I'm AstraCognix Assistant. I can help answer your questions about our services, technologies, pricing, and timelines. Feel free to ask me anything, or check out our quick FAQ answers below. How can I assist you today?",
      timestamp: new Date()
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chatMessages]);

  const toggleChat = () => setIsOpen(!isOpen);

  const toggleFAQ = (id) => {
    setExpandedFAQ(expandedFAQ === id ? null : id);
  };

  const sendMessageToAPI = async (userMessage) => {
    // Temporarily disabled API calls due to authentication issues
    // Using intelligent fallback responses for now
    console.log('Using fallback responses - API temporarily disabled');

    // Fallback: Provide a helpful response based on keywords
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('pricing') || lowerMessage.includes('fee') || lowerMessage.includes('rate')) {
      return "Our pricing depends on the project scope and complexity. We offer flexible pricing models including fixed-price projects, time & materials, and retainer-based development. I'd recommend scheduling a consultation to discuss your specific needs and get a customized quote. 📱";
    }

    if (lowerMessage.includes('service') || lowerMessage.includes('offer') || lowerMessage.includes('what do you do') || lowerMessage.includes('capabilities')) {
      return "AstraCognix offers comprehensive digital solutions: Custom Software Development, Web Development, Mobile App Development, UI/UX Design, Digital Marketing, and ongoing Support & Maintenance. Each service is tailored to meet your business goals. Which service interests you most?";
    }

    if (lowerMessage.includes('time') || lowerMessage.includes('long') || lowerMessage.includes('duration') || lowerMessage.includes('timeline') || lowerMessage.includes('how long')) {
      return "Project timelines vary based on complexity. A typical web application takes 4-8 weeks, while complex enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process.";
    }

    if (lowerMessage.includes('tech') || lowerMessage.includes('technology') || lowerMessage.includes('stack') || lowerMessage.includes('framework')) {
      return "Our technology stack includes React, Node.js, Express, MongoDB, PostgreSQL, AWS, Docker, TypeScript, Next.js, and GraphQL. We stay updated with the latest technologies to deliver cutting-edge solutions.";
    }

    if (lowerMessage.includes('support') || lowerMessage.includes('maintenance') || lowerMessage.includes('after') || lowerMessage.includes('ongoing')) {
      return "Yes! We offer comprehensive Support & Maintenance services with 24/7 monitoring, performance tuning, security updates, and continuous improvements to keep your applications running smoothly.";
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('talk') || lowerMessage.includes('connect')) {
      return "You can reach us through WhatsApp at 📱 +91 62028 08498, email us at astracognixsolutions@gmail.com, or visit our office in Bhubaneswar, Odisha. We'd love to discuss your project!";
    }

    if (lowerMessage.includes('location') || lowerMessage.includes('office') || lowerMessage.includes('address') || lowerMessage.includes('where')) {
      return "Our office is located in Bhubaneswar, Odisha 752054. We serve clients globally and can work remotely with teams worldwide. 📍";
    }

    if (lowerMessage.includes('experience') || lowerMessage.includes('years') || lowerMessage.includes('established')) {
      return "AstraCognix has 1+ years of experience in delivering digital solutions. We've successfully completed 2+ projects and served 2+ happy clients across various industries.";
    }

    if (lowerMessage.includes('mobile') || lowerMessage.includes('app') || lowerMessage.includes('ios') || lowerMessage.includes('android')) {
      return "We develop native and cross-platform mobile apps for iOS and Android. Our mobile solutions include offline support, push notifications, secure authentication, and app store deployment assistance.";
    }

    if (lowerMessage.includes('web') || lowerMessage.includes('website') || lowerMessage.includes('site')) {
      return "We build high-performance web applications using React, Next.js, and modern frameworks. Our web solutions include SEO optimization, responsive design, and fast loading times.";
    }

    if (lowerMessage.includes('ai') || lowerMessage.includes('artificial intelligence') || lowerMessage.includes('machine learning')) {
      return "We integrate AI/ML capabilities into our solutions, including predictive analytics, automation, and intelligent data processing to enhance business operations.";
    }

    // Default response for unrecognized queries
    return "Thank you for your question! I'm here to help with information about AstraCognix services. For more detailed or specific inquiries, please contact us directly via WhatsApp at 📱 +91 62028 08498. Our team will be happy to assist you with personalized solutions!";
  };

  const sendMessage = async () => {
    if (message.trim() && !isTyping) {
      const userMessage = message.trim();

      // Add user message to chat
      const newUserMessage = {
        id: chatMessages.length + 1,
        type: 'user',
        content: userMessage,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, newUserMessage]);
      setMessage("");
      setIsTyping(true);

      // Get AI response
      const aiResponse = await sendMessageToAPI(userMessage);

      // Add AI response to chat
      const newBotMessage = {
        id: chatMessages.length + 2,
        type: 'bot',
        content: aiResponse,
        timestamp: new Date()
      };

      setChatMessages(prev => [...prev, newBotMessage]);
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <motion.div
        className="fixed bottom-28 right-6 z-50"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.3, ease: "easeOut" }}
      >
        <motion.button
          onClick={toggleChat}
          className="group relative flex items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-2xl transition-all duration-300 hover:shadow-blue-500/25"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isOpen ? (
            <FiX className="w-6 h-6" />
          ) : (
            <FiMessageCircle className="w-6 h-6" />
          )}

          {/* Pulse animation */}
          {!isOpen && (
            <div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
          )}

          {/* Tooltip */}
          <motion.div
            className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-slate-800 text-white text-sm rounded-lg whitespace-nowrap opacity-0 pointer-events-none"
            animate={{
              opacity: isHovered && !isOpen ? 1 : 0,
              y: isHovered && !isOpen ? 0 : 5
            }}
            transition={{ duration: 0.2 }}
          >
            Ask us anything!
            <div className="absolute top-full right-3 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-slate-800"></div>
          </motion.div>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed bottom-32 right-6 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-2xl shadow-2xl border border-slate-200 z-50 overflow-hidden"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <FiMessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm">AstraCognix Support</h3>
                    <p className="text-xs opacity-90">We typically reply instantly</p>
                  </div>
                </div>
                <button
                  onClick={toggleChat}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  <FiX className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Content */}
            <div className="max-h-96 overflow-y-auto p-4 space-y-3">
              {/* Messages */}
              {chatMessages.map((msg, index) => (
                <motion.div
                  key={msg.id}
                  className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-3 ${
                      msg.type === 'user'
                        ? 'bg-blue-600 text-white'
                        : 'bg-slate-100 text-slate-800'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{msg.content}</p>
                    <span className={`text-xs mt-1 block ${
                      msg.type === 'user' ? 'text-blue-100' : 'text-slate-500'
                    }`}>
                      {msg.timestamp.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-slate-100 rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <FiLoader className="w-4 h-4 animate-spin text-slate-500" />
                      <span className="text-sm text-slate-600">AstraCognix Assistant is typing...</span>
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />

              {/* FAQ Section - Show only on initial load */}
              {chatMessages.length <= 1 && (
                <motion.div
                  className="space-y-2 border-t border-slate-200 pt-3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  <h4 className="text-sm font-semibold text-slate-800 mb-2">Quick Answers</h4>
                  {faqs.slice(0, 3).map((faq, index) => (
                    <motion.div
                      key={faq.id}
                      className="border border-slate-200 rounded-lg overflow-hidden"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + index * 0.1 }}
                    >
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full text-left p-3 hover:bg-slate-50 transition-colors flex items-center justify-between"
                      >
                        <span className="text-sm font-medium text-slate-700 pr-2">{faq.question}</span>
                        {expandedFAQ === faq.id ? (
                          <FiChevronUp className="w-4 h-4 text-slate-500 flex-shrink-0" />
                        ) : (
                          <FiChevronDown className="w-4 h-4 text-slate-500 flex-shrink-0" />
                        )}
                      </button>
                      <AnimatePresence>
                        {expandedFAQ === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="overflow-hidden"
                          >
                            <div className="px-3 pb-3">
                              <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Contact Prompt */}
              <motion.div
                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-100"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <p className="text-sm text-slate-700 mb-2">
                  💬 Need immediate help? Connect with us directly!
                </p>
                <a
                  href="https://wa.me/916202808498"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-full transition-colors"
                >
                  📱 WhatsApp Support
                </a>
              </motion.div>
            </div>

            {/* Message Input */}
            <div className="border-t border-slate-200 p-3">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 text-sm border border-slate-300 rounded-full px-3 py-2 focus:outline-none focus:border-blue-500"
                />
                <motion.button
                  onClick={sendMessage}
                  disabled={!message.trim()}
                  className="w-8 h-8 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white rounded-full flex items-center justify-center transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiSend className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleChat}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default FAQChatbot;
