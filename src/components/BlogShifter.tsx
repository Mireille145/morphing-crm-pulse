import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const BlogShifter = () => {
  const blogPosts = [
    {
      id: 1,
      title: "The Future of CRM: AI-Powered Customer Insights",
      excerpt: "Discover how artificial intelligence is revolutionizing customer relationship management and driving business growth.",
      author: "Mina Michel",
      date: "Dec 15, 2024",
      category: "AI & CRM",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Salesforce Implementation Best Practices for 2025",
      excerpt: "Essential strategies and tips for successful Salesforce deployment that maximize ROI and user adoption.",
      author: "Ashraf Rezk",
      date: "Dec 12, 2024",
      category: "Implementation",
      readTime: "7 min read"
    },
    {
      id: 3,
      title: "Customer Experience Optimization in the Digital Age",
      excerpt: "Learn how to leverage modern CRM tools to create exceptional customer experiences that drive loyalty.",
      author: "Marina Danial",
      date: "Dec 10, 2024",
      category: "Customer Experience",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Automation Workflows That Transform Business Processes",
      excerpt: "Explore advanced automation techniques that streamline operations and boost productivity across your organization.",
      author: "Mourad Takawi",
      date: "Dec 8, 2024",
      category: "Automation",
      readTime: "8 min read"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % blogPosts.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [blogPosts.length]);

  const currentPost = blogPosts[currentIndex];

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Progress Line */}
      <div className="mb-8">
        <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 4, ease: "linear" }}
            key={currentIndex}
          />
        </div>
        <div className="flex justify-between mt-2">
          {blogPosts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-cyan-500 scale-125"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Blog Post Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPost.id}
          initial={{ opacity: 0, x: 100, rotateY: -15 }}
          animate={{ opacity: 1, x: 0, rotateY: 0 }}
          exit={{ opacity: 0, x: -100, rotateY: 15 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-cyan-500/30 transition-all duration-500 group perspective-1000"
        >
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                  {currentPost.category}
                </span>
                <span className="text-gray-500 text-sm">{currentPost.readTime}</span>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                {currentPost.title}
              </h3>
              
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                {currentPost.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-gray-400">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    <span className="text-sm">{currentPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{currentPost.date}</span>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300 group"
                >
                  <span className="text-sm font-medium">Read More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </div>
            
            <div className="lg:w-64">
              <div className="w-full h-48 lg:h-full bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl border border-cyan-500/30 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                <div className="text-6xl text-cyan-400/60">📊</div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation */}
      <div className="flex justify-center mt-8 gap-4">
        <button
          onClick={() => setCurrentIndex((prev) => (prev - 1 + blogPosts.length) % blogPosts.length)}
          className="px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors duration-300 border border-gray-600"
        >
          Previous
        </button>
        <button
          onClick={() => setCurrentIndex((prev) => (prev + 1) % blogPosts.length)}
          className="px-6 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-500 transition-colors duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default BlogShifter;