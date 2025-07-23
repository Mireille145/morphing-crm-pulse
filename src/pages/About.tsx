
import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

// Team member images
import minaImage from "../assets/team/mina-michel.jpg";
import marinaImage from "../assets/team/marina-danial.jpg";
import mouradImage from "../assets/team/mourad-takawi.jpg";
import susanImage from "../assets/team/susan-rizk.jpg";
import noraImage from "../assets/team/nora-salman.jpg";
import ashrafImage from "../assets/team/ashraf-rezk.jpg";
import luayImage from "../assets/team/luay-aladin.jpg";
import fadyImage from "../assets/team/fady-maged.jpg";
import andrewImage from "../assets/team/andrew-ossama.jpg";
import carineImage from "../assets/team/carine-felix.jpg";
import mireilleImage from "../assets/team/mireille-rafik.jpg";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission",
      description: "To provide tailored CRM solutions that drive business growth and enhance customer relationships.",
    },
    {
      icon: Users,
      title: "Team",
      description: "Industry specialists with deep expertise in Salesforce and business transformation.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering exceptional results and exceeding client expectations.",
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "Helping businesses scale and optimize their operations with intelligent solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-br from-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We help Fortune 500 companies and startups alike build the CRM of their dreams.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="left">
              <div className="space-y-6">
                <h2 className="text-4xl font-bold text-white">
                  Our Story
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Founded by industry veterans who understand that one size doesn't fit all, 
                  Cloudastick emerged from the need for personalized CRM solutions that truly 
                  understand your business.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  With decades of combined experience in Salesforce consulting and business 
                  transformation, we've helped hundreds of companies optimize their customer 
                  relationships and drive growth.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20">
                <div className="text-center">
                  <div className="text-5xl font-bold text-cyan-400 mb-2">500+</div>
                  <div className="text-gray-300">Successful Projects</div>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">98%</div>
                    <div className="text-gray-400 text-sm">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white mb-1">24/7</div>
                    <div className="text-gray-400 text-sm">Support</div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="py-20 bg-gradient-to-br from-gray-800/80 to-gray-900/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-8">
              What Sets Us Apart
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Industry-Smart CRM Design",
              "Boutique Attention", 
              "Salesforce Expertise",
              "End-to-End Services"
            ].map((feature, index) => (
              <AnimatedSection
                key={feature}
                delay={index * 0.2}
                direction={index % 2 === 0 ? "left" : "right"}
                className="group"
              >
                <motion.div
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="relative bg-gradient-to-br from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-500 backdrop-blur-sm overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.3, duration: 0.6, type: "spring" }}
                    className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <motion.div
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/60 border-t-white rounded-full"
                    />
                  </motion.div>
                  
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                    className="text-xl font-bold text-white text-center group-hover:text-cyan-300 transition-colors duration-300"
                  >
                    {feature}
                  </motion.h3>
                  
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.8 }}
                    className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-4 rounded-full group-hover:w-24 transition-all duration-300"
                  />
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Built on a foundation of expertise, innovation, and client success.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection
                key={value.title}
                delay={index * 0.1}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="text-center p-6 rounded-xl bg-gray-800/80 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Meet the experts behind Cloudastick's success.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              { name: "Mina Michel", role: "Founder & Managing Director", image: minaImage },
              { name: "Marina Danial", role: "CFO", image: marinaImage },
              { name: "Mourad Takawi", role: "Salesforce Technical Project Manager", image: mouradImage },
              { name: "Susan Rizk", role: "Program Manager", image: susanImage },
              { name: "Nora Salman", role: "Business Analyst & Pre-Sales Consultant", image: noraImage },
              { name: "Ashraf Rezk", role: "Head of Technology", image: ashrafImage },
              { name: "Luay Aladin", role: "Salesforce Consultant", image: luayImage },
              { name: "Fady Maged", role: "Salesforce Platform Developer", image: fadyImage },
              { name: "Andrew Ossama", role: "Salesforce Platform Developer", image: andrewImage },
              { name: "Carine Felix", role: "Brand & People Experience Specialist", image: carineImage },
              { name: "Mireille Rafik", role: "Marketing & Brand Development", image: mireilleImage }
            ].map((member, index) => (
              <AnimatedSection
                key={member.name}
                delay={index * 0.1}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-gray-800/80 rounded-2xl p-4 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 text-center"
                >
                  <div className="relative mb-4">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-cyan-500/30 group-hover:border-cyan-400 transition-colors duration-300">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 text-sm mb-2 font-medium">
                    {member.role}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
