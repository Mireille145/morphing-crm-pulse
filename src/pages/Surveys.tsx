
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import Button from "../components/Button";

const Surveys = () => {
  const [currentSurvey, setCurrentSurvey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const surveys = [
    {
      id: 1,
      title: "Customer Satisfaction Survey",
      description: "Comprehensive feedback collection system with real-time analytics and automated follow-ups.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      features: ["Real-time responses", "Automated scoring", "Custom branding", "Mobile optimized"],
    },
    {
      id: 2,
      title: "Product Feedback Analysis",
      description: "Advanced product evaluation system with sentiment analysis and recommendation engine.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      features: ["Sentiment analysis", "Visual feedback", "Integration ready", "AI insights"],
    },
    {
      id: 3,
      title: "Employee Engagement Platform",
      description: "Internal survey system for measuring employee satisfaction and organizational health.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
      features: ["Anonymous responses", "Trend analysis", "Department insights", "Action planning"],
    },
    {
      id: 4,
      title: "Market Research Suite",
      description: "Comprehensive market analysis tools with demographic targeting and competitive insights.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      features: ["Demographic targeting", "Competitive analysis", "Market trends", "Export capabilities"],
    },
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentSurvey((prev) => (prev + 1) % surveys.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, surveys.length]);

  const nextSurvey = () => {
    setCurrentSurvey((prev) => (prev + 1) % surveys.length);
  };

  const prevSurvey = () => {
    setCurrentSurvey((prev) => (prev - 1 + surveys.length) % surveys.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Survey Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful survey tools that help you gather insights and make data-driven decisions.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Interactive Survey Showcase */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Interactive Survey Showcase
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Experience our survey solutions in action with smooth transitions and dynamic content.
            </p>
          </AnimatedSection>

          {/* Survey Display */}
          <div className="relative">
            <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Survey Image */}
                <div className="relative h-96 overflow-hidden rounded-xl">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSurvey}
                      initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                      animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                      exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <img
                        src={surveys[currentSurvey].image}
                        alt={surveys[currentSurvey].title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Survey Content */}
                <div className="space-y-6">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSurvey}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5 }}
                    >
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {surveys[currentSurvey].title}
                      </h3>
                      <p className="text-gray-300 text-lg mb-6">
                        {surveys[currentSurvey].description}
                      </p>
                      
                      <div className="space-y-3">
                        {surveys[currentSurvey].features.map((feature, index) => (
                          <motion.div
                            key={feature}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="flex items-center text-gray-300"
                          >
                            <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                            {feature}
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center mt-8 space-x-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={prevSurvey}
                  className="p-2"
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={togglePlayPause}
                  className="p-2"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                
                <Button
                  variant="outline"
                  size="sm"
                  onClick={nextSurvey}
                  className="p-2"
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>

              {/* Indicators */}
              <div className="flex justify-center mt-4 space-x-2">
                {surveys.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSurvey(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSurvey ? "bg-cyan-400" : "bg-gray-600"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Survey Features
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Everything you need to create, distribute, and analyze surveys effectively.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Drag & Drop Builder",
                description: "Create surveys effortlessly with our intuitive builder.",
                icon: "🎯",
              },
              {
                title: "Real-time Analytics",
                description: "Monitor responses and analyze data as it comes in.",
                icon: "📊",
              },
              {
                title: "Multi-channel Distribution",
                description: "Share surveys via email, web, mobile, and social media.",
                icon: "📱",
              },
              {
                title: "Advanced Logic",
                description: "Create dynamic surveys with conditional logic and branching.",
                icon: "🔄",
              },
              {
                title: "Custom Branding",
                description: "Match your brand with custom themes and styling.",
                icon: "🎨",
              },
              {
                title: "Data Export",
                description: "Export results in multiple formats for further analysis.",
                icon: "📈",
              },
            ].map((feature, index) => (
              <AnimatedSection
                key={feature.title}
                delay={index * 0.1}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/80 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Surveying?
              </h2>
              <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
                Create your first survey in minutes and start gathering valuable insights.
              </p>
              <Button variant="secondary" size="lg">
                Get Started Now
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Surveys;
