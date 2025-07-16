
import { motion } from "framer-motion";
import { Target, Users, Award, TrendingUp } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";

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

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member, index) => (
              <AnimatedSection
                key={member}
                delay={index * 0.2}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gray-800/80 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white text-center mb-2">
                    Team Member {member}
                  </h3>
                  <p className="text-cyan-400 text-center mb-4">
                    Senior Consultant
                  </p>
                  <p className="text-gray-400 text-center text-sm">
                    Expert in Salesforce architecture and business transformation 
                    with over 10 years of experience.
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
